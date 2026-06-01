import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isShortcodePresent(url: string) {
  const regex = /\/(p|reel|reels|stories)\/([a-zA-Z0-9_.-]+)(?:\/(\d+))?\/?/;
  const match = url.match(regex);

  if (match) {
    if (match[1] === "stories") return !!match[3];
    return !!match[2];
  }

  return false;
}

export function getPostShortcode(url: string): string | null {
  const regex = /\/(p|reel|reels|stories)\/([a-zA-Z0-9_.-]+)(?:\/(\d+))?\/?/;
  const match = url.match(regex);

  if (match) {
    if (match[1] === "stories") return match[3] || null;
    return match[2] || null;
  }

  return null;
}
