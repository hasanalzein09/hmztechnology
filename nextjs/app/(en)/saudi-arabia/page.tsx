import MarketPageContent, { marketMetadata } from "@/components/MarketPageContent";

export const metadata = marketMetadata("saudi-arabia");

export default function Page() {
  return <MarketPageContent market="saudi-arabia" />;
}
