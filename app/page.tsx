import Image from "next/image";

const FEATURED = [
  {
    company: "Liquibase",
    role: "Senior Content Engineer, previously Technical Writer",
    dates: "May 2025 to present",
    link: "https://www.liquibase.com/",
    bullets: [
      "Designed and built the AI-augmented editorial workflow end to end, including Claude agents and skills that draft API reference and conceptual documentation, shared editorial standards, and prompt tuning to keep output consistent with the team's voice.",
      "Led the documentation restructure during the platform migration from MadCap Flare to Contentful, updating existing content for the new information architecture.",
      "Built Node.js tooling against the Contentful API to export data and execute bulk content changes at scale.",
      "Maintain the docs site end to end, from content to search to structural improvements.",
    ],
    samples: [
      { label: "Connect to Azure Blob Storage", href: "/pdfs/connect-azure-blob.pdf" },
      { label: "Implement a rollback strategy with SQL changelogs for existing databases", href: "https://docs.liquibase.com/secure/implementation-guide-5-2-1/implement-a-rollback-strategy-with-sql-changelogs-for-existing-databases" },
      { label: "Before and after screenshots from the migration", href: "/images/before-after-content-migration.jpg" },
    ],
  },
  {
    company: "Google",
    role: "Technical Writer, Developer Relations, Business Messages",
    dates: "Jul 2022 to Mar 2023",
    link: "https://developers.google.com/business-communications/business-messages",
    bullets: [
      "Led an information architecture overhaul of the Business Messages developer site. Redesigned the top navigation into a full multi-category menu modeled on the Google Cloud pattern, ran stakeholder interviews to build cross-team buy-in, and made code commits into the monorepo within Google's strict site guidelines.",
      "Built conversational agents in Python on Google Cloud Platform with Datastore, deployed on the live product site to demonstrate functionality to developers.",
      "Wrote scripts for product commercials and served as a technical face of the product during customer webinars, answering questions live.",
      "Authored feature documentation, a video script, and a quickstart edit that added internal notes, prerequisites, and full workflow tests.",
      "Completed Google's month-long onboarding as part of a group project that shipped a Chrome extension for animated emoji in Google Chat.",
    ],
    samples: [
      { label: "Create your first agent (edited quickstart)", href: "/pdfs/first-agent.pdf" },
    ],
  },
  {
    company: "Wowza Media Systems",
    role: "Technical Writer",
    dates: "Feb 2021 to Apr 2022",
    link: "https://www.wowza.com/docs",
    bullets: [
      "Wrote conceptual, task, and reference documentation for all three Wowza products.",
      "Updated REST API documentation using Redocly and GitHub, including GraphQL reference docs for ClearCaster.",
      "Migrated API documentation from Knowledge Owl to Redocly, using RegEx to transform content during the move and rebuilding the layout for the new interface.",
      "Developed jQuery scripts to enhance the knowledge base with an improved automatic table of contents, embedded tabs, and modal image zoom, then deployed them across the site.",
      "Built a Node.js site to stage articles for internal and contractor review without requiring login.",
    ],
    samples: [
      { label: "Deliver real-time streams with Wowza Streaming Cloud REST API", href: "/pdfs/Deliver real-time streams with the Wowza Streaming Cloud REST API.pdf" },
      { label: "Send Apple HLS content to Amazon S3 using Wowza REST APIs", href: "/pdfs/Send Apple HLS content to Amazon S3 using Wowza REST APIs.pdf" },
      { label: "Upload an Asset with the Video REST API", href: "/pdfs/Upload an Asset with the Video REST API.pdf" },
    ],
  },
  {
    company: "National Renewable Energy Laboratory",
    role: "Utility Rate Database Intern",
    dates: "Apr 2024 to Apr 2025",
    link: "https://openei.org/wiki/Utility_Rate_Database",
    bullets: [
      "Researched and maintained utility rate data across all 50 states by sourcing directly from energy company documentation, enabling accurate cost estimates for users in any US region.",
      "Wrote a Python script to calculate percentage-based adjustments on energy rates, automating a previously manual process.",
      "Updated the Utility Rate API documentation in a docs-as-code workflow.",
    ],
    beforeAfter: {
      before: [
        { label: "Main Menu", href: "/pdfs/urdb_before_update_main_menu.pdf" },
        { label: "Utility Rates Endpoint", href: "/pdfs/urdb_before_update_util_rates.pdf" },
        { label: "Utility Companies Endpoint", href: "/pdfs/urdb_before_update_util_cos.pdf" },
        { label: "Recommendations Endpoint", href: "/pdfs/urdb_before_update_recommend.pdf" },
      ],
      after: [
        { label: "Main Menu", href: "/pdfs/updated_urdb_main_menu.pdf" },
        { label: "Utility Rates Endpoint", href: "/pdfs/updated_urdb_util_rates.pdf" },
        { label: "Utility Companies Endpoint", href: "/pdfs/updated_urdb_util_cos.pdf" },
        { label: "Recommendations Endpoint", href: "/pdfs/updated_urdb_recommend.pdf" },
      ],
    },
  },
  {
    company: "MEPCAD / AutoSPRINK",
    role: "Technical Writer",
    dates: "Feb 2018 to Feb 2021",
    link: "https://autosprink.com",
    bullets: [
      "Migrated 3,000+ files from Adobe RoboHelp into a custom, headless docs-as-code environment, using RegEx to translate HTML files to JSON.",
      "Wrote and maintained product documentation for four products and managed one additional writer.",
      "Wrote and published the full documentation library for AutoSPRINK FAB, a new product.",
      "Built a custom ASP.NET documentation site for AutoSPRINK FAB.",
      "Built style standards and led internal training on writing and onboarding.",
      "Integrated SendGrid with Firebase to automate emails and created reusable HTML templates.",
      "Completed an 8-month Node.js course to support site maintenance and backend tooling.",
      "Also shipped 3 companion news apps for Android (Java) and iOS (Swift) with Firebase login and live content updates, and assisted with a Windows-compatible embedded News Pane.",
    ],
    samples: [
      { label: "AutoSPRINK RVT News app screenshot", href: "/images/1.png" },
      { label: "AutoSPRINK FAB documentation site screenshot", href: "/images/fab.png" },
      { label: "Embedded News Pane screenshot", href: "/images/pane.png" },
    ],
  },
];

const OTHER_EXPERIENCE = [
  {
    company: "Amazon",
    role: "Technical Writer",
    dates: "Apr 2022 to Jun 2022",
    note: "Authored how-to guides for internal tools supporting users across engineering, management, customer service, and sales.",
  },
];

const SKILLS = [
  { group: "Documentation", items: "API docs (REST, GraphQL), docs-as-code, content migration, UX writing, content strategy" },
  { group: "Editorial framework", items: "Diataxis (tutorial, how-to, reference, concepts) and DITA" },
  { group: "Tools and Platforms", items: "Contentful, MadCap Flare, Redocly, Knowledge Owl, Git, GCP" },
  { group: "Languages", items: "JavaScript, Node.js, Python, HTML, CSS, Markdown, JSON, Java, Swift, C++" },
  { group: "Other", items: "RegEx, Firebase, SendGrid, Unix, Claude AI agents and skills" },
];

const EDUCATION = [
  { degree: "BA, Computer Science", school: "CU Denver", detail: "3.5 GPA" },
  { degree: "MFA, Creative Writing", school: "Regis University", detail: "4.0 GPA" },
  { degree: "BA, Creative Writing", school: "Arkansas Tech University" },
  { degree: "BA, Speech-Theater", school: "Arkansas Tech University" },
];

export default function Home() {
  return (
    <main className="relative mx-auto w-full px-6 py-12 md:px-16 md:py-16 lg:px-24 xl:px-32">
      {/* Decorative background splashes, fixed to viewport */}
      <div
        aria-hidden
        className="pointer-events-none fixed -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: "var(--slate)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -bottom-40 -left-40 h-[550px] w-[550px] rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: "var(--rust)" }}
      />
      <div className="relative">
      {/* Hero */}
      <header className="mb-14 flex flex-col-reverse gap-8 md:flex-row md:items-end md:justify-between">
        <div className="flex-1">
          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Allissa Balint
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-snug text-neutral-700">
            Senior Content Engineer. AI documentation systems, large-scale content migrations, and IA for developer products.
          </p>
          <p className="mt-2 text-sm text-neutral-500">Denver, CO or remote</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px]">
            <a href="/pdfs/Resume.pdf" className="font-medium">
              Resume (PDF)
            </a>
            <a href="https://github.com/simplyallissa">GitHub</a>
            <a href="https://www.linkedin.com/in/allissa-balint-411540a5/">LinkedIn</a>
          </div>
        </div>
        <div className="shrink-0 self-center md:self-end">
          <Image
            src="/images/self.png"
            width={180}
            height={180}
            alt="Portrait of Allissa Balint"
            className="rounded-full object-cover shadow-md ring-4 ring-[var(--paper)]"
            priority
            style={{ boxShadow: "0 0 0 3px var(--rust)" }}
          />
        </div>
      </header>

      {/* About */}
      <section className="mb-14">
        <p className="text-lg leading-relaxed">
          I&apos;m a Senior Content Engineer with 7+ years in technical communication. I work across developer documentation, UX writing, and structured content systems, and I&apos;ve shipped docs for interfaces, APIs (REST and GraphQL), CAD software, and hardware.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Recently I have been building Claude agents into the editorial workflow at Liquibase. My work before this has focused on cross-platform doc migrations and API documentation.
        </p>
      </section>

      {/* Featured work */}
      <section className="mb-16">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-medium">Selected work</h2>
          <div className="mt-3 h-0.5 w-16 bg-[var(--rust)]"></div>
        </div>
        <div className="space-y-16">
          {FEATURED.map((job) => (
            <article key={job.company} className="border-l-4 border-[var(--rust)]/50 pl-6">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-display text-2xl font-medium">
                  {job.link ? (
                    <a href={job.link} className="text-[var(--ink)] no-underline hover:text-[var(--rust)]">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <p className="text-sm text-neutral-500">{job.dates}</p>
              </div>
              <p className="mb-4 text-base text-neutral-700">{job.role}</p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-800 marker:text-neutral-400">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              {job.samples && job.samples.length > 0 && (
                <div className="rounded-lg border border-neutral-200 bg-white p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    Samples
                  </p>
                  <ul className="space-y-1 text-sm">
                    {job.samples.map((s) => (
                      <li key={s.href}>
                        <a href={s.href}>{s.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Other experience */}
      <section className="mb-16">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-medium">Also</h2>
          <div className="mt-3 h-0.5 w-16 bg-[var(--rust)]"></div>
        </div>
        <ul className="space-y-5">
          {OTHER_EXPERIENCE.map((job) => (
            <li key={job.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-medium">
                  {job.link ? (
                    <a href={job.link} className="text-[var(--ink)] no-underline hover:text-[var(--rust)]">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                  <span className="ml-2 text-neutral-500">{job.role}</span>
                </p>
                <p className="text-sm text-neutral-500">{job.dates}</p>
              </div>
              <p className="mt-1 text-[15px] text-neutral-700">{job.note}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-medium">Skills</h2>
          <div className="mt-3 h-0.5 w-16 bg-[var(--rust)]"></div>
        </div>
        <dl className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((s) => (
            <div key={s.group}>
              <dt className="text-sm font-semibold">{s.group}</dt>
              <dd className="text-[15px] text-neutral-700">{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Education */}
      <section className="mb-16">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-medium">Education</h2>
          <div className="mt-3 h-0.5 w-16 bg-[var(--rust)]"></div>
        </div>
        <ul className="space-y-3">
          {EDUCATION.map((e) => (
            <li key={e.degree}>
              <p className="font-medium">{e.degree}</p>
              <p className="text-[15px] text-neutral-700">
                {e.school}
                {e.detail ? `, ${e.detail}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Outside work */}
      <section className="mb-16">
        <div className="mb-10">
          <h2 className="font-display text-3xl font-medium">Outside work</h2>
          <div className="mt-3 h-0.5 w-16 bg-[var(--rust)]"></div>
        </div>
        <ul className="space-y-4 text-[15px] leading-relaxed text-neutral-800">
          <li>
            <strong>Associate Editor</strong> at{" "}
            <a href="https://www.invertedsyntax.com/">
              <em>Inverted Syntax Literary Journal</em>
            </a>
            {" "}for 8 years. Inverted Syntax publishes twice annually and nominates for awards including Best of the Net and the Pushcart Prize.
          </li>
          <li>
            <strong>Dog Foster</strong> at <em>Dumb Friends League</em> (Nov 2020 to Jan 2024). Fostered dogs in need of temporary care due to owner circumstances, injury recovery, or puppies needing to gain weight before adoption.
          </li>
          <li>
            <strong>Poetry, boxing, video games, and gardening.</strong>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>© 2026 Allissa Balint</p>
          <div className="flex gap-4">
            <a href="https://github.com/simplyallissa" className="text-neutral-600">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/allissa-balint-411540a5/" className="text-neutral-600">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}
