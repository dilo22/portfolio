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

  const dialogRef = useRef<HTMLDivElement | null>(null);
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
  }, [open]);

  useEffect(() => {
    if (!open) {
      lastActiveRef.current?.focus?.();
    }
  }, [open]);

  return (
    <>
      {/* Couverture */}
      <div className="mt-10 flex flex-col items-center">
        <p className="text-sm text-neutral-600">{title}</p>

        <button
          type="button"
          onClick={() => openAt(0)}
          className="group mt-5 w-full max-w-[520px] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
        >
          <div className="relative aspect-[3/4]">
            <Image
              src={cover}
              alt={`Couverture — ${title}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 90vw, 520px"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div
            ref={dialogRef}
            className="w-[min(1000px,90vw)] max-h-[85vh] overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-2xl"
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
                    alt={`${title} — ${index}`}
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
              <div className="border-t border-neutral-200 p-4 lg:border-l lg:border-t-0 overflow-y-auto max-h-[70vh]">
                <p className="text-sm font-semibold">Pages</p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {all.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setIndex(i)}
                      className={`overflow-hidden rounded-xl border ${
                        i === index
                          ? "border-neutral-900"
                          : "border-neutral-200"
                      }`}
                    >
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={src}
                          alt=""
                          fill
                          className="object-cover"
                        />
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