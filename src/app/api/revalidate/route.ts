/**
 * Sanity webhook endpoint.
 *
 * When content changes in Sanity, a webhook sends a POST request here
 * with a signed body. This handler verifies the signature and calls
 * revalidatePath / revalidateTag on the affected Next.js pages so
 * changes go live without a full rebuild.
 *
 * Setup:
 *   1. Add SANITY_REVALIDATE_SECRET to .env.local (any random string).
 *   2. In Sanity: Project > API > Webhooks > Create.
 *      URL:     https://fortayconnect.com/api/revalidate
 *      Trigger: Create, Update, Delete
 *      Filter:  _type in ["caseStudy", "article", "industryPage", "technologyPage", "partnerPage", "faq", "testimonial", "trustedByLogo", "teamMember", "siteSettings"]
 *      Projection: { "_type": _type, "slug": slug.current }
 *      Secret:  paste the same value as SANITY_REVALIDATE_SECRET
 */

import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type: string;
  slug?: string;
};

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 },
      );
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Bad payload" }, { status: 400 });
    }

    const { _type, slug } = body;

    // Revalidate by tag for list-like content
    revalidateTag(_type);

    // Revalidate the specific route(s) affected
    switch (_type) {
      case "caseStudy":
        revalidatePath("/case-studies");
        if (slug) revalidatePath(`/case-studies/${slug}`);
        break;
      case "article":
        revalidatePath("/insights");
        if (slug) revalidatePath(`/insights/${slug}`);
        break;
      case "industryPage":
        revalidatePath("/industries");
        if (slug) revalidatePath(`/industries/${slug}`);
        break;
      case "technologyPage":
        revalidatePath("/technology");
        if (slug) revalidatePath(`/technology/${slug}`);
        break;
      case "partnerPage":
        revalidatePath("/partners");
        if (slug) revalidatePath(`/partners/${slug}`);
        break;
      case "faq":
      case "testimonial":
      case "trustedByLogo":
      case "teamMember":
      case "siteSettings":
        // These appear on many pages. A layout-level revalidate is
        // pragmatic. Narrow later if rebuild times become an issue.
        revalidatePath("/", "layout");
        break;
      default:
        revalidatePath("/");
    }

    return NextResponse.json({
      revalidated: true,
      type: _type,
      slug: slug ?? null,
    });
  } catch (err: any) {
    console.error("[revalidate] error:", err);
    return NextResponse.json(
      { message: err?.message ?? "Unknown error" },
      { status: 500 },
    );
  }
}
