import { buildMetadata } from "@/lib/seo";
import TermsOfServiceComponent from "@/components/react/TermsOfService";

export const metadata = buildMetadata({
  title: "Terms of Service | HMZ Technology",
  description: "Terms of Service for HMZ Technology",
  path: "/terms-of-service",
  locale: "en",
});

export default function TermsOfServicePage() {
  return <TermsOfServiceComponent />;
}
