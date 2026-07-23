import { Plus_Jakarta_Sans, Space_Grotesk, IBM_Plex_Sans_Arabic } from "next/font/google";
import Script from "next/script";
import { organizationGraph } from "@/lib/seo";
import LanguageDetector from "@/components/react/LanguageDetector";
import ConversionWidgets from "@/components/react/ConversionWidgets";
import "@/app/globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export default function RootShell({
  lang,
  dir,
  children,
}: {
  lang: string;
  dir: "ltr" | "rtl";
  children: React.ReactNode;
}) {
  return (
    <html
      lang={lang}
      dir={dir}
      className={`${jakarta.variable} ${grotesk.variable} ${plexArabic.variable}`}
    >
      <head>
        <meta name="theme-color" content="#030014" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              "@id": "https://www.hmz.technology/#nav",
              name: ["Services", "Solutions", "Blog", "FAQ", "About", "Contact"],
              url: [
                "https://www.hmz.technology/services",
                "https://www.hmz.technology/solutions",
                "https://www.hmz.technology/blog",
                "https://www.hmz.technology/faq",
                "https://www.hmz.technology/about",
                "https://www.hmz.technology/contact",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationGraph) }}
        />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Index" />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" title="HMZ Technology AI Blog" />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
        <LanguageDetector />
        <ConversionWidgets lang={lang} />
        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="lazyOnload">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "un5motiifo");
        `}</Script>
      </body>
    </html>
  );
}
