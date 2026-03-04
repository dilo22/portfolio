import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolio, projects } from "@/data/portfolio";

export default function HomePage() {
  const technique = projects
    .filter((p) => p.category === "Technique")
    .slice(0, 6);

  const web = projects.filter((p) => p.category === "Web").slice(0, 6);

  // Sélection personnalisée (2 techniques + 2 web)
  const raytracing =
    projects.find((p) => p.slug === "raytracing") ??
    projects.find((p) => p.title.toLowerCase().includes("raytracing"));

  const compilateur =
    projects.find((p) => p.slug === "compilateur-algo-ram") ??
    projects.find((p) => p.slug === "compilateur") ??
    projects.find((p) => p.title.toLowerCase().includes("compilateur"));

  const selected = [raytracing, compilateur, ...web.slice(0, 2)].filter(
    (p): p is (typeof projects)[number] => Boolean(p)
  );

  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-12">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="inline-flex items-center rounded-full border border-neutral-200 bg-white/60 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur">
                {portfolio.subtitle}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                HIBA Hedil
              </h1>
              <p className="mt-4 max-w-xl text-neutral-600">
                Je conçois des projets techniques, des applications web et des créations visuelles où la créativité guide chaque ligne de code.
                J’aime transformer des idées en expériences concrètes, mêler logique et imagination, et donner vie à des interfaces qui ont du caractère.
                Du code propre, oui, mais surtout des solutions originales, pensées avec précision et une vraie attention aux détails.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/projects">Voir mes projets</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/contact">Me contacter</Link>
                </Button>
              </div>

              <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 text-sm text-neutral-600">
  
              <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="font-medium text-neutral-900">Algorithmique</p>
                <p className="mt-1">
                  J’explore la logique et les structures de l’informatique pour concevoir
                  des applications et programmes techniques solides et efficaces.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="font-medium text-neutral-900">Développement Web</p>
                <p className="mt-1">
                  Next.js, JavaScript / TypeScript, Python, bases de données et APIs pour
                  créer des applications web modernes et performantes.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="font-medium text-neutral-900">Création visuelle</p>
                <p className="mt-1">
                  Photoshop, montage vidéo et conception graphique pour créer des visuels,
                  identités et contenus numériques complets.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4 shadow-sm backdrop-blur">
                <p className="font-medium text-neutral-900">SEO & visibilité</p>
                <p className="mt-1">
                  Optimisation SEO, structure des pages, performance web et bonnes
                  pratiques pour améliorer la visibilité des projets.
                </p>
              </div>

            </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-soft backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-neutral-800">
                    Sélection de projets
                  </p>
                  <Link
                    className="text-sm text-neutral-600 underline-offset-4 hover:underline"
                    href="/projects"
                  >
                    Tout voir
                  </Link>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {selected.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200">
                        <Image
                          src={p.imagePath}
                          alt={p.title}
                          fill
                          className="object-cover transition group-hover:scale-[1.02]"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                      <p className="mt-3 font-medium text-neutral-900">
                        {p.title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-sm text-neutral-600">
                        {p.shortDescription}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Technique */}
      <Section
        id="projets-techniques"
        title="Projets Techniques & Réalisations"
        description="Applications, moteurs, jeux, compilation, algorithmique et outils."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {technique.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-8">
          <Button variant="secondary" asChild>
            <Link href="/projects">Voir tous les projets</Link>
          </Button>
        </div>
      </Section>

      {/* Web */}
      <Section
        id="projets-web"
        title="Projets de Développement Web"
        description="Front / back, CRUD, e-commerce, interfaces orientées produit."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {web.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      {/* Galerie */}
      {/* Galerie */}
      <Section
        id="galerie"
        title="Galerie"
        description="Logos, affiches, cartes de visite, et carnet de voyage interactif."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Link
            href="/gallery#logos"
            className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <p className="text-xs font-semibold tracking-wide text-neutral-500">
              LOGO
            </p>
            <p className="mt-2 text-lg font-semibold">Identités & marques</p>
            <p className="mt-2 text-sm text-neutral-600">
              Logos et explorations graphiques pour des projets et des clients.
            </p>
          </Link>

          <Link
            href="/gallery#affiches"
            className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <p className="text-xs font-semibold tracking-wide text-neutral-500">
              Affiches
            </p>
            <p className="mt-2 text-lg font-semibold">Print & visuels</p>
            <p className="mt-2 text-sm text-neutral-600">
              Affiches, flyers et compositions pour réseaux sociaux et événements.
            </p>
          </Link>

          <Link
            href="/gallery#cartes"
            className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <p className="text-xs font-semibold tracking-wide text-neutral-500">
              Cartes
            </p>
            <p className="mt-2 text-lg font-semibold">Cartes de visite</p>
            <p className="mt-2 text-sm text-neutral-600">
              Designs recto/verso, variantes et déclinaisons prêtes à imprimer.
            </p>
          </Link>

          <Link
            href="/gallery#carnet"
            className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <p className="text-xs font-semibold tracking-wide text-neutral-500">
              Carnet
            </p>
            <p className="mt-2 text-lg font-semibold">Carnet de voyage</p>
            <p className="mt-2 text-sm text-neutral-600">
              Présentation interactive en mode “livre” : couverture + pages à feuilleter.
            </p>
          </Link>

          <Link
            href="/gallery#qr"
            className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-soft lg:col-span-2"
          >
            <p className="text-xs font-semibold tracking-wide text-neutral-500">
              QR CODE
            </p>
            <p className="mt-2 text-lg font-semibold">Vitrine QR</p>
            <p className="mt-2 text-sm text-neutral-600">
              Exemples de visuels QR pour campagnes, cartes, menus et accès rapides.
            </p>
          </Link>
        </div>
</Section>
    </main>
  );
}