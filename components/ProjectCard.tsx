import Image from "next/image";
import Link from "next/link";
import { Tag } from "./Tag";
import { Button } from "./Button";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-soft">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-200 bg-white">
          <Image
            src={project.imagePath}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 5).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </Link>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button asChild>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Button>
        <Button variant="secondary" asChild>
          <Link href={`/projects/${project.slug}`}>Détails</Link>
        </Button>
      </div>
    </article>
  );
}