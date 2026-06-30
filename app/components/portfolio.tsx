import Image from "next/image";
import { MeteorShowerBackground } from "./meteor-shower-background";

const content = {
  brand: "Blue",
  hero: {
    badge: "Programmer and Project Manager",
    intro: "Hi, I'm",
    name: "Blue.",
    description:
      "Over 5 years of scripting experience. I can write any system that will bring your idea to life. As a developer, I've shipped countless systems spanning more than 100 commissions. From simple combat to sophisticated systems, name it and I'll create it.",
    button: "View Projects",
  },
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
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Works", href: "#works" },
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
    }
  ],
  works: [
    {
      title: "Pending Content",
      category: "Undefined",
      duration: "Undefined",
      href: "",
      image: {
        src: "/no_img.png",
        alt: "",
      },
      description:
        "Content is currently unavailable and will be published soon.",
    }
  ],
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061525]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <a
          href="#home"
          className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-white"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.9)] transition group-hover:scale-125" />
          {content.brand}
        </a>

        <div className="flex gap-2 overflow-x-auto rounded-lg border border-white/10 bg-white/[0.04] p-1 text-sm font-medium text-blue-100/80 lg:gap-1 lg:overflow-visible">
          {content.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.26em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-blue-100/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl animate-rise">
          <div className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_36px_rgba(34,211,238,0.16)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            {content.hero.badge}
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl">
            {content.hero.intro}{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              {content.hero.name}
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100/75 sm:text-xl">
            {content.hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-cyan-300 px-6 text-sm font-bold text-[#061525] shadow-[0_18px_60px_rgba(34,211,238,0.25)] transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              {content.hero.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.sections.skills.eyebrow}
          title={content.sections.skills.title}
          description={content.sections.skills.description}
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {content.skills.map((skill, index) => (
            <div
              key={skill}
              className="animate-fade-in rounded-lg border border-white/10 bg-white/[0.05] px-4 py-4 text-sm font-semibold text-blue-50 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-white"
              style={{ animationDelay: `${index * 45}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projectCardClassName =
    "group relative w-full overflow-hidden rounded-lg border border-white/10 bg-[#081a2f]/80 text-left backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/45 hover:shadow-xl hover:shadow-cyan-950/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:w-[calc(50%-0.5rem)] xl:w-[calc(25%-0.75rem)]";

  return (
    <section
      id="projects"
      className="border-y border-white/10 bg-white/[0.03] px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.sections.projects.eyebrow}
          title={content.sections.projects.title}
          description={content.sections.projects.description}
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {content.projects.map((project) => {
            const cardContent = (
              <>
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 opacity-70 transition group-hover:opacity-100" />
                <div className="overflow-hidden border-b border-white/10 bg-white/[0.03]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={900}
                    height={560}
                    className="aspect-[16/8] w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                    {project.type}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-blue-100/50">
                    {project.status}
                  </p>
                  {project.description ? (
                    <p className="mt-2 text-sm leading-6 text-blue-100/70">
                      {project.description}
                    </p>
                  ) : null}
                </div>
              </>
            );

            return project.href ? (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={projectCardClassName}
              >
                {cardContent}
              </a>
            ) : (
              <article key={project.name} className={projectCardClassName}>
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Works() {
  const workItemClassName =
    "group grid gap-4 rounded-lg border border-white/10 bg-[#07182b]/80 p-3 text-left backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:bg-[#09213b]/85 hover:shadow-xl hover:shadow-cyan-950/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:grid-cols-[minmax(210px,320px)_1fr] sm:gap-5 sm:p-4";

  return (
    <section
      id="works"
      className="border-b border-white/10 px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.sections.works.eyebrow}
          title={content.sections.works.title}
          description={content.sections.works.description}
        />
        <div className="mt-10 space-y-4">
          {content.works.map((work) => {
            const workContent = (
              <>
                <div className="relative overflow-hidden rounded-md border border-white/10 bg-white/[0.04]">
                  <Image
                    src={work.image.src}
                    alt={work.image.alt}
                    width={640}
                    height={360}
                    className="aspect-video w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#061525]/80 to-transparent" />
                </div>
                <div className="flex min-w-0 flex-col justify-center py-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.16em]">
                    <span className="text-cyan-300">{work.category}</span>
                    <span className="h-1 w-1 rounded-full bg-blue-100/35" />
                    <span className="text-blue-100/50">{work.duration}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-tight text-white sm:text-2xl">
                    {work.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-blue-100/70 sm:text-base sm:leading-7">
                    {work.description}
                  </p>
                </div>
              </>
            );

            return work.href ? (
              <a
                key={work.title}
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className={workItemClassName}
              >
                {workContent}
              </a>
            ) : (
              <article key={work.title} className={workItemClassName}>
                {workContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-transparent text-white">
      <MeteorShowerBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Works />
      </div>
    </main>
  );
}
