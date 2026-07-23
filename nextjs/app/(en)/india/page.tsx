import MarketPageContent, { marketMetadata } from "@/components/MarketPageContent";

export const metadata = marketMetadata("india");

export default function Page() {
  return <MarketPageContent market="india" />;
}
