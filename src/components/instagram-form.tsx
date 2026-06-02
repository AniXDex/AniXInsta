"use client";

import React from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form, FormItem, FormLabel, FormField, FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Download, Loader2, CheckCircle2, X } from "lucide-react";
import { cn, getPostShortcode, isShortcodePresent } from "@/lib/utils";
import { useGetInstagramPostMutation } from "@/features/react-query/mutations/instagram";
import { HTTP_CODE_ENUM } from "@/features/api/http-codes";

const CACHE_TIME = 5 * 60 * 1000;

const ERRORS: Record<string, string> = {
  notFound: "Post not found.",
  tooManyRequests: "Too many requests, try again later.",
  serverError: "Server unavailable, try again later.",
};

const schema = z.object({
  url: z.string().trim().min(1, "Instagram URL is required.")
    .startsWith("https://www.instagram.com", "Enter a valid Instagram URL.")
    .refine((v) => isShortcodePresent(v), "Enter a valid Instagram URL."),
});

function download(url: string, ext: string) {
  const id = Date.now().toString().slice(-8);
  const proxy = new URL("/api/download-proxy", location.origin);
  proxy.searchParams.set("url", url);
  proxy.searchParams.set("filename", `anixinsta-${id}.${ext}`);
  const a = document.createElement("a");
  a.href = proxy.toString();
  a.download = `anixinsta-${id}.${ext}`;
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

type Cached = { url?: string; ext?: string; err?: string; at: number };

export function InstagramForm(props: { className?: string }) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const cache = React.useRef(new Map<string, Cached>());
  const [state, setState] = React.useState<"idle" | "loading" | "done">("idle");

  const { isError, mutateAsync: fetchPost } = useGetInstagramPostMutation();
  const form = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema), defaultValues: { url: "" } });

  const error = form.formState.errors.url?.message;
  const val = form.watch("url");
  const busy = state === "loading";
  const showClear = val.length > 0 && !busy;

  function clear() { form.setValue("url", ""); form.clearErrors("url"); inputRef.current?.focus(); }

  function put(key: string, url?: string, ext?: string, err?: string) { cache.current.set(key, { url, ext, err, at: Date.now() + CACHE_TIME }); }
  function get(key: string) {
    const c = cache.current.get(key);
    if (!c || c.at < Date.now()) { if (c) cache.current.delete(key); return null; }
    return c;
  }

  async function onSubmit(v: z.infer<typeof schema>) {
    if (isError) toast.dismiss("toast-error");

    setState("loading");

    const code = getPostShortcode(v.url);
    if (!code) { form.setError("url", { message: "Invalid URL." }); setState("idle"); return; }

    const cached = get(code);
    if (cached?.err) { form.setError("url", { message: cached.err }); setState("idle"); return; }
    if (cached?.url && cached?.ext) { download(cached.url, cached.ext); setState("done"); setTimeout(() => setState("idle"), 1800); return; }

    try {
      const { data, status } = await fetchPost({ shortcode: code });
      if (status === HTTP_CODE_ENUM.OK) {
        const media = data.data.xdt_shortcode_media;
        if (media.is_video) {
          if (!media.video_url) throw new Error("No video URL");
          download(media.video_url, "mp4");
          put(code, media.video_url, "mp4");
        } else {
          download(media.display_url, "jpg");
          put(code, media.display_url, "jpg");
        }
        setState("done");
        toast.success("Download started!", { duration: 2000, position: "top-center" });
        setTimeout(() => setState("idle"), 1800);
      } else {
        const msg = ERRORS[(data as any)?.error] ?? "Something went wrong.";
        form.setError("url", { message: msg }); setState("idle");
        if (status === HTTP_CODE_ENUM.BAD_REQUEST || status === HTTP_CODE_ENUM.NOT_FOUND) put(code, undefined, undefined, msg);
      }
    } catch {
      setState("idle");
      toast.error("Something went wrong.", { dismissible: true, id: "toast-error", position: "top-center" });
    }
  }

  React.useEffect(() => { inputRef.current?.focus(); }, []);

  return (
    <div className={cn("w-full", props.className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-2.5 sm:flex-row">
          <FormField control={form.control} name="url" render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Instagram URL</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    {...field} type="url" ref={inputRef} disabled={busy}
                    placeholder="Paste Instagram URL..."
                    className={cn("h-11 pr-8 text-sm", error && "border-destructive")}
                  />
                  {showClear && (
                    <Button size="icon" variant="ghost" type="button" onClick={clear}
                      className="absolute right-0.5 top-1/2 h-6 w-6 -translate-y-1/2 rounded-md opacity-60 hover:opacity-100"
                    ><X className="h-3 w-3" /></Button>
                  )}
                </div>
              </FormControl>
            </FormItem>
          )} />
          <Button
            disabled={busy || !form.formState.isDirty}
            type="submit"
            className="h-11 shrink-0 rounded-lg px-5 text-sm font-medium transition-all duration-300 active:scale-[0.97] disabled:opacity-50"
            style={{
              backgroundColor: state === "done" ? "#16a34a" : "var(--gold)",
              color: "oklch(0.07 0.01 260)",
            }}
          >
            {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" />
            : state === "done" ? <><CheckCircle2 className="h-4 w-4" />Done</>
            : <><Download className="h-4 w-4" />Download</>}
          </Button>
        </form>
      </Form>
      {error && <p className="mt-1.5 animate-fade-in text-center text-xs text-destructive">{error}</p>}
      <p className="mt-1.5 text-center text-xs text-muted-foreground">Works with Instagram posts, reels &amp; images</p>
    </div>
  );
}
