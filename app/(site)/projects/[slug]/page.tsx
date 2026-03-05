import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/data/portfolio";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";
import { ProjectDescription } from "@/components/ProjectDescription"; // ✅ AJOUT

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-neutral-500">{project.category}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">{project.title}</h1>
          </div>

          <div className="flex gap-3">
            <Button variant="secondary" asChild>
              <Link href="/projects">Retour</Link>
            </Button>

            <Button asChild>
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>

        {/* Top grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-neutral-200 bg-white">
            <Image
              src={project.imagePath}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>

          {/* Side card */}
          <aside className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <h2 className="text-lg font-semibold">Technologies</h2>
            <ul className="mt-4 space-y-2 text-neutral-700">
              {project.tech.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-neutral-400">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-lg font-semibold">Tags</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <div className="mt-6">
              <Button className="w-full" asChild>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  Ouvrir sur GitHub
                </a>
              </Button>
            </div>
          </aside>
        </div>

        {/* Description card */}
        <section className="mt-8 rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
          <h2 className="text-lg font-semibold">Description</h2>

          <ProjectDescription
            longDescription={project.longDescription}
            extendedDescription={project.extendedDescription}
          />
        </section>
      </div>
    </main>
  );
}