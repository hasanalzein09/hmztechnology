import MarketPageContent, { marketMetadata } from "@/components/MarketPageContent";

export const metadata = marketMetadata("lebanon");

export default function Page() {
  return <MarketPageContent market="lebanon" />;
}
