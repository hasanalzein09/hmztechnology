import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/react/Header";
import Footer from "@/components/react/Footer";
import TranslatedProjectDetail from "@/components/react/TranslatedProjectDetail";
import { projectsData } from "@/lib/projectsData";
import type { Language } from "@/components/react/types";

const LANGS = ["ar", "de", "fr", "it", "hi", "ms"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  // Get all project slugs from English (primary source)
  return LANGS.flatMap((lang) =>
    projectsData.en.projects.map((project) => ({
      lang,
      project: project.slug,
    })),
  );
}

function getProject(slug: string) {
  return projectsData.en.projects.find((p) => p.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; project: string }>;
}): Promise<Metadata> {
  const { lang, project } = await params;
  const projectData = getProject(project);
  return buildMetadata({
    title: projectData ? `${projectData.title} | HMZ Technology` : "Project | HMZ Technology",
    description: projectData?.description || "View our project case study.",
    path: `/projects/${project}`,
    locale: lang,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: string; project: string }>;
}) {
  const { lang, project } = await params;
  if (!getProject(project)) notFound();
  return (
    <>
      <Header lang={lang} />
      <main>
        <TranslatedProjectDetail projectSlug={project} lang={lang as Language} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
