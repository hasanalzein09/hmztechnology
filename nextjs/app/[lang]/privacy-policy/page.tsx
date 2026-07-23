import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PrivacyPolicyComponent from "@/components/react/PrivacyPolicy";

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
    title: "Privacy Policy | HMZ Technology",
    description: "Privacy Policy for HMZ Technology",
    path: "/privacy-policy",
    locale: lang,
  });
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyComponent />;
}
