"use client";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { portfolio } from "@/data/portfolio";

export default function ContactPage() {
  return (
    <main className="py-14">
      <Container>
        <Section
          title="Contact"
          description="N’hésitez pas à me contacter pour toute question, idée ou demande de projet."
        >
          <div className="flex justify-center">
            <div className="w-full max-w-xl rounded-3xl border border-neutral-200 bg-white/80 p-8 shadow-soft backdrop-blur">
              <h2 className="text-lg font-semibold">Coordonnées</h2>

              <p className="mt-6 text-neutral-700">
                <span className="font-medium">Email :</span>{" "}
                <a
                  className="underline-offset-4 hover:underline"
                  href={`mailto:${portfolio.email}`}
                >
                  {portfolio.email}
                </a>
              </p>

              <p className="mt-3 text-neutral-700">
                <span className="font-medium">Téléphone :</span>{" "}
                <a
                  className="underline-offset-4 hover:underline"
                  href={`tel:${portfolio.phone.replace(/\s/g, "")}`}
                >
                  {portfolio.phone}
                </a>
              </p>

              <div className="mt-8">
                <Button asChild>
                  <a
                    href={`mailto:${portfolio.email}`}
                    rel="noreferrer"
                  >
                    Envoyer via mailto
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  );
}