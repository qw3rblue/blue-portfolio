import Image from "next/image";
import { PortfolioNav } from "./portfolio-nav";
import { WorksList } from "./works-list";

const content = {
  brand: "Blue",
  brandImage: {
    src: "/no_img.png",
    alt: "Navigation profile image placeholder",
  },
  hero: {
    intro: "Hi, I'm",
    name: "Blue.",
    description:
      "Over 5 years of scripting experience. I can write any system that will bring your idea to life. As a developer, I've shipped countless systems spanning more than 100 commissions. From simple combat to sophisticated systems, name it and I'll create it.",
    profileImage: {
      src: "/no_img.png",
      alt: "Profile picture placeholder",
    },
  },
  stats: [
    { value: "5 +", label: "Years scripting" },
    { value: "50 +", label: "Commissions shipped" },
  ],
  sections: {
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
    { label: "Home", href: "/", icon: "home" },
    { label: "Projects", href: "/projects", icon: "projects" },
    { label: "Works", href: "/works", icon: "works" },
    { label: "Contact", href: "/contact", icon: "contact" },
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
      description:
        "Add a short description here for the featured project. This space is set aside for context, your role, or the kind of systems you built.",
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
      tags: "Frontend, Outdated",
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
      tags: "Combat",
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
      tags: "Combat",
      href: "https://www.youtube.com/watch?v=1SLr62VBBjw",
      image: {
        src: "/no_img.png",
        alt: "",
      },
      description:
        "Content blocked by NDA, will be available soon.",
    },
  ],
  contact: [
    {
      label: "Discord",
      placeholder: "blue | @swxblue",
      href: "https://discord.com/users/1421468230576508928",
      icon: "discord",
    },
    {
      label: "Email",
      placeholder: "bytebluedev@gmail.com",
      href: "mailto:email@example.com",
      icon: "email",
    },
    {
      label: "Roblox",
      placeholder: "blue | @bluesseo",
      href: "https://www.roblox.com/users/5274696711/profile",
      icon: "roblox",
    },
    {
      label: "X",
      placeholder: "blue | @swbIue",
      href: "https://x.com/swbIue",
      icon: "x",
    },
  ],
} as const;

function PageShell({
  activePath,
  children,
}: {
  activePath: string;
  children: React.ReactNode;
}) {
  return (
    <main className="neon-page relative isolate min-h-screen overflow-hidden text-white">
      <PortfolioNav
        activePath={activePath}
        brand={content.brand}
        brandImage={content.brandImage}
        items={content.navItems}
      />
      <div className="relative min-h-screen md:pl-72">{children}</div>
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
    <div
      className={`animate-panel-in ${
        align === "left" ? "max-w-2xl" : "mx-auto max-w-2xl text-center"
      }`}
    >
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
  const { profileImage } = content.hero;

  return (
    <section className="relative isolate overflow-hidden px-5 pb-10 pt-12 sm:px-8 md:pb-12 md:pt-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,32%)] lg:items-stretch">
        <div className="animate-rise">
          <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.hero.intro}{" "}
            <span className="neon-text">{content.hero.name}</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-sky-50/75 sm:text-lg">
            {content.hero.description}
          </p>

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

        <div
          className="animate-panel-in w-full overflow-hidden rounded-lg border border-[#35d8ff]/28 bg-[#061c33]/86 shadow-[0_18px_54px_rgba(0,153,255,0.16)]"
          style={{ animationDelay: "120ms" }}
        >
          <Image
            src={profileImage.src}
            alt={profileImage.alt}
            width={440}
            height={440}
            priority
            className="aspect-[4/3] h-full min-h-[240px] w-full object-cover opacity-90 saturate-125 lg:aspect-auto"
          />
        </div>
      </div>
    </section>
  );
}

function FeaturedProject() {
  const featuredProject = content.projects[0];

  return (
    <section className="px-5 pb-14 sm:px-8 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <a
          href={featuredProject.href}
          target="_blank"
          rel="noreferrer"
          className="animate-panel-in group grid overflow-hidden rounded-lg border border-[#35d8ff]/30 bg-[#08243f]/85 shadow-[0_0_46px_rgba(0,153,255,0.2)] transition hover:-translate-y-1 hover:border-[#35d8ff]/70 lg:grid-cols-[minmax(0,0.95fr)_minmax(280px,0.75fr)]"
          style={{ animationDelay: "140ms" }}
        >
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
          <div className="flex flex-col justify-center border-t border-sky-200/12 p-4 sm:p-6 lg:border-l lg:border-t-0">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#49dcff]">
              Featured Project
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              {featuredProject.name}
            </h2>
            <p className="mt-2 text-sm font-semibold text-sky-100/60">
              {featuredProject.status}
            </p>
            <p className="mt-4 text-sm leading-6 text-sky-50/72">
              {featuredProject.description}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

export function PortfolioHome() {
  return (
    <PageShell activePath="/">
      <Hero />
      <FeaturedProject />
      <HomeSkillTiles />
    </PageShell>
  );
}

function HomeSkillTiles() {
  return (
    <section className="px-5 pb-14 sm:px-8 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {content.skills.map((skill, index) => (
            <div
              key={skill}
              className="animate-panel-in rounded-lg border border-sky-200/16 bg-[#061c33]/85 px-3 py-4 text-sm font-black text-sky-50 shadow-[0_0_24px_rgba(0,153,255,0.1)] transition hover:-translate-y-1 hover:border-[#35d8ff]/70 hover:bg-[#0b3b63] hover:shadow-[0_0_28px_rgba(53,216,255,0.18)]"
              style={{ animationDelay: `${180 + index * 50}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioProjects() {
  return (
    <PageShell activePath="/projects">
      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={content.sections.projects.eyebrow}
            title={content.sections.projects.title}
            description={content.sections.projects.description}
          />
          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            {content.projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof content.projects)[number];
  index: number;
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
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
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
    "animate-panel-in group overflow-hidden rounded-lg border border-sky-200/16 bg-[#061c33]/90 shadow-[0_18px_62px_rgba(0,87,156,0.18)] transition duration-300 hover:-translate-y-1.5 hover:border-[#35d8ff]/70 hover:shadow-[0_18px_62px_rgba(53,216,255,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35d8ff]";
  const style = { animationDelay: `${120 + index * 90}ms` };

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={className}
      style={style}
    >
      {cardContent}
    </a>
  ) : (
    <article className={className} style={style}>
      {cardContent}
    </article>
  );
}

export function PortfolioWorks() {
  return (
    <PageShell activePath="/works">
      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow={content.sections.works.eyebrow}
            title={content.sections.works.title}
            description={content.sections.works.description}
          />
          <WorksList works={content.works} />
        </div>
      </section>
    </PageShell>
  );
}

export function PortfolioContact() {
  return (
    <PageShell activePath="/contact">
      <section className="px-5 py-14 sm:px-8 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Contact"
            title="Contact Me"
            description="Reach me through any of my social links."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {content.contact.map((item, index) => (
              <a
                href={item.href}
                key={item.label}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="animate-panel-in rounded-lg border border-sky-200/16 bg-[#061c33]/86 p-4 shadow-[0_18px_54px_rgba(0,87,156,0.16)] transition hover:-translate-y-1 hover:border-[#35d8ff]/70 hover:bg-[#0b3b63]"
                style={{ animationDelay: `${120 + index * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#35d8ff]/28 bg-[#08243f] text-[#49dcff] shadow-[0_0_22px_rgba(53,216,255,0.16)]">
                    <ContactIcon icon={item.icon} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-black text-white">
                      {item.label}
                    </p>
                    <p className="mt-1 break-words text-sm font-semibold text-sky-100/62">
                      {item.placeholder}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function ContactIcon({ icon }: { icon: (typeof content.contact)[number]["icon"] }) {
  if (icon === "discord") {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M8 18c-2.4-.5-3.6-1.5-3.6-1.5A15.2 15.2 0 0 1 6.1 6.2 8.4 8.4 0 0 1 9 5.1l.6 1.1" />
        <path d="M16 18c2.4-.5 3.6-1.5 3.6-1.5a15.2 15.2 0 0 0-1.7-10.3A8.4 8.4 0 0 0 15 5.1l-.6 1.1" />
        <path d="M8.5 16.5a12 12 0 0 0 7 0" />
        <path d="M9 10.5h.01" />
        <path d="M15 10.5h.01" />
      </svg>
    );
  }

  if (icon === "email") {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect height="14" rx="2" width="18" x="3" y="5" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (icon === "roblox") {
    return (
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="m12 3 9 9-9 9-9-9Z" />
        <path d="m12 10 2 2-2 2-2-2Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m4 4 16 16" />
      <path d="M20 4 4 20" />
      <path d="M8 4h4l4 16h-4Z" />
    </svg>
  );
}
