"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import DebugPayloadPanel from "@/components/checkout/DebugPayloadPanel";
import { useCheckoutStore } from "@/lib/store/checkoutStore";
import type { SiteConfig } from "@/lib/config";

export default function Step6ThankYou({ config }: { config: SiteConfig }) {
  const listingChoice = useCheckoutStore((s) => s.listingChoice);
  const debugSubmissionPayload = useCheckoutStore((s) => s.debugSubmissionPayload);
  const contact = useCheckoutStore((s) => s.contact);
  const reset = useCheckoutStore((s) => s.reset);

  // Portal to <body> so this modal is positioned relative to the viewport,
  // not clipped by ancestor page-transition wrappers that apply a transform
  // (any non-"none" transform on an ancestor becomes the containing block
  // for position: fixed descendants).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark/60 backdrop-blur-sm p-4">
      <FadeIn>
        <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl mx-auto text-center py-8 px-6 space-y-6">
          <CheckCircle2 size={48} className="text-success mx-auto" />
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Thank You!</h2>
            {listingChoice === "later" ? (
              <p className="text-muted">
                We&apos;ve emailed a checklist to <strong>{contact.email || "your inbox"}</strong> with
                everything needed to finish your listing (CC&apos;d to{" "}
                {config.emailTemplates.ccAddress}). Complete it whenever you&apos;re ready.
              </p>
            ) : (
              <p className="text-muted">
                Your order has been received. Your listing will go live within approximately{" "}
                <strong>{config.productionTimelineDays} business days</strong>. A confirmation has
                been sent to <strong>{contact.email || "your inbox"}</strong>.
              </p>
            )}
          </div>

          {process.env.NODE_ENV !== "production" && (
            <div className="text-left">
              <DebugPayloadPanel payload={debugSubmissionPayload} />
            </div>
          )}

          <Button variant="outline" onClick={reset}>
            Start a New Application
          </Button>
        </div>
      </FadeIn>
    </div>,
    document.body,
  );
}
