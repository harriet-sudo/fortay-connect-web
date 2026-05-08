"use client";

import { useState } from "react";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";

export type NewsletterSignupProps = {
  source?: string;
  heading?: string;
  body?: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup({
  source = "newsletter-form",
  heading = "Stay sharp on CX, AI and unified communications.",
  body = "One short email a fortnight. New articles, customer stories, and insights from the Fortay Connect team. No spam, unsubscribe in one click.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        throw new Error(
          data?.error ?? "Something went wrong. Please try again.",
        );
      }
      setStatus("success");
      setMessage("You're in. Check your inbox for a confirmation soon.");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <section className="my-16 rounded-2xl border border-border bg-muted/30 p-8 md:p-10">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Mail className="h-6 w-6" />
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{body}</p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          aria-label="Newsletter signup"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@yourcompany.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading" || status === "success"}
            className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Subscribing
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Subscribed
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>

        {message && (
          <p
            className={`mt-3 text-sm ${
              status === "success" ? "text-primary" : "text-destructive"
            }`}
            role={status === "error" ? "alert" : undefined}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
