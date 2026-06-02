import { NextRequest, NextResponse } from "next/server";

import { getInstagramPostGraphQL } from "./utils";

interface RouteContext {
  params: Promise<{
    shortcode: string;
  }>;
}

export async function GET(request: NextRequest, context: RouteContext) {
  const { shortcode } = await context.params;

  if (!shortcode) {
    return NextResponse.json(
      { error: "noShortcode", message: "shortcode is required" },
      { status: 400 }
    );
  }

  try {
    const response = await getInstagramPostGraphQL({
      shortcode,
    });

    const status = response.status;

    if (status === 200) {
      const json = await response.json();
      const items = json?.data?.xdt_api__v1__media__shortcode__web_info?.items;
      const media = items?.[0];
      if (!media) {
        return NextResponse.json(
          { error: "notFound", message: "post not found" },
          { status: 404 }
        );
      }

      // Map to format expected by client
      const mapped = {
        data: {
          xdt_shortcode_media: {
            __typename: media.media_type === 2 ? "XDTGraphVideo" : "XDTGraphImage",
            id: String(media.pk || ""),
            shortcode: media.code || shortcode,
            is_video: media.media_type === 2 || media.media_type === 8,
            video_url: media.video_versions?.[0]?.url || null,
            display_url: media.image_versions2?.candidates?.[0]?.url || "",
            thumbnail_src: media.image_versions2?.candidates?.[0]?.url || "",
            dimensions: {
              height: media.original_height || 0,
              width: media.original_width || 0,
            },
            video_duration: media.video_duration || 0,
            taken_at_timestamp: media.taken_at || 0,
            owner: media.user || null,
            edge_media_to_caption: {
              edges: media.caption ? [{ node: { text: media.caption.text || "" } }] : [],
            },
            edge_media_preview_like: {
              count: media.like_count || 0,
            },
            edge_media_to_comment: {
              count: media.comment_count || 0,
            },
            product_type: media.product_type || "",
            gating_info: null,
            fact_check_overall_rating: null,
            fact_check_information: null,
            sensitivity_friction_info: null,
            sharing_friction_info: media.sharing_friction_info || { should_have_sharing_friction: false, bloks_app_url: null },
            media_overlay_info: null,
            media_preview: media.preview || "",
            display_resources: (media.image_versions2?.candidates || []).map((c: any) => ({
              src: c.url,
              config_width: c.width,
              config_height: c.height,
            })),
            accessibility_caption: media.accessibility_caption || null,
            dash_info: { is_dash_eligible: false, video_dash_manifest: "", number_of_qualities: 0 },
            has_audio: media.has_audio || false,
            video_view_count: media.view_count || 0,
            video_play_count: media.view_count || 0,
            encoding_status: null,
            is_published: true,
            title: "",
            clips_music_attribution_info: null,
            tracking_token: media.organic_tracking_token || "",
            upcoming_event: null,
            edge_media_to_tagged_user: { edges: media.usertags?.edges || [] },
            can_see_insights_as_brand: false,
            caption_is_edited: false,
            has_ranked_comments: false,
            like_and_view_counts_disabled: !!media.like_and_view_counts_disabled,
            edge_media_to_parent_comment: { count: 0, page_info: null, edges: [] },
            edge_media_to_hoisted_comment: { edges: [] },
            edge_media_preview_comment: { count: 0, edges: [] },
            comments_disabled: !!media.comments_disabled,
            commenting_disabled_for_viewer: !!media.commenting_disabled_for_viewer,
            edge_media_to_sponsor_user: { edges: [] },
            is_affiliate: false,
            is_paid_partnership: !!media.is_paid_partnership,
            location: media.location || null,
            nft_asset_info: null,
            viewer_has_liked: false,
            viewer_has_saved: !!media.has_viewer_saved,
            viewer_has_saved_to_collection: false,
            viewer_in_photo_of_you: false,
            viewer_can_reshare: !!media.can_reshare,
            is_ad: false,
            edge_web_media_to_related_media: { edges: [] },
            coauthor_producers: media.coauthor_producers || [],
            pinned_for_users: [],
          },
        },
      };

      return NextResponse.json(mapped, { status: 200 });
    }

    if (status === 404) {
      return NextResponse.json(
        { error: "notFound", message: "post not found" },
        { status: 404 }
      );
    }

    if (status === 429 || status === 401) {
      return NextResponse.json(
        {
          error: "tooManyRequests",
          message: "too many requests, try again later",
        },
        { status: 429 }
      );
    }

    throw new Error("Failed to fetch post data");
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: "serverError", message: error.message },
      { status: 500 }
    );
  }
}
