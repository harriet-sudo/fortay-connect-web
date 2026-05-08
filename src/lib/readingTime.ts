/**
 * Estimate reading time in whole minutes.
 *
 * Accepts either a markdown string or a Portable Text body (array of
 * blocks, possibly stringified JSON). Counts plain word tokens and
 * divides by an average adult reading speed of 220 words per minute.
 * Always returns at least 1 minute so the byline never reads
 * "(0 min read)".
 */

const WORDS_PER_MINUTE = 220;

type PortableTextBlock = {
  _type?: string;
  children?: { text?: string }[];
  body?: string;
};

export function readingTimeFromBody(
  body: string | PortableTextBlock[] | undefined,
  isPortableText?: boolean,
): number {
  if (!body) return 1;
  let text = "";

  if (isPortableText) {
    const blocks: PortableTextBlock[] =
      typeof body === "string" ? safeParse(body) : (body ?? []);
    for (const block of blocks ?? []) {
      if (block?._type === "block" && Array.isArray(block.children)) {
        text += " " + block.children.map((c) => c?.text ?? "").join(" ");
      } else if (block?._type === "callout") {
        text += " " + (block.body ?? "");
      }
    }
  } else if (typeof body === "string") {
    // Strip markdown noise so the count is closer to reader-facing words.
    text = body
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/`[^`]*`/g, " ")
      .replace(/[#>*_\-|]/g, " ");
  }

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function safeParse(input: string): PortableTextBlock[] {
  try {
    const parsed = JSON.parse(input);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
