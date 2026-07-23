import MarketPageContent, { marketMetadata } from "@/components/MarketPageContent";

export const metadata = marketMetadata("italia");

export default function Page() {
  return <MarketPageContent market="italia" />;
}
