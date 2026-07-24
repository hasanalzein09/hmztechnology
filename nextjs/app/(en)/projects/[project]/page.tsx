import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/schemas";
import { projectsData } from "@/lib/projectsData";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import TranslatedProjectDetail from "@/components/react/TranslatedProjectDetail";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsData.en.projects.map((project) => ({ project: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const projectData = projectsData.en.projects.find((p) => p.slug === project);
  const title = projectData
    ? `${projectData.title} | HMZ Technology`
    : "Project | HMZ Technology";
  const description = projectData?.description || "View our project case study.";
  return buildMetadata({
    title,
    description,
    path: `/projects/${project}`,
    locale: "en",
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const projectData = projectsData.en.projects.find((p) => p.slug === project);
  const schemas = projectData
    ? [
        projectJsonLd(projectData, "en"),
        breadcrumbJsonLd(
          [
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: projectData.title, path: `/projects/${project}` },
          ],
          "en",
        ),
      ]
    : [];
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
        <TranslatedProjectDetail projectSlug={project} lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
