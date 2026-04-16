"use client";

/**
 * SectionBridge
 *
 * A narrow gradient strip that softens the transition between a dark
 * section and a light section (or vice versa). Drop it directly
 * between two sections in the page layout.
 *
 * Usage:
 *   <DarkSection />
 *   <SectionBridge from="dark" to="light" />
 *   <LightSection />
 *
 * Colours map to the Fortay Connect palette:
 *   dark       -> #141929 (navy primary)
 *   darkElev   -> #1A2035 (navy elevated)
 *   light      -> #F7F9FC (section background)
 *   softPurple -> #F5F3FF (soft purple wash)
 *   teal       -> #06CEB5 (primary accent, used for CTA band)
 */

type Tone = "dark" | "darkElev" | "light" | "softPurple" | "teal";

const TONE_HEX: Record<Tone, string> = {
  dark: "#141929",
  darkElev: "#1A2035",
  light: "#F7F9FC",
  softPurple: "#F5F3FF",
  teal: "#06CEB5",
};

interface Props {
  from: Tone;
  to: Tone;
  /** Height of the bridge in rem. Default 4 (64px). */
  height?: number;
}

const SectionBridge = ({ from, to, height = 4 }: Props) => (
  <div
    aria-hidden="true"
    className="w-full"
    style={{
      height: `${height}rem`,
      background: `linear-gradient(to bottom, ${TONE_HEX[from]} 0%, ${TONE_HEX[to]} 100%)`,
    }}
  />
);

export default SectionBridge;
