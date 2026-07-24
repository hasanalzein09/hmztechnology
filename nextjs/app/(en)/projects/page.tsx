import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, projectsIndexJsonLd } from "@/lib/schemas";
import { projectsData } from "@/lib/projectsData";
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
  const schemas = [
    projectsIndexJsonLd(projectsData.en.projects, "en"),
    breadcrumbJsonLd(
      [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
      ],
      "en",
    ),
  ];
  return (
    <>
      <Header lang="en" />
      <main>
        {schemas.map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
        <TranslatedProjects lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
