import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const fileUrl = searchParams.get("url");
  const filename = searchParams.get("filename") || "anixinsta-video.mp4";

  if (!fileUrl) {
    return NextResponse.json(
      { error: "missingUrl", message: "url is required" },
      { status: 400 }
    );
  }

  try {
    // Validate the URL slightly (optional but recommended)
    if (!fileUrl.startsWith("https://")) {
      return NextResponse.json(
        { error: "Invalid URL format" },
        { status: 400 }
      );
    }

    // Fetch the video from the external URL with proper headers
    const videoResponse = await fetch(fileUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G973U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36",
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        Referer: "https://www.instagram.com/",
        Origin: "https://www.instagram.com",
        DNT: "1",
        Connection: "keep-alive",
        "Sec-Fetch-Dest": "video",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "cross-site",
      },
    });

    if (!videoResponse.ok) {
      throw new Error(`Failed to fetch video: ${videoResponse.statusText}`);
    }

    // Get the video data as a ReadableStream
    const videoStream = videoResponse.body;

    if (!videoStream) {
      throw new Error("Video stream is not available");
    }

    // Set headers to force download
    const headers = new Headers();
    headers.set("Content-Disposition", `attachment; filename="${filename}"`);
    // Try to get Content-Type from original response, fallback to generic video type
    headers.set(
      "Content-Type",
      videoResponse.headers.get("Content-Type") || "video/mp4"
    );
    // Optionally set Content-Length if available
    if (videoResponse.headers.get("Content-Length")) {
      headers.set(
        "Content-Length",
        videoResponse.headers.get("Content-Length")!
      );
    }

    // Return the stream response
    return new NextResponse(videoStream, {
      status: 200,
      headers: headers,
    });
  } catch (error: any) {
    console.error("Download proxy error:", error);
    return NextResponse.json(
      { error: "serverError", message: error.message },
      { status: 500 }
    );
  }
}
