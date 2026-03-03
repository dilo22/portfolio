import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { GalleryGrid } from "@/components/GalleryGrid";
import { BookLightbox } from "@/components/BookLightbox";
import { gallery } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Logos, affiches, cartes de visite, carnet de voyage et QR codes.",
};

export default function GalleryPage() {
  return (
    <main className="py-14">
      <Container>
        <Section title="Galerie">
          {/* LOGOS */}
          <div id="logos" className="scroll-mt-28">
            <h2 className="text-xl font-semibold">Logos</h2>
            <div className="mt-6">
              <GalleryGrid
                items={gallery.logos}
                itemAltPrefix="Logo"
                aspect="4/3"
                fit="contain"
              />
            </div>
          </div>

          {/* AFFICHES */}
          <div id="affiches" className="mt-12 scroll-mt-28">
            <h2 className="text-xl font-semibold">Affiches</h2>
            <div className="mt-6">
              <GalleryGrid
                items={gallery.posters}
                itemAltPrefix="Affiche"
                aspect="3/4"
                fit="contain"
              />
            </div>
          </div>

          {/* CARTES DE VISITE */}
          <div id="cartes" className="mt-12 scroll-mt-28">
            <h2 className="text-xl font-semibold">Cartes de visite</h2>
            <p className="mt-2 text-neutral-600">
              Grille de {gallery.businessCards.length} images.
            </p>
            <div className="mt-6">
              <GalleryGrid
                items={gallery.businessCards}
                itemAltPrefix="Carte de visite"
                aspect="16/10"
                fit="contain"
              />
            </div>
          </div>

          {/* CARNET */}
          <div id="carnet" className="mt-12 scroll-mt-28">
            <h2 className="text-xl font-semibold">Carnet de voyage</h2>
            <p className="mt-2 max-w-2xl text-neutral-600">
              Cliquez sur la couverture pour feuilleter les pages.
            </p>

            <BookLightbox
              title={gallery.carnet.title}
              cover={gallery.carnet.cover}
              pages={gallery.carnet.pages}
              back={gallery.carnet.back}
            />
          </div>

          {/* QR CODE */}
          <div id="qr" className="mt-12 scroll-mt-28">
            <h2 className="text-xl font-semibold">QR Code</h2>

            <div className="mt-6 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft">
              <div className="relative aspect-[21/9]">
                <Image
                  src={gallery.qrShowcase}
                  alt="Vitrine QR codes"
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-neutral-600">
                  Remplace l’image dans{" "}
                  <span className="font-mono text-xs">/public/qr/</span>.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  );
}