import { Container } from "./Container";

export function Section({
  id,
  title,
  description,
  children
}: {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-12">
      <Container>
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-neutral-600">{description}</p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}