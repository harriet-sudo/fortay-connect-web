// Studio has its own minimal shell. We override the root layout so the
// site's nav, footer, and body padding don't wrap the Sanity Studio UI.

export const metadata = {
  title: "Fortay Connect CMS",
  robots: { index: false, follow: false },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
