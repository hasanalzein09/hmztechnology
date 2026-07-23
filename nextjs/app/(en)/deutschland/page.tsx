import MarketPageContent, { marketMetadata } from "@/components/MarketPageContent";

export const metadata = marketMetadata("deutschland");

export default function Page() {
  return <MarketPageContent market="deutschland" />;
}
