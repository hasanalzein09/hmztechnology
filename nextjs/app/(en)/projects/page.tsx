import { buildMetadata } from "@/lib/seo";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import TranslatedProjects from "@/components/react/TranslatedProjects";

export const metadata = buildMetadata({
  title: "Our Projects | Success Stories | HMZ Technology",
  description:
    "Discover our successful AI automation projects. Real results from real clients.",
  path: "/projects",
  locale: "en",
});

export default function ProjectsPage() {
  return (
    <>
      <Header lang="en" />
      <main>
        <TranslatedProjects lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
