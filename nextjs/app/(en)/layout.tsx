import type { Metadata } from "next";
import RootShell from "@/components/RootShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hmz.technology"),
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }], apple: "/apple-touch-icon.png" },
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="en" dir="ltr">
      {children}
    </RootShell>
  );
}
