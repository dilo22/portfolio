"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  title: string;
  cover: string;
  pages: string[];
  back?: string;
};

export function BookLightbox({ title, cover, pages, back }: Props) {
  const all = useMemo(() => {
    const arr = [cover, ...pages];
    if (back) arr.push(back);
    return arr;
  }, [cover, pages, back]);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  const openAt = (i: number) => {
    lastActiveRef.current = document.activeElement as HTMLElement | null;
    setIndex(i);
    setOpen(true);
  };

  const close = () => setOpen(false);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(all.length - 1, i + 1));

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus();

    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) lastActiveRef.current?.focus?.();
  }, [open]);

  return (
    <>
      {/* Couverture */}
      <div className="mt-10 flex flex-col items-center">
        <p className="text-sm text-neutral-600">{title}</p>

        <button
          type="button"
          onClick={() => openAt(0)}
          className="group mt-5 w-[min(90vw,360px)] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
        >
          <div className="relative aspect-[3/4]">
            <Image
              src={cover}
              alt={`Couverture — ${title}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 90vw, 360px"
              priority
            />
          </div>

          <div className="flex items-center justify-between gap-3 p-4">
            <div className="text-left">
              <p className="text-base font-semibold">Ouvrir le carnet</p>
              <p className="mt-1 text-sm text-neutral-600">
                Cliquez pour feuilleter ({pages.length} pages)
              </p>
            </div>
            <span className="rounded-xl border border-neutral-200 px-3 py-2 text-sm">
              Voir
            </span>
          </div>
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div
            className="w-[min(1000px,90vw)] max-h-[85vh] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 p-4">
              <div>
                <p className="text-sm text-neutral-600">{title}</p>
                <p className="text-base font-semibold">
                  {index === 0 ? "Couverture" : `Page ${index}`}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  disabled={index === 0}
                  className="rounded-xl border border-neutral-200 px-3 py-2 text-sm disabled:opacity-50"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  disabled={index === all.length - 1}
                  className="rounded-xl border border-neutral-200 px-3 py-2 text-sm disabled:opacity-50"
                >
                  →
                </button>
                <button
                  ref={closeBtnRef}
                  onClick={close}
                  className="rounded-xl border border-neutral-200 px-3 py-2 text-sm"
                >
                  Fermer
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="grid lg:grid-cols-[1.4fr_0.6fr]">
              {/* Image principale */}
              <div className="p-4">
                <div className="flex h-[70vh] items-center justify-center rounded-2xl bg-neutral-50">
                  <Image
                    src={all[index]}
                    alt={`${title} — ${index === 0 ? "Couverture" : `Page ${index}`}`}
                    width={1000}
                    height={1400}
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <p className="mt-3 text-xs text-neutral-500">
                  ESC pour fermer — ← → pour naviguer
                </p>
              </div>

              {/* Miniatures */}
              <div className="max-h-[70vh] overflow-y-auto border-t border-neutral-200 p-4 lg:border-l lg:border-t-0">
                <p className="text-sm font-semibold">Pages</p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {all.map((src, i) => (
                    <button
                      key={`${src}-${i}`}
                      onClick={() => setIndex(i)}
                      className={`overflow-hidden rounded-xl border ${
                        i === index ? "border-neutral-900" : "border-neutral-200"
                      }`}
                      type="button"
                      aria-label={i === 0 ? "Couverture" : `Aller à la page ${i}`}
                    >
                      <div className="relative aspect-[3/4]">
                        <Image src={src} alt="" fill className="object-cover" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}