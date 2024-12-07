// src/app/about/[projectSlug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { projectContents } from "@/data/projectContents";
import { parseMarkdownToHtml, isValidMarkdown } from "@/utils/markdownParser";

// Generate static params untuk routing build-time
export async function generateStaticParams() {
  return Object.keys(projectContents).map((projectSlug) => ({
    projectSlug,
  }));
}

// Metadata dinamis
export async function generateMetadata({
  params,
}: {
  params: { projectSlug: string };
}) {
  const project = projectContents[params.projectSlug];

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan",
      description: "Proyek yang Anda cari tidak tersedia",
    };
  }

  return {
    title: `${project.title}`,
    description: project.summary,
  };
}

export default function page({ params }: { params: { projectSlug: string } }) {
  // Ambil proyek berdasarkan slug
  const project = projectContents[params.projectSlug];

  if (!project) {
    notFound();
  }

  const isValid = isValidMarkdown(project.content);
  if (!isValid) {
    return <p>Invalid Markdown content</p>;
  }
  
  const parsedContent = parseMarkdownToHtml(project.content);

  return (
    <div>
      <h1>{project.title}</h1>
      <Image
        src={project.aboutImage}
        alt={project.title}
        width={600}
        height={400}
      />
      <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
    </div>
  );
}
