import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — 2e11",
  description: "Tell us what you're making. Products, brands, films, records.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="grid gap-12 py-16 md:grid-cols-2">
        <div>
          <h1 className="display m-0" style={{ fontSize: "var(--display-l)" }}>
            Turn it
            <br />
            up.
          </h1>
          <p className="label mt-6 max-w-[34em] normal-case tracking-normal">
            Products, brands, films, records. Tell us what you&rsquo;re making and we&rsquo;ll get
            back to you.
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
