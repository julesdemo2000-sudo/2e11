import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <Header />
      <main className="px-page" style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
