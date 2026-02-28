import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] py-20">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border border-neutral-200 bg-white p-10 shadow-soft">
          <p className="text-sm font-medium text-neutral-600">Erreur 404</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Page introuvable
          </h1>
          <p className="mt-3 text-neutral-600">
            La page que vous cherchez n’existe pas (ou a été déplacée).
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/">Retour à l’accueil</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/projects">Voir les projets</Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}