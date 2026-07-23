import MarketPageContent, { marketMetadata } from "@/components/MarketPageContent";

export const metadata = marketMetadata("malaysia");

export default function Page() {
  return <MarketPageContent market="malaysia" />;
}
