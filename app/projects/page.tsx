"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/Button";

type CategoryFilter = "Tous" | "Technique" | "Web";

export default function ProjectsPage() {
  const [category, setCategory] = useState<CategoryFilter>("Tous");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const inCat = category === "Tous" ? true : p.category === category;
      if (!inCat) return false;
      if (!q) return true;
      const hay = [
        p.title,
        p.shortDescription,
        p.longDescription,
        p.category,
        p.tech.join(" "),
        p.tags.join(" ")
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [category, query]);

  return (
    <main className="py-14">
      <Container>
        <Section
          title="Tous les projets"
          description="Filtre par catégorie et recherche texte."
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {(["Tous", "Technique", "Web"] as const).map((c) => (
                <Button
                  key={c}
                  variant={category === c ? "primary" : "secondary"}
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                >
                  {c}
                </Button>
              ))}
            </div>

            <div className="w-full sm:w-[360px]">
              <label className="sr-only" htmlFor="search">
                Rechercher
              </label>
              <input
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un projet, techno, tag…"
                className="w-full rounded-2xl border border-neutral-200 bg-white/70 px-4 py-3 text-sm shadow-sm backdrop-blur outline-none transition focus:border-neutral-400"
              />
            </div>
          </div>

          <p className="mt-4 text-sm text-neutral-600">
            {filtered.length} projet(s) trouvé(s).
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}