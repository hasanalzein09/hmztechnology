import MarketPageContent, { marketMetadata } from "@/components/MarketPageContent";

export const metadata = marketMetadata("uae");

export default function Page() {
  return <MarketPageContent market="uae" />;
}
