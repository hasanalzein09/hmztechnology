import { buildMetadata } from "@/lib/seo";
import PrivacyPolicyComponent from "@/components/react/PrivacyPolicy";

export const metadata = buildMetadata({
  title: "Privacy Policy | HMZ Technology",
  description: "Privacy Policy for HMZ Technology",
  path: "/privacy-policy",
  locale: "en",
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyComponent />;
}
