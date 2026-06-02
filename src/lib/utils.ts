import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const URL_REGEX = /\/(p|reel|reels)\/([a-zA-Z0-9_.-]+)(?:\/(\d+))?\/?/;

export function isShortcodePresent(url: string) {
  const match = url.match(URL_REGEX);
  if (!match) return false;
  return true;
}

export function getPostShortcode(url: string): string | null {
  const match = url.match(URL_REGEX);
  if (!match) return null;
  return match[2] || null;
}
