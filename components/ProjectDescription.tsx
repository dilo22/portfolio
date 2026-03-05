"use client";

import { useState } from "react";

export function ProjectDescription({
  longDescription,
  extendedDescription,
}: {
  longDescription: string;
  extendedDescription?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-4">
      <p className="whitespace-pre-line text-neutral-700">{longDescription}</p>

      {extendedDescription && expanded && (
        <p className="mt-4 whitespace-pre-line text-neutral-700">
          {extendedDescription}
        </p>
      )}

      {extendedDescription && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-100 transition"
        >
          {expanded ? "Voir moins" : "Voir plus"}
        </button>
      )}
    </div>
  );
}