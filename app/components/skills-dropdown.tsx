"use client";

import { useState } from "react";

export function SkillsDropdown({
  title,
  description,
  skills,
}: {
  title: string;
  description: string;
  skills: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-5 pb-14 sm:px-8 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="animate-panel-in overflow-hidden rounded-lg border border-sky-200/16 bg-[#061c33]/82 shadow-[0_18px_54px_rgba(0,87,156,0.16)]">
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
            className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left outline-none transition hover:bg-sky-100/[0.04] focus-visible:bg-sky-100/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#35d8ff]"
          >
            <span className="text-base font-black text-[#49dcff] drop-shadow-[0_0_18px_rgba(73,220,255,0.38)] sm:text-lg">
              {title}
            </span>
            <span
              aria-hidden="true"
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-md border border-sky-200/16 bg-white/[0.06] text-xl font-black leading-none text-sky-50 transition duration-300 ${
                open ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </button>

          <div
            className={`grid border-t border-sky-200/12 transition-[grid-template-rows,opacity] duration-300 ease-out ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-4 pb-4 pt-3">
                <p className="max-w-2xl text-sm leading-6 text-sky-50/65">
                  {description}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className={`rounded-md border border-sky-200/14 bg-[#08243f]/78 px-3 py-3 text-sm font-black text-sky-50 shadow-[0_0_20px_rgba(0,153,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#35d8ff]/60 hover:bg-[#0b3b63] ${
                        open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                      }`}
                      style={{ transitionDelay: open ? `${index * 35}ms` : "0ms" }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
