import type { Metadata } from "next";
import RootShell from "@/components/RootShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hmz.technology"),
  icons: { icon: "/favicon.svg" },
};

const I18N_LOCALES = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export function generateStaticParams() {
  return I18N_LOCALES.map((lang) => ({ lang }));
}

export default async function LangRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <RootShell lang={lang} dir={dir}>
      {children}
    </RootShell>
  );
}
