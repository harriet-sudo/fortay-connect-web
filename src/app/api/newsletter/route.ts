import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  let body: { email?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const source = (body.source ?? "newsletter-form").trim().slice(0, 120);

  if (!email || !EMAIL_RE.test(email) || email.length > 320) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;
  const region = process.env.HUBSPOT_REGION ?? "na1";

  if (!portalId || !formId) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Newsletter signup is not configured. Set HUBSPOT_PORTAL_ID and HUBSPOT_FORM_ID in the environment.",
      },
      { status: 500 },
    );
  }

  const host = region === "eu1" ? "api-eu1.hsforms.com" : "api.hsforms.com";
  const url = `https://${host}/submissions/v3/integration/submit/${portalId}/${formId}`;

  const fwd = req.headers.get("x-forwarded-for");
  const ip = fwd
    ? fwd.split(",")[0].trim()
    : req.headers.get("x-real-ip") || undefined;
  const pageUri = req.headers.get("referer") ?? undefined;

  const payload: any = {
    fields: [{ objectTypeId: "0-1", name: "email", value: email }],
    context: {
      pageUri,
      pageName: "Fortay Connect newsletter",
    },
  };
  if (ip) payload.context.ipAddress = ip;
  if (source) {
    payload.fields.push({
      objectTypeId: "0-1",
      name: "signup_source",
      value: source,
    });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(
        "[newsletter] HubSpot rejected submission:",
        res.status,
        text,
      );
      return NextResponse.json(
        {
          ok: false,
          error:
            res.status === 400
              ? "Please check the email and try again."
              : "We could not save your subscription. Please try again later.",
        },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[newsletter] HubSpot request failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not reach our newsletter provider. Please try again.",
      },
      { status: 502 },
    );
  }
}
