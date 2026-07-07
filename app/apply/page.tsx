import type { Metadata } from "next";
import CheckoutWizard from "@/components/checkout/CheckoutWizard";
import { topAudiologistsConfig } from "@/lib/config";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: `List Your Practice — ${siteConfig.name}`,
  description: `Apply to list your audiology practice on ${siteConfig.name} and reach patients searching for hearing aids, cochlear implants, tinnitus management, and more in your city.`,
};

export default function ApplyPage() {
  return <CheckoutWizard config={topAudiologistsConfig} />;
}
