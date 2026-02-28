"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { portfolio } from "@/data/portfolio";

type FormState = {
  name: string;
  email: string;
  message: string;
};

function isValidEmail(email: string) {
  // validation simple (suffisante pour front-only)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: ""
  });
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    message: false
  });
  const [success, setSuccess] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Le nom est requis.";
    if (!form.email.trim()) e.email = "L’email est requis.";
    else if (!isValidEmail(form.email)) e.email = "Email invalide.";
    if (!form.message.trim()) e.message = "Le message est requis.";
    else if (form.message.trim().length < 10)
      e.message = "Message trop court (min. 10 caractères).";
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((s) => ({ ...s, [key]: value }));
    setSuccess(false);
  }

  function onBlur<K extends keyof FormState>(key: K) {
    setTouched((t) => ({ ...t, [key]: true }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!canSubmit) return;

    // front-only: on affiche un succès + option mailto
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setTouched({ name: false, email: false, message: false });
  }

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Contact depuis le portfolio");
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    return `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <main className="py-14">
      <Container>
        <Section
          title="Contact"
          description="N’hésitez pas à me contacter pour toute question, idée ou demande de projet."
        >
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                <h2 className="text-lg font-semibold">Coordonnées</h2>
                <p className="mt-4 text-neutral-700">
                  <span className="font-medium">Email :</span>{" "}
                  <a
                    className="underline-offset-4 hover:underline"
                    href={`mailto:${portfolio.email}`}
                  >
                    {portfolio.email}
                  </a>
                </p>
                <p className="mt-2 text-neutral-700">
                  <span className="font-medium">Téléphone :</span>{" "}
                  <a
                    className="underline-offset-4 hover:underline"
                    href={`tel:${portfolio.phone.replace(/\s/g, "")}`}
                  >
                    {portfolio.phone}
                  </a>
                </p>

                <div className="mt-6">
                  <Button variant="secondary" asChild>
                    <a href={`mailto:${portfolio.email}`} rel="noreferrer">
                      Envoyer un email
                    </a>
                  </Button>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-neutral-200 bg-white/70 p-6 text-sm text-neutral-600 shadow-sm backdrop-blur">
                <p className="font-medium text-neutral-900">Note</p>
                <p className="mt-2">
                  Le formulaire ci-contre est volontairement sans backend. Pour
                  un envoi réel, utilisez le bouton mailto (ou ajoutez un service
                  type API route / provider).
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-soft"
                noValidate
              >
                <h2 className="text-lg font-semibold">Formulaire</h2>

                <div className="mt-5 grid gap-4">
                  <div>
                    <label className="text-sm font-medium" htmlFor="name">
                      Nom
                    </label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={(e) => onChange("name", e.target.value)}
                      onBlur={() => onBlur("name")}
                      className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-400"
                      placeholder="Votre nom"
                      autoComplete="name"
                      aria-invalid={Boolean(touched.name && errors.name)}
                      aria-describedby="name-error"
                    />
                    {touched.name && errors.name ? (
                      <p id="name-error" className="mt-2 text-sm text-red-600">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label className="text-sm font-medium" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => onChange("email", e.target.value)}
                      onBlur={() => onBlur("email")}
                      className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-400"
                      placeholder="vous@exemple.com"
                      autoComplete="email"
                      aria-invalid={Boolean(touched.email && errors.email)}
                      aria-describedby="email-error"
                    />
                    {touched.email && errors.email ? (
                      <p id="email-error" className="mt-2 text-sm text-red-600">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label className="text-sm font-medium" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => onChange("message", e.target.value)}
                      onBlur={() => onBlur("message")}
                      className="mt-2 min-h-[140px] w-full resize-y rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-400"
                      placeholder="Décrivez votre demande…"
                      aria-invalid={Boolean(touched.message && errors.message)}
                      aria-describedby="message-error"
                    />
                    {touched.message && errors.message ? (
                      <p
                        id="message-error"
                        className="mt-2 text-sm text-red-600"
                      >
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Button type="submit" disabled={!canSubmit}>
                      Envoyer (front-only)
                    </Button>
                    <Button variant="secondary" asChild>
                      <a href={mailtoHref}>Envoyer via mailto</a>
                    </Button>
                    {success ? (
                      <p className="text-sm text-emerald-700">
                        Message envoyé (simulation) ✅
                      </p>
                    ) : null}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  );
}