export function ThemeGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-200/40 via-fuchsia-200/35 to-emerald-200/35 blur-3xl" />
      <div className="absolute bottom-[-240px] right-[-180px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-amber-200/30 via-rose-200/25 to-sky-200/25 blur-3xl" />
    </div>
  );
}