import Image from "next/image";

// To replace the hero image, put a new image in /public and update this path.
const heroImage = {
  src: "/portfolio-workspace.png",
  alt: "Modern workspace with laptop, notebook, and design materials",
};

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "UI Engineering",
  "Responsive Design",
  "Accessibility",
  "Performance",
  "API Integration",
  "Product Thinking",
];

const projects = [
  {
    name: "Portfolio System",
    type: "Personal Brand",
    description:
      "A polished portfolio experience designed to communicate craft, clarity, and momentum across projects and professional history.",
    stack: ["Next.js", "Tailwind CSS", "Content Strategy"],
  },
  {
    name: "Product Dashboard",
    type: "Web Application",
    description:
      "A focused dashboard concept for tracking operational metrics with clear hierarchy, compact data views, and fast scanning.",
    stack: ["React", "TypeScript", "Charts"],
  },
  {
    name: "Design Toolkit",
    type: "Component Library",
    description:
      "A reusable set of interface patterns for buttons, forms, layout primitives, and responsive content sections.",
    stack: ["Tailwind CSS", "Accessibility", "Systems"],
  },
];

const experience = [
  {
    role: "Frontend Developer",
    period: "Current",
    detail:
      "Building responsive, reliable web experiences with a focus on clean interaction patterns and maintainable implementation.",
  },
  {
    role: "UI Builder",
    period: "Recent",
    detail:
      "Translating ideas, wireframes, and product requirements into polished pages, reusable components, and production-ready interfaces.",
  },
  {
    role: "Creative Technologist",
    period: "Ongoing",
    detail:
      "Exploring the overlap between design, code, and communication to make digital products feel clear and intentional.",
  },
];

const navItems = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] text-[#102033] transition-colors dark:bg-[#061525] dark:text-[#eaf4ff]">
      <header className="sticky top-0 z-20 border-b border-[#cbdcf3] bg-[#f4f8ff]/90 backdrop-blur transition-colors dark:border-[#17395f] dark:bg-[#061525]/90">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#home"
            className="text-base font-semibold tracking-[0.08em] text-[#0c4a8a] transition dark:text-[#6ab7ff]"
          >
            BLUE
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-[#4e6684] md:flex dark:text-[#a7c9ee]">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-[#0c4a8a] dark:hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:hello@example.com"
            className="rounded-lg border border-[#0c4a8a] px-4 py-2 text-sm font-semibold text-[#0c4a8a] transition hover:bg-[#0c4a8a] hover:text-white dark:border-[#6ab7ff] dark:text-[#9dcfff] dark:hover:bg-[#6ab7ff] dark:hover:text-[#061525]"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 md:grid-cols-[0.95fr_1.05fr] md:pb-20 md:pt-20"
      >
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#1472c9] dark:text-[#6ab7ff]">
            Portfolio
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] text-[#081a2f] dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Blue.
          </h1>
          <p className="mt-6 text-xl leading-8 text-[#3d5675] dark:text-[#c5dcf4] sm:text-2xl sm:leading-9">
            I build clean, responsive web experiences that turn ideas into
            polished digital products.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-[#0c4a8a] px-6 text-sm font-semibold text-white transition hover:bg-[#083866] dark:bg-[#6ab7ff] dark:text-[#061525] dark:hover:bg-[#a9d8ff]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-[#9bb9dc] px-6 text-sm font-semibold text-[#0c4a8a] transition hover:border-[#0c4a8a] hover:bg-white dark:border-[#2a5f9d] dark:text-[#9dcfff] dark:hover:border-[#6ab7ff] dark:hover:bg-[#0b213a]"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-[#cbdcf3] bg-white shadow-sm shadow-blue-950/10 transition dark:border-[#17395f] dark:bg-[#081a2f] dark:shadow-black/30">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={1792}
            height={1024}
            priority
            className="aspect-[4/3] w-full object-cover md:aspect-[5/4]"
          />
        </div>
      </section>

      <section
        id="about"
        className="border-y border-[#cbdcf3] bg-white transition-colors dark:border-[#17395f] dark:bg-[#081a2f]"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1472c9] dark:text-[#6ab7ff]">
              About Me
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#081a2f] dark:text-white sm:text-4xl">
              Thoughtful interfaces, built with care.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#3d5675] dark:text-[#c5dcf4]">
            <p>
              I enjoy shaping simple, useful web experiences from the first
              rough idea through the final responsive details. My work sits at
              the intersection of design judgment, front-end engineering, and
              clear communication.
            </p>
            <p>
              I care about pages that load quickly, read clearly, adapt across
              devices, and feel easy to use without needing extra explanation.
            </p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1472c9] dark:text-[#6ab7ff]">
              Skills
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#081a2f] dark:text-white sm:text-4xl">
              Tools and strengths
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#4e6684] dark:text-[#a7c9ee]">
            A practical mix of engineering, interface craft, and product sense
            for building web experiences that hold up in real use.
          </p>
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-[#bfd3ec] bg-white px-4 py-3 text-sm font-semibold text-[#163a5f] shadow-sm shadow-blue-950/5 transition dark:border-[#245386] dark:bg-[#081a2f] dark:text-[#d9eaff] dark:shadow-black/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="bg-[#e5f0ff] transition-colors dark:bg-[#0a2038]"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1472c9] dark:text-[#6ab7ff]">
              Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#081a2f] dark:text-white sm:text-4xl">
              Selected work
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-lg border border-[#bfd3ec] bg-[#fbfdff] p-6 shadow-sm shadow-blue-950/5 transition dark:border-[#245386] dark:bg-[#081a2f] dark:shadow-black/20"
              >
                <p className="text-sm font-semibold text-[#1472c9] dark:text-[#6ab7ff]">
                  {project.type}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[#081a2f] dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#435d7b] dark:text-[#c5dcf4]">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-[#e8f2ff] px-3 py-2 text-xs font-semibold text-[#0c4a8a] dark:bg-[#102f51] dark:text-[#9dcfff]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20"
      >
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1472c9] dark:text-[#6ab7ff]">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-[#081a2f] dark:text-white sm:text-4xl">
              How I work
            </h2>
          </div>
          <div className="space-y-4">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.period}`}
                className="rounded-lg border border-[#cbdcf3] bg-white p-6 shadow-sm shadow-blue-950/5 transition dark:border-[#245386] dark:bg-[#081a2f] dark:shadow-black/20"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-[#081a2f] dark:text-white">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5f7ea3] dark:text-[#9dcfff]">
                    {item.period}
                  </p>
                </div>
                <p className="mt-4 text-base leading-7 text-[#435d7b] dark:text-[#c5dcf4]">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#071a2f] text-white dark:bg-[#020b14]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6ab7ff]">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d9eaff] dark:text-[#b8d6f5]">
              I&apos;m open to portfolio reviews, freelance work,
              collaborations, and web projects that need a careful front-end
              hand.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-[#0c4a8a] transition hover:bg-[#d9ecff] dark:bg-[#6ab7ff] dark:text-[#061525] dark:hover:bg-[#a9d8ff]"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/35 px-6 text-sm font-semibold text-white transition hover:border-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/35 px-6 text-sm font-semibold text-white transition hover:border-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
