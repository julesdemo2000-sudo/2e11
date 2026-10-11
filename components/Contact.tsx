import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="grid bg-light-bg text-light-text"
      style={{
        padding: "clamp(48px,7vw,112px) clamp(16px,3vw,40px)",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
        gap: "clamp(32px,5vw,80px)",
      }}
    >
      <div className="flex flex-col gap-4">
        <span className="text-sm font-bold">Contact us</span>
        <h2
          className="m-0 font-archivo font-black"
          style={{ fontSize: "clamp(44px,6vw,96px)", lineHeight: 0.92, letterSpacing: "-0.03em" }}
        >
          Let&rsquo;s turn it up.
        </h2>
        <p className="m-0 max-w-[26em] text-[17px] leading-[1.5] text-light-body">
          Brand partnerships, artists for getfoh and the label, press. Or just{" "}
          <a href="mailto:hello@2e11.com" className="font-bold text-black">
            hello@2e11.com
          </a>
          .
        </p>
      </div>

      <ContactForm />
    </section>
  );
}
