import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import TermsOfServiceComponent from "@/components/react/TermsOfService";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata({
    title: "Terms of Service | HMZ Technology",
    description: "Terms of Service for HMZ Technology",
    path: "/terms-of-service",
    locale: lang,
  });
}

export default function TermsOfServicePage() {
  return <TermsOfServiceComponent />;
}
