import { projects } from "@/data/portfolio";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="py-14">
      <Container>
        <Section
          id="projects"
          title="Projets"
          description="Tous mes projets techniques et web."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}