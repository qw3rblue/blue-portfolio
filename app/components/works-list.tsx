"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type WorkItem = {
  category: string;
  description: string;
  href: string;
  image: {
    alt: string;
    src: string;
  };
  tags: string;
  title: string;
};

type WorksListProps = {
  works: readonly WorkItem[];
};

const ALL_CATEGORIES = "All categories";

export function WorksList({ works }: WorksListProps) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(
    () => Array.from(new Set(works.map((work) => work.category))),
    [works],
  );

  const filteredWorks = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return works.filter((work) => {
      const matchesCategory =
        selectedCategory === ALL_CATEGORIES ||
        work.category === selectedCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      return [
        work.title,
        work.category,
        work.tags,
        work.description,
      ].some((value) => value.toLowerCase().includes(normalizedSearch));
    });
  }, [searchQuery, selectedCategory, works]);

  return (
    <div className="mt-9">
      <div className="animate-panel-in grid gap-3 rounded-lg border border-sky-200/14 bg-[#061c33]/72 p-3 shadow-[0_12px_42px_rgba(0,87,156,0.12)] sm:grid-cols-[220px_1fr]">
        <label className="flex flex-col gap-2 text-xs font-black uppercase tracking-[0.14em] text-sky-100/60">
          Category
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="h-11 rounded-md border border-sky-200/16 bg-[#08243f] px-3 text-sm font-bold normal-case tracking-normal text-white outline-none transition focus:border-[#35d8ff] focus:shadow-[0_0_0_3px_rgba(53,216,255,0.16)]"
          >
            <option value={ALL_CATEGORIES}>{ALL_CATEGORIES}</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-xs font-black uppercase tracking-[0.14em] text-sky-100/60">
          Search
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search works, categories, or tags"
            className="h-11 rounded-md border border-sky-200/16 bg-[#08243f] px-3 text-sm font-bold normal-case tracking-normal text-white outline-none transition placeholder:text-sky-100/36 focus:border-[#35d8ff] focus:shadow-[0_0_0_3px_rgba(53,216,255,0.16)]"
          />
        </label>
      </div>

      <div className="mt-5 space-y-4">
        {filteredWorks.map((work, index) => (
          <WorkCard key={work.title} work={work} index={index} />
        ))}
      </div>

      {filteredWorks.length === 0 ? (
        <p className="animate-panel-in mt-5 rounded-lg border border-sky-200/14 bg-[#061c33]/72 px-4 py-5 text-sm font-bold text-sky-50/70">
          No works found.
        </p>
      ) : null}
    </div>
  );
}

function WorkCard({ work, index }: { work: WorkItem; index: number }) {
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
          <span className="text-sky-100/55">{work.tags}</span>
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
    "animate-panel-in group flex flex-col gap-4 rounded-lg border border-sky-200/14 bg-[#061c33]/82 p-3 text-left shadow-[0_12px_48px_rgba(0,87,156,0.15)] transition duration-300 hover:-translate-y-1 hover:border-[#35d8ff]/70 hover:bg-[#0a3155] hover:shadow-[0_12px_48px_rgba(53,216,255,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#35d8ff] sm:flex-row sm:gap-4";
  const style = { animationDelay: `${120 + index * 80}ms` };

  return work.href ? (
    <a
      href={work.href}
      target="_blank"
      rel="noreferrer"
      className={className}
      style={style}
    >
      {workContent}
    </a>
  ) : (
    <article className={className} style={style}>
      {workContent}
    </article>
  );
}
