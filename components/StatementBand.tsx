import Link from "next/link";
import { statement } from "@/content";

export function StatementBand() {
  return (
    <section
      className="flex flex-wrap items-end justify-between gap-8 border-t-[1.5px] border-b-[1.5px] border-ink py-14 px-page"
      style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}
    >
      <div className="display" style={{ fontSize: "var(--display-l)" }}>
        {statement.lineOne}
        <br />
        do{" "}
        <span style={{ WebkitTextStroke: "3px #111111", color: "transparent" }}>
          {statement.lineTwoOutlined.replace("do ", "")}
        </span>
        <span className="text-signal">.</span>
      </div>
      <div className="flex max-w-[340px] flex-[0_1_340px] flex-col gap-[18px]">
        <p className="label m-0 leading-[1.6]">{statement.body}</p>
        <Link
          href="/contact"
          className="self-start bg-signal px-[22px] py-4 label font-semibold text-ink no-underline"
        >
          {statement.cta}
        </Link>
      </div>
    </section>
  );
}
