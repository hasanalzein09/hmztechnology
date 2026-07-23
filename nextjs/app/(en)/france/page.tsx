import MarketPageContent, { marketMetadata } from "@/components/MarketPageContent";

export const metadata = marketMetadata("france");

export default function Page() {
  return <MarketPageContent market="france" />;
}
