import Link from "next/link";
import { Logo } from "./Logo";
import { metaRow } from "@/content";

export function Header() {
  return (
    <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }} className="px-page pt-7">
      <div className="flex flex-wrap justify-between gap-4 label">
        <div>
          <div className="mb-2 h-[3px] w-4 bg-signal" />
          {metaRow.left.tag}
          <br />
          {metaRow.left.sub}
        </div>
      </div>

      <nav className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t-[1.5px] border-b-[1.5px] border-ink py-4">
        <Link href="/" aria-label="2e11 home" className="block w-[120px] no-underline">
          <Logo size={40} />
        </Link>
      </nav>
    </div>
  );
}
