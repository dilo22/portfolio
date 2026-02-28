import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { GalleryGrid } from "@/components/GalleryGrid";
import { gallery } from "@/data/portfolio";

export const metadata = {
  title: "Galerie",
  description: "Logos, affiches, et QR codes."
};

export default function GalleryPage() {
  return (
    <main className="py-14">
      <Container>
        <Section
          title="Galerie"
          
        >
          <div id="logos" className="scroll-mt-28">
            <h2 className="text-xl font-semibold">LOGO</h2>
            
            <div className="mt-6">
              <GalleryGrid items={gallery.logos} itemAltPrefix="Logo" aspect="4/3" fit="contain" />
            </div>
          </div>

          <div id="affiches" className="mt-12 scroll-mt-28">
            <h2 className="text-xl font-semibold">Affiches</h2>
           
            <div className="mt-6">
              <GalleryGrid items={gallery.posters} itemAltPrefix="Affiche" aspect="3/4" fit="contain" />
            </div>
          </div>

          <div id="qr" className="mt-12 scroll-mt-28">
            <h2 className="text-xl font-semibold">QR CODE</h2>
            

            <div className="mt-6 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft">
              <div className="relative aspect-[21/9]">
                <Image
                  src={gallery.qrShowcase}
                  alt="Vitrine QR codes"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-neutral-600">
                  
                 
                </p>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  );
}