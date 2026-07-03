import Image from "next/image";
import Link from "next/link";

const content = {
  brand: "Blue",
  hero: {
    badge: "Programmer and Project Manager",
    intro: "Hi, I'm",
    name: "Blue.",
    description:
      "Over 5 years of scripting experience. I can write any system that will bring your idea to life. As a developer, I've shipped countless systems spanning more than 100 commissions. From simple combat to sophisticated systems, name it and I'll create it.",
    button: "View Projects",
    secondaryButton: "See Works",
  },
  stats: [
    { value: "5+", label: "Years scripting" },
    { value: "100+", label: "Commissions shipped" },
    { value: "Roblox", label: "Primary platform" },
  ],
  sections: {
    skills: {
      eyebrow: "Skills",
      title: "Design, Production, Management",
      description:
        "Tools and skills I use to produce high quality projects.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Games, Positions, Portfolios",
      description:
        "A glimpse of where my passion has taken me.",
    },
    works: {
      eyebrow: "Works",
      title: "Systems, Commissions, Showcases",
      description:
        "A closer look at the original systems and production work I build.",
    },
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Works", href: "/works" },
  ],
  skills: [
    "Python",
    "Luau",
    "Game Design",
    "Management",
    "Optimization",
    "Tooling",
    "Github",
    "VS Code",
  ],
  // Put redirect links in the top-level href field. Leave href empty to keep a project unlinked.
  projects: [
    {
      name: "AniForce",
      type: "Roblox Game",
      status: "Current Project | Programmer",
      href: "https://youtu.be/EOcuQzJScUI?si=VxIeMSBgdk1zMxEr",
      image: {
        src: "/ANIFORCE.jpg",
        alt: "AniForce project preview",
      },
      description: "",
    },
    {
      name: "Grand Alfheim",
      type: "Roblox Game",
      status: "Old Project | Programmer",
      href: "https://youtu.be/JeW42xwzlpE?si=tBlzXZycPMmUdt59",
      image: {
        src: "/grandalfheim.png",
        alt: "Grand Alfheim project preview",
      },
      description: "",
    },
  ],
  works: [
    {
      title: "Kaiju Cutscene",
      category: "AniForce",
      duration: "Frontend, Outdated",
      href: "https://youtu.be/VP21uyGyFvU",
      image: {
        src: "/Thumbnails/KaijuCutscene.png",
        alt: "",
      },
      description:
        "Publicly released version of the Kaiju Ultimate cutscene in AniForce.",
    },
    {
      title: "Character Moveset #1",
      category: "AniForce",
      duration: "Combat",
      href: "https://www.youtube.com/watch?v=1SLr62VBBjw",
      image: {
        src: "/no_img.png",
        alt: "",
      },
      description:
        "Content blocked by NDA, will be available soon.",
    },
    {
      title: "Character Moveset #2",
      category: "AniForce",
      duration: "Combat",
      href: "https://www.youtube.com/watch?v=1SLr62VBBjw",
      image: {
        src: "/no_img.png",
        alt: "",
      },
      description:
        "Content blocked by NDA, will be available soon.",
    },
  ],
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-300/20 bg-[#06162a]/80 shadow-[0_12px_42px_rgba(0,153,255,0.14)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-white"
        >
          <span className="relative h-3 w-3 rounded-full bg-[#35d8ff] shadow-[0_0_24px_rgba(53,216,255,0.95)] transition group-hover:scale-125" />
          {content.brand}
        </Link>

        <div className="flex gap-1 overflow-x-auto rounded-lg border border-sky-300/20 bg-sky-300/[0.08] p-1 text-sm font-semibold text-sky-100 lg:overflow-visible">
          {content.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3 py-1.5 transition hover:bg-[#28d7ff]/20 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="neon-page relative isolate min-h-screen overflow-hidden text-white">
      <Navbar />
      {children}
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "left" ? "max-w-2xl" : "mx-auto max-w-2xl text-center"}>
      <p className="text-xs font-black uppercase tracking-[0.24em] text-[#49dcff] drop-shadow-[0_0_18px_rgba(73,220,255,0.55)]">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-sky-50/70 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Hero() {
  const featuredProject = content.projects[0];

  return (
    <section className="relative isolate overflow-hidden px-5 pb-14 pt-12 sm:px-8 md:pb-20 md:pt-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
        <div className="animate-rise">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#35d8ff]/35 bg-[#0b4b80]/45 px-3 py-1.5 text-xs font-bold text-sky-50 shadow-[0_0_32px_rgba(53,216,255,0.2)]">
            <span className="h-2 w-2 rounded-full bg-[#35d8ff] shadow-[0_0_16px_rgba(53,216,255,0.9)]" />
            {content.hero.badge}
          </div>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.hero.intro}{" "}
            <span className="neon-text">{content.hero.name}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-sky-50/75 sm:text-lg">
            {content.hero.description}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#35d8ff] px-5 text-sm font-black text-[#02101e] shadow-[0_0_24px_rgba(53,216,255,0.36)] transition hover:-translate-y-1 hover:bg-white"
            >
              {content.hero.button}
            </Link>
            <Link
              href="/works"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-sky-200/25 bg-sky-100/10 px-5 text-sm font-black text-sky-50 transition hover:-translate-y-1 hover:border-[#35d8ff]/70 hover:bg-[#35d8ff]/16"
            >
              {content.hero.secondaryButton}
            </Link>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-sky-200/14 bg-[#0a3155]/70 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <p className="text-xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-sky-100/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <a
          href={featuredProject.href}
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-lg border border-[#35d8ff]/30 bg-[#08243f]/85 shadow-[0_0_46px_rgba(0,153,255,0.2)] transition hover:-translate-y-1 hover:border-[#35d8ff]/70"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-[#35d8ff] shadow-[0_0_22px_rgba(53,216,255,0.95)]" />
          <div className="relative aspect-[16/11] overflow-hidden">
            <Image
              src={featuredProject.image.src}
              alt={featuredProject.image.alt}
              width={900}
              height={675}
              priority
              className="h-full w-full object-cover opacity-90 saturate-125 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041526] via-transparent to-[#35d8ff]/10" />
          </div>
          <div className="p-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#49dcff]">
              Featured Project
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              {featuredProject.name}
            </h2>
            <p className="mt-2 text-sm font-semibold text-sky-100/60">
              {featuredProject.status}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

function HomeLinks() {
  return (
    <section className="border-t border-sky-200/12 bg-[#0a2b4b]/48 px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
        {content.navItems.slice(1).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg border border-sky-200/16 bg-[#061c33]/82 p-4 text-left shadow-[0_12px_48px_rgba(0,87,156,0.15)] transition hover:-translate-y-1 hover:border-[#35d8ff]/70 hover:bg-[#0a3155]"
          >
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#49dcff]">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-sky-50/70">
              {item.label === "Skills"
                ? content.sections.skills.description
                : item.label === "Projects"
                  ? content.sections.projects.description
                  : content.sections.works.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function PortfolioHome() {
  return (
    <PageShell>
      <Hero />
      <HomeLinks />
    </PageShell>
  );
}

export function PortfolioSkills() {
  return (
    <PageShell>
      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow={content.sections.skills.eyebrow}
            title={content.sections.skills.title}
            description={content.sections.skills.description}
            align="left"
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {content.skills.map((skill, index) => (
              <div
                key={skill}
                className="animate-fade-in rounded-lg border border-sky-200/16 bg-[#061c33]/85 px-3 py-4 text-sm font-black text-sky-50 shadow-[0_0_24px_rgba(0,153,255,0.1)] transition hover:-translate-y-1 hover:border-[#35d8ff]/70 hover:bg-[#0b3b63] hover:shadow-[0_0_28px_rgba(53,216,255,0.18)]"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function PortfolioProjects() {
  return (
    <PageShell>
      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={content.sections.projects.eyebrow}
            title={content.sections.projects.title}
            description={content.sections.projects.description}
          />
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {content.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof content.projects)[number];
}) {
  const cardContent = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden border-b border-sky-200/12">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={1100}
          height={620}
          className="h-full w-full object-cover opacity-90 saturate-125 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/88 via-transparent to-[#35d8ff]/8" />
      </div>
      <div className="p-4 sm:p-5">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#49dcff]">
          {project.type}
        </p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-xl font-black text-white sm:text-2xl">
            {project.name}
          </h2>
          <p className="text-sm font-bold text-sky-100/60">
            {project.status}
          </p>
        </div>
        {project.description ? (
          <p className="mt-3 text-sm leading-6 text-sky-50/70">
            {project.description}
          </p>
        ) : null}
      </div>
    </>
  );
  const className =
    "group overflow-hidden rounded-lg border border-sky-200/16 bg-[#061c33]/90 shadow-[0_18px_62px_rgba(0,87,156,0.18)] transition duration-300 hover:-translate-y-1.5 hover:border-[#35d8ff]/70 hover:shadow-[0_18px_62px_rgba(53,216,255,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35d8ff]";

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {cardContent}
    </a>
  ) : (
    <article className={className}>{cardContent}</article>
  );
}

export function PortfolioWorks() {
  return (
    <PageShell>
      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <SectionHeading
              eyebrow={content.sections.works.eyebrow}
              title={content.sections.works.title}
              description={content.sections.works.description}
              align="left"
            />
            <div className="space-y-4">
              {content.works.map((work, index) => (
                <WorkCard key={work.title} work={work} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function WorkCard({
  work,
  index,
}: {
  work: (typeof content.works)[number];
  index: number;
}) {
  const workContent = (
    <>
      <div className="relative overflow-hidden rounded-md border border-sky-200/14 bg-[#061c33] sm:w-[240px]">
        <Image
          src={work.image.src}
          alt={work.image.alt}
          width={640}
          height={360}
          className="aspect-video w-full object-cover opacity-[0.92] saturate-125 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03111f]/72 to-transparent" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-black uppercase tracking-[0.16em]">
          <span className="text-[#49dcff]">{work.category}</span>
          <span className="h-1 w-1 rounded-full bg-sky-100/40" />
          <span className="text-sky-100/55">{work.duration}</span>
        </div>
        <h2 className="mt-2 text-xl font-black leading-tight text-white">
          <span className="mr-3 text-[#35d8ff]/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          {work.title}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-sky-50/70">
          {work.description}
        </p>
      </div>
    </>
  );
  const className =
    "group flex flex-col gap-4 rounded-lg border border-sky-200/14 bg-[#061c33]/82 p-3 text-left shadow-[0_12px_48px_rgba(0,87,156,0.15)] transition duration-300 hover:-translate-y-1 hover:border-[#35d8ff]/70 hover:bg-[#0a3155] hover:shadow-[0_12px_48px_rgba(53,216,255,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35d8ff] sm:flex-row sm:gap-4";

  return work.href ? (
    <a
      href={work.href}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {workContent}
    </a>
  ) : (
    <article className={className}>{workContent}</article>
  );
}
