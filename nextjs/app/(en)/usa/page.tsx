import MarketPageContent, { marketMetadata } from "@/components/MarketPageContent";

export const metadata = marketMetadata("usa");

export default function Page() {
  return <MarketPageContent market="usa" />;
}
