import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Tag } from "@/components/Tag";
import { getProjectBySlug, projects } from "@/data/portfolio";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const p = getProjectBySlug(params.slug);
  if (!p) return { title: "Projet introuvable" };

  return {
    title: p.title,
    description: p.shortDescription,
    openGraph: {
      title: p.title,
      description: p.shortDescription,
      images: [{ url: p.imagePath }],
      type: "article"
    }
  };
}

export default function ProjectDetailsPage({
  params
}: {
  params: { slug: string };
}) {
  const p = getProjectBySlug(params.slug);
  if (!p) return notFound();

  return (
    <main className="py-14">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-neutral-600">{p.category}</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
              {p.title}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" asChild>
              <Link href="/projects">Retour</Link>
            </Button>
            <Button asChild>
              <a href={p.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft">
              <Image
                src={p.imagePath}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={false}
              />
            </div>

            <div className="mt-6 rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="mt-3 text-neutral-700">{p.longDescription}</p>
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold">Technologies</h2>
              <ul className="mt-3 list-inside list-disc text-neutral-700">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <h3 className="mt-6 text-lg font-semibold">Tags</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="mt-6">
                <Button className="w-full" asChild>
                  <a href={p.githubUrl} target="_blank" rel="noreferrer">
                    Ouvrir sur GitHub
                  </a>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}