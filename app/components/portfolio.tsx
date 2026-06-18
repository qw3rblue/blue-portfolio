import Image from "next/image";

// To replace the hero image, put a new image in /public and update this path.
const heroImage = {
  src: "/portfolio-workspace.png",
  alt: "Modern workspace with laptop, notebook, and design materials",
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];

const skills = [
  "Roblox Studio",
  "Luau",
  "Game Systems",
  "UI Engineering",
  "DataStores",
  "Monetization",
  "Performance",
  "Tooling",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Product Polish",
];

// To replace project images, put image files in /public and update each image src.
const projects = [
  {
    name: "AniForce",
    type: "Roblox Game",
    status: "Current Project",
    image: {
      src: "/ANIFORCE.jpg",
      alt: "AniForce project preview",
    },
    description:
      "A Roblox anime-inspired experience built with polished systems, responsive UI, and gameplay loops designed to keep players engaged.",
  },
  {
    name: "Grand Alfheim",
    type: "Roblox Game",
    status: "Old Project",
    image: {
      src: "/grandalfheim.png",
      alt: "Grand Alfheim project preview",
    },
    description:
      "A fantasy Roblox experience with immersive systems, interface polish, and gameplay features built to support a larger world.",
  },
  {
    name: "Blue Portfolio",
    type: "Web Portfolio",
    status: "Portfolio Project",
    image: {
      src: "/portfolio-screenshot.png",
      alt: "Blue portfolio website preview",
    },
    description:
      "A fast Next.js portfolio for presenting work and experience with a strong developer identity.",
  },
];

const experience = [
  {
    role: "Roblox Developer",
    period: "5+ Years",
    detail:
      "Designing and building player-facing systems, interfaces, and gameplay loops with a focus on performance and retention.",
  },
  {
    role: "UI & Systems Builder",
    period: "Recent Work",
    detail:
      "Creating polished game menus, progression flows, monetization surfaces, and reusable modules for live game updates.",
  },
  {
    role: "Frontend Developer",
    period: "Portfolio Work",
    detail:
      "Building responsive web experiences with Next.js, Tailwind CSS, and careful attention to motion, layout, and presentation.",
  },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061525]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <a
          href="#home"
          className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-white"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.9)] transition group-hover:scale-125" />
          Blue
        </a>

        <div className="flex gap-2 overflow-x-auto rounded-lg border border-white/10 bg-white/[0.04] p-1 text-sm font-medium text-blue-100/80 lg:gap-1 lg:overflow-visible">
          {navItems.map((item) => (
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
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(135deg,#061525_0%,#08294a_42%,#050915_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#061525] to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="animate-rise">
          <div className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_36px_rgba(34,211,238,0.16)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Roblox Developer with 5+ years of experience
          </div>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">
              Blue.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-100/75 sm:text-xl">
            I&apos;m a roblox developer with over 5 years of scripting experience. I can write any system that will bring your idea to life.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-cyan-300 px-6 text-sm font-bold text-[#061525] shadow-[0_18px_60px_rgba(34,211,238,0.25)] transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="animate-float-slow">
          <div className="group relative overflow-hidden rounded-lg border border-white/15 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 via-transparent to-violet-400/20 opacity-70 transition group-hover:opacity-100" />
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={1792}
              height={1024}
              priority
              className="relative aspect-[4/3] w-full rounded-md object-cover opacity-90 grayscale-[10%] transition duration-500 group-hover:scale-[1.025] group-hover:opacity-100 md:aspect-[5/4]"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/15 bg-[#061525]/80 p-4 backdrop-blur-xl">
              <p className="text-sm font-semibold text-cyan-200">
                Current focus
              </p>
              <p className="mt-1 text-sm text-blue-100/75">
                Clean systems, readable UI, and fast interactions that feel good
                across every screen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Systems, interfaces, and polish."
          description="A practical toolkit for building game experiences and presenting them with strong frontend craft."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
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
  return (
    <section
      id="projects"
      className="border-y border-white/10 bg-white/[0.03] px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds with sharp edges."
          description="A focused sample of systems, interfaces, and web work that shows how I think through polish and usability."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative w-full overflow-hidden rounded-lg border border-white/10 bg-[#081a2f]/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/45 hover:shadow-xl hover:shadow-cyan-950/35 sm:w-[calc(50%-0.5rem)] xl:w-[calc(25%-0.75rem)]"
            >
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
                <p className="mt-2 text-sm leading-6 text-blue-100/70">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Built through iteration."
          description="A simple timeline of the work patterns behind the portfolio."
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.period}`}
              className="relative rounded-lg border border-white/10 bg-white/[0.05] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.075]"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                  {item.period}
                </p>
              </div>
              <p className="mt-4 text-base leading-7 text-blue-100/70">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#061525] text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}
