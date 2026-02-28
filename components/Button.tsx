import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  asChild?: boolean;
};

export function Button({
  variant = "primary",
  className,
  asChild,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800"
      : "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50";

  if (asChild) {
    // petit helper: usage avec Link/a
    const child = props.children as React.ReactElement;
    return (
      <span
        className={cn(base, styles, "cursor-pointer", className)}
        role="presentation"
      >
        {child.type === Link || child.type === "a" ? child : child}
      </span>
    );
  }

  return (
    <button className={cn(base, styles, className)} {...props} />
  );
}