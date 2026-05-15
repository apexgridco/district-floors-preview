import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Instagram,
  Check,
  X,
  ArrowRight,
  Hammer,
  Building2,
  Briefcase,
  ClipboardList,
  Ruler,
  FileCheck,
  Wrench,
  CheckCircle2,
  Star,
} from "lucide-react";
import heroImg from "@/assets/hero-flooring.jpg";
import carpetImg from "@/assets/carpet-tile.jpg";
import hardwoodImg from "@/assets/hardwood.jpg";
import coatingImg from "@/assets/coating.jpg";
import retailImg from "@/assets/retail.jpg";
import renovationImg from "@/assets/renovation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "District Floors LLC — Commercial Flooring | Ashburn, VA" },
      {
        name: "description",
        content:
          "Commercial flooring contractor serving Ashburn, Loudoun County, Northern Virginia and the DC metro. Hardwood, carpet tile, coatings, and renovations.",
      },
    ],
  }),
  component: ProposalPreview,
});

type Tier = "simple" | "better" | "best";

const PHONE = "(703) 675-2000";
const PHONE_HREF = "tel:+17036752000";

function ProposalPreview() {
  const [tier, setTier] = useState<Tier>("better");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ProposalBar tier={tier} setTier={setTier} />
      <SiteFrame tier={tier}>
        <Header tier={tier} />
        <Hero tier={tier} />
        <Services tier={tier} />
        {tier !== "simple" && <Gallery tier={tier} />}
        {tier === "best" && <Industries />}
        <WhyUs tier={tier} />
        {tier === "best" && <Process />}
        {tier !== "simple" && <Testimonials />}
        {tier === "best" && <ServiceArea />}
        {tier === "best" && <Maintenance />}
        <QuoteSection tier={tier} />
        <LocationSection />
        <Footer />
      </SiteFrame>
      <ComparisonTable />
      <ProposalFooter />
    </div>
  );
}

/* ---------- Proposal chrome (outside the mock) ---------- */

function ProposalBar({ tier, setTier }: { tier: Tier; setTier: (t: Tier) => void }) {
  const tiers: { id: Tier; label: string; price: string }[] = [
    { id: "simple", label: "Simple", price: "$250" },
    { id: "better", label: "Better", price: "$450" },
    { id: "best", label: "Best", price: "$550" },
  ];
  return (
    <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Website Proposal Preview
          </p>
          <p className="text-sm font-semibold">District Floors LLC · Prepared for Steve</p>
        </div>
        <div className="inline-flex rounded-lg border border-border bg-secondary p-1">
          {tiers.map((t) => (
            <button
              key={t.id}
              onClick={() => setTier(t.id)}
              className={`rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                tier === t.id
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="block">{t.label}</span>
              <span className="block text-[10px] font-normal opacity-80">{t.price}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SiteFrame({ tier, children }: { tier: Tier; children: React.ReactNode }) {
  const labels: Record<Tier, { name: string; price: string; tag: string; theme: string }> = {
    simple: {
      name: "SIMPLE — Starter Website",
      price: "$250",
      tag: "Minimal, clean, professional. Best for getting District Floors a presence quickly.",
      theme: "theme-simple",
    },
    better: {
      name: "BETTER — Lead-Generation Website",
      price: "$450",
      tag: "Warm, modern, conversion-focused. Built to turn visitors into quote requests.",
      theme: "theme-better",
    },
    best: {
      name: "BEST — Premium Contractor Website",
      price: "$550",
      tag: "Dark, editorial, premium. Positions District Floors as a serious commercial partner.",
      theme: "theme-best",
    },
  };
  const l = labels[tier];
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Example {tier === "simple" ? "1" : tier === "better" ? "2" : "3"}
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">{l.name}</h2>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{l.tag}</p>
        </div>
        <div className="rounded-md border border-border bg-secondary px-4 py-2 text-sm font-semibold">
          {l.price}
        </div>
      </div>
      <div className={`${l.theme} overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl`}>
        <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2">
          <span className="h-3 w-3 rounded-full bg-destructive/70" />
          <span className="h-3 w-3 rounded-full bg-accent/70" />
          <span className="h-3 w-3 rounded-full bg-primary/30" />
          <span className="ml-3 truncate rounded bg-background px-3 py-1 text-xs text-muted-foreground">
            districtfloors.com
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ---------- Site sections (inside the mock) ---------- */

function Header({ tier }: { tier: Tier }) {
  return (
    <header className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-10">
      <a href="#" className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded bg-primary text-primary-foreground">
          <Hammer className="h-4 w-4" />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-bold tracking-tight">DISTRICT FLOORS</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Ashburn, VA
          </p>
        </div>
      </a>
      <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
        <a href="#services" className="hover:text-accent">Services</a>
        {tier !== "simple" && <a href="#gallery" className="hover:text-accent">Projects</a>}
        <a href="#why" className="hover:text-accent">Why Us</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
      </nav>
      <a
        href={PHONE_HREF}
        className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90"
      >
        <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{PHONE}</span>
        <span className="sm:hidden">Call</span>
      </a>
    </header>
  );
}

function Hero({ tier }: { tier: Tier }) {
  const showImage = tier !== "simple";
  return (
    <section className="relative">
      <div className={`relative w-full ${tier === "simple" ? "h-[440px]" : "h-[480px] sm:h-[560px]"}`}>
        {showImage ? (
          <>
            <img src={heroImg} alt="Commercial hardwood flooring" className="absolute inset-0 h-full w-full object-cover" />
            <div className={`absolute inset-0 ${tier === "best" ? "bg-gradient-to-t from-primary via-primary/85 to-primary/40" : "bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20"}`} />
          </>
        ) : (
          <div className="absolute inset-0 bg-primary" />
        )}
        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-6 sm:px-10">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-widest">
              {tier === "best" ? "Commercial Flooring · Est. Northern VA" : "Commercial Flooring · Northern VA"}
            </span>
            <h1 className={`mt-5 leading-[1.05] ${tier === "best" ? "text-5xl sm:text-6xl lg:text-7xl" : "text-4xl font-bold sm:text-5xl lg:text-6xl"}`}>
              Commercial Flooring Built for Projects That Need to Be Done Right
            </h1>
            <p className="mt-5 text-base text-primary-foreground/85 sm:text-lg">
              District Floors LLC helps commercial clients, builders, and property managers across
              Northern Virginia and the DC metro area with reliable flooring solutions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow hover:opacity-90"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Phone className="h-4 w-4" /> Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-y border-border bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:px-10">
          {[
            "Commercial Flooring",
            "Ashburn, VA",
            "Northern VA & DC Metro",
            tier === "best" ? "Project-Based Service" : "Project-Based",
          ].map((b) => (
            <span key={b} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" /> {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { title: "Commercial Flooring", img: hardwoodImg, desc: "Turn-key flooring for offices, retail and commercial buildouts." },
  { title: "Carpet Tile", img: carpetImg, desc: "Modular carpet tile installation built for high-traffic environments." },
  { title: "Hardwood Flooring", img: hardwoodImg, desc: "Engineered and solid hardwood for premium commercial spaces." },
  { title: "Floor Treatments & Coatings", img: coatingImg, desc: "Epoxy, sealers, and protective coatings for warehouses and back-of-house." },
  { title: "Renovation Flooring", img: renovationImg, desc: "Tear-out, prep, and install for renovation and tenant improvement work." },
  { title: "Office & Retail Flooring", img: retailImg, desc: "Showroom-quality finishes that hold up to daily customer traffic." },
];

function Services({ tier }: { tier: Tier }) {
  const showImages = tier === "best";
  return (
    <section id="services" className="px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="Services" title="Commercial flooring, end to end" />
        <div className={`mt-10 grid gap-5 ${tier === "simple" ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
          {services.map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-lg border border-border bg-card transition hover:shadow-lg">
              {showImages && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
              )}
              <div className="p-5">
                {!showImages && (
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-accent">
                    <Hammer className="h-5 w-5" />
                  </div>
                )}
                <h3 className="text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({ tier }: { tier: Tier }) {
  const items = [
    { img: hardwoodImg, label: "Office Hardwood Install · Reston" },
    { img: carpetImg, label: "Carpet Tile · Loudoun Gateway" },
    { img: retailImg, label: "Retail LVP · Tysons Corner" },
    { img: coatingImg, label: "Warehouse Coating · Sterling" },
    { img: renovationImg, label: "TI Renovation · Ashburn" },
    { img: heroImg, label: "Executive Suite · Arlington" },
  ];
  const shown = tier === "best" ? items : items.slice(0, 3);
  return (
    <section id="gallery" className="border-t border-border bg-secondary px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Project Gallery"
          title={tier === "best" ? "Recent commercial installs" : "A few recent projects"}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-lg">
              <img src={p.img} alt={p.label} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
        {tier === "best" && (
          <div className="mt-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Before / After
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <BeforeAfter label="BEFORE" img={renovationImg} />
              <BeforeAfter label="AFTER" img={hardwoodImg} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function BeforeAfter({ label, img }: { label: string; img: string }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border">
      <img src={img} alt={label} loading="lazy" className="aspect-[16/10] w-full object-cover" />
      <span className="absolute left-3 top-3 rounded bg-primary px-3 py-1 text-xs font-bold tracking-wider text-primary-foreground">
        {label}
      </span>
    </div>
  );
}

function Industries() {
  const items = [
    { icon: Building2, label: "Offices" },
    { icon: Briefcase, label: "Retail" },
    { icon: ClipboardList, label: "Property Managers" },
    { icon: Hammer, label: "General Contractors" },
    { icon: Wrench, label: "Commercial Renovations" },
  ];
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="Industries Served" title="Built for commercial work" />
        <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((i) => (
            <div key={i.label} className="rounded-lg border border-border bg-card p-6 text-center">
              <i.icon className="mx-auto h-7 w-7 text-accent" />
              <p className="mt-3 text-sm font-semibold">{i.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs({ tier }: { tier: Tier }) {
  const reasons = [
    "Local Ashburn-based company",
    "Commercial project experience",
    "Clean communication",
    "Professional project presentation",
    "Built for contractors, property managers & business owners",
  ];
  return (
    <section id="why" className="border-t border-border bg-primary px-6 py-16 text-primary-foreground sm:px-10 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why District Floors</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Commercial flooring without the headaches.
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            We work shoulder-to-shoulder with builders and property teams to deliver flooring that's
            on schedule, on budget, and ready for the final walkthrough.
          </p>
        </div>
        <ul className="grid gap-3">
          {reasons.slice(0, tier === "simple" ? 3 : 5).map((r) => (
            <li key={r} className="flex items-start gap-3 rounded-md border border-primary-foreground/15 bg-primary-foreground/5 p-4">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
              <span className="text-sm">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { icon: Phone, title: "Consultation", desc: "Project scope, timeline, and goals." },
    { icon: Ruler, title: "Measurement", desc: "On-site measure and material verification." },
    { icon: FileCheck, title: "Proposal", desc: "Itemized bid with materials and schedule." },
    { icon: Hammer, title: "Installation", desc: "Clean, on-schedule install by our crew." },
    { icon: CheckCircle2, title: "Final Walkthrough", desc: "Punch list closed and signed off." },
  ];
  return (
    <section className="border-t border-border bg-secondary px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="Our Process" title="From first call to final walkthrough" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-lg border border-border bg-card p-5">
              <span className="absolute right-4 top-4 text-xs font-bold text-muted-foreground">0{i + 1}</span>
              <s.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-3 text-sm font-bold">{s.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { q: "On time, clean install, no surprises. Exactly what we need from a flooring sub.", a: "GC Project Manager · Reston" },
    { q: "Steve communicates better than 90% of the trades we work with.", a: "Property Manager · Ashburn" },
    { q: "Showed up, did the work, walked it with us. We'll use them again.", a: "Office Buildout Lead · Tysons" },
  ];
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="Testimonials" title="What clients say" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {quotes.map((t) => (
            <blockquote key={t.q} className="rounded-lg border border-border bg-card p-6">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed">"{t.q}"</p>
              <footer className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">— {t.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  const areas = ["Ashburn", "Loudoun County", "Leesburg", "Sterling", "Reston", "Herndon", "Tysons", "Arlington", "Washington DC", "Bethesda"];
  return (
    <section className="border-t border-border bg-secondary px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="Service Area" title="Serving Northern Virginia & the DC metro" />
        <p className="mt-4 max-w-3xl text-muted-foreground">
          District Floors is based in Ashburn and proudly works with commercial clients across
          Loudoun County, Northern Virginia, and the greater Washington DC metro area.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {areas.map((a) => (
            <span key={a} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Maintenance() {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-card p-8 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Maintenance Plans</p>
            <h2 className="mt-2 text-3xl font-bold">Keep your floors looking new.</h2>
            <p className="mt-4 text-muted-foreground">
              Optional monthly and quarterly maintenance plans for property managers and offices —
              cleaning, polishing, recoats, and minor repairs handled on a schedule.
            </p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Ask about maintenance <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {["Routine cleaning", "Polishing & buffing", "Recoats & touch-ups", "Damage repair", "Inspection reports", "Priority scheduling"].map((f) => (
              <li key={f} className="flex items-center gap-2 rounded border border-border bg-secondary p-3 text-sm">
                <Check className="h-4 w-4 text-accent" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function QuoteSection({ tier }: { tier: Tier }) {
  return (
    <section id="contact" className="border-t border-border bg-primary px-6 py-16 text-primary-foreground sm:px-10 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {tier === "best" ? "Request a Bid / Consultation" : tier === "better" ? "Request a Quote" : "Get in Touch"}
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            {tier === "best"
              ? "Tell us about your project. We'll bid it fast."
              : "Ready to talk flooring?"}
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Reach out and Steve will get back to you with next steps. We respond fast on commercial work.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={PHONE_HREF} className="flex items-center gap-3 hover:text-accent">
              <Phone className="h-4 w-4 text-accent" /> {PHONE}
            </a>
            <a href="mailto:steve@districtfloors.com" className="flex items-center gap-3 hover:text-accent">
              <Mail className="h-4 w-4 text-accent" /> steve@districtfloors.com
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              44200 Waxpool Road, Suite 117<br />Ashburn, VA 20147
            </p>
          </div>
        </div>
        <form className="grid gap-3 rounded-xl bg-card p-6 text-foreground shadow-2xl lg:col-span-3 sm:grid-cols-2">
          <Field label="Name" />
          <Field label="Company" />
          <Field label="Phone" />
          <Field label="Email" />
          <Field label="Project location" full />
          {tier !== "simple" && <Field label="Type of flooring needed" full />}
          {tier !== "simple" && <Field label="Estimated timeline" full />}
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea rows={4} className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" />
          </div>
          <button type="button" className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90">
            Send Request <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, full }: { label: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none" />
    </div>
  );
}

function LocationSection() {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHead eyebrow="Visit / Location" title="Based in Ashburn, VA" align="left" />
          <p className="mt-4 text-muted-foreground">
            Our shop is centrally located in Loudoun County's commercial corridor — easy access to
            project sites across Northern Virginia and the DC metro.
          </p>
          <p className="mt-4 text-sm font-semibold">
            44200 Waxpool Road, Suite 117<br />Ashburn, VA 20147
          </p>
          <a href="https://instagram.com" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
            <Instagram className="h-4 w-4" /> Follow @districtfloors
          </a>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          <iframe
            title="District Floors Location"
            src="https://www.google.com/maps?q=44200+Waxpool+Road+Ashburn+VA&output=embed"
            className="h-72 w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-primary px-6 py-12 text-primary-foreground sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div>
          <p className="text-sm font-bold">DISTRICT FLOORS LLC</p>
          <p className="mt-3 text-sm text-primary-foreground/80">
            44200 Waxpool Road, Suite 117<br />Ashburn, VA 20147
          </p>
        </div>
        <div className="text-sm text-primary-foreground/80">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">Contact</p>
          <a href={PHONE_HREF} className="block hover:text-accent">{PHONE}</a>
          <a href="mailto:steve@districtfloors.com" className="block hover:text-accent">steve@districtfloors.com</a>
        </div>
        <div className="text-sm text-primary-foreground/80">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">Service Area</p>
          Serving Ashburn, Loudoun County, Northern Virginia, and the DC metro area.
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} District Floors LLC. All rights reserved.
      </div>
    </footer>
  );
}

function SectionHead({ eyebrow, title, align = "center" }: { eyebrow: string; title: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
    </div>
  );
}

/* ---------- Comparison & proposal footer ---------- */

function ComparisonTable() {
  const rows: { label: string; s: boolean; b: boolean; x: boolean }[] = [
    { label: "Homepage", s: true, b: true, x: true },
    { label: "Contact form", s: true, b: true, x: true },
    { label: "Click-to-call", s: true, b: true, x: true },
    { label: "Service sections", s: true, b: true, x: true },
    { label: "Project gallery", s: false, b: true, x: true },
    { label: "SEO service area content", s: false, b: false, x: true },
    { label: "Quote request form", s: false, b: true, x: true },
    { label: "Testimonials", s: false, b: true, x: true },
    { label: "Premium project positioning", s: false, b: false, x: true },
    { label: "Monthly maintenance option", s: false, b: false, x: true },
  ];
  return (
    <section className="bg-secondary px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHead eyebrow="Compare Packages" title="Simple vs. Better vs. Best" />
        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <table className="w-full text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-4 py-4 text-left font-semibold">Feature</th>
                <th className="px-4 py-4 text-center font-semibold">Simple</th>
                <th className="px-4 py-4 text-center font-semibold">Better</th>
                <th className="px-4 py-4 text-center font-semibold">Best</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.label} className={i % 2 ? "bg-secondary/50" : ""}>
                  <td className="border-t border-border px-4 py-3 font-medium">{r.label}</td>
                  <Cell on={r.s} />
                  <Cell on={r.b} />
                  <Cell on={r.x} />
                </tr>
              ))}
              <tr className="bg-muted">
                <td className="border-t border-border px-4 py-4 font-bold">Investment</td>
                <td className="border-t border-border px-4 py-4 text-center text-xs font-semibold">$750–$1,200</td>
                <td className="border-t border-border px-4 py-4 text-center text-xs font-semibold">$1,500–$2,500</td>
                <td className="border-t border-border px-4 py-4 text-center text-xs font-semibold">$3,000–$5,000+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Cell({ on }: { on: boolean }) {
  return (
    <td className="border-t border-border px-4 py-3 text-center">
      {on ? (
        <Check className="mx-auto h-5 w-5 text-accent" />
      ) : (
        <X className="mx-auto h-4 w-4 text-muted-foreground/50" />
      )}
    </td>
  );
}

function ProposalFooter() {
  return (
    <div className="bg-primary px-6 py-10 text-center text-primary-foreground">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Proposal Preview</p>
      <p className="mt-2 text-sm">
        Prepared for Steve · District Floors LLC · Use the toggle at the top to view each option.
      </p>
    </div>
  );
}
