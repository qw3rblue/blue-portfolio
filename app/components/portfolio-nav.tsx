"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  icon: "contact" | "home" | "projects" | "skills" | "works";
};

type IndicatorStyle = {
  animate: boolean;
  height: number;
  opacity: number;
  transform: string;
  width: number;
};

const INDICATOR_STORAGE_KEY = "blue-portfolio-nav-indicator";

export function PortfolioNav({
  activePath,
  brand,
  items,
}: {
  activePath: string;
  brand: string;
  items: readonly NavItem[];
}) {
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const mountedRef = useRef(false);
  const [selectedPath, setSelectedPath] = useState(activePath);
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({
    animate: false,
    height: 0,
    opacity: 0,
    transform: "translateX(0px)",
    width: 0,
  });

  useEffect(() => {
    const measureItem = (item: HTMLAnchorElement): IndicatorStyle => {
      const nav = navRef.current;
      const navRect = nav?.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      return {
        animate: true,
        height: itemRect.height,
        opacity: 1,
        transform: navRect
          ? `translateX(${itemRect.left - navRect.left}px) translateY(${itemRect.top - navRect.top}px)`
          : "translateX(0px) translateY(0px)",
        width: itemRect.width,
      };
    };

    const readStoredIndicator = () => {
      if (typeof window === "undefined") {
        return null;
      }

      const stored = window.sessionStorage.getItem(INDICATOR_STORAGE_KEY);
      window.sessionStorage.removeItem(INDICATOR_STORAGE_KEY);

      if (!stored) {
        return null;
      }

      try {
        const parsed = JSON.parse(stored) as Pick<
          IndicatorStyle,
          "height" | "opacity" | "transform" | "width"
        >;

        if (
          typeof parsed.height !== "number" ||
          typeof parsed.transform !== "string" ||
          typeof parsed.width !== "number"
        ) {
          return null;
        }

        return {
          animate: false,
          height: parsed.height,
          opacity: parsed.opacity,
          transform: parsed.transform,
          width: parsed.width,
        } satisfies IndicatorStyle;
      } catch {
        return null;
      }
    };

    const updateIndicator = (animate: boolean) => {
      const activeItem = itemRefs.current[selectedPath];

      if (!activeItem) {
        setIndicatorStyle((style) => ({ ...style, animate, opacity: 0 }));
        return;
      }

      setIndicatorStyle({ ...measureItem(activeItem), animate });
    };

    const frame = window.requestAnimationFrame(() => {
      if (!mountedRef.current) {
        const storedIndicator = readStoredIndicator();
        mountedRef.current = true;

        if (storedIndicator) {
          setIndicatorStyle(storedIndicator);
          window.requestAnimationFrame(() => updateIndicator(true));
          return;
        }

        updateIndicator(false);
        return;
      }

      updateIndicator(true);
    });

    const handleResize = () => {
      updateIndicator(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedPath]);

  const storeCurrentIndicator = () => {
    if (typeof window === "undefined") {
      return;
    }

    const nav = navRef.current;
    const activeItem = itemRefs.current[selectedPath];

    if (!nav || !activeItem) {
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    window.sessionStorage.setItem(
      INDICATOR_STORAGE_KEY,
      JSON.stringify({
        opacity: 1,
        height: itemRect.height,
        transform: `translateX(${itemRect.left - navRect.left}px) translateY(${itemRect.top - navRect.top}px)`,
        width: itemRect.width,
      }),
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-sky-300/20 bg-[#06162a]/88 shadow-[0_12px_42px_rgba(0,153,255,0.14)] backdrop-blur-xl md:fixed md:inset-y-0 md:left-0 md:w-72 md:border-b-0 md:border-r md:bg-[#06111f]/88 md:shadow-[18px_0_60px_rgba(0,0,0,0.24)]">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 sm:px-8 md:h-full md:max-w-none md:px-4 md:py-6">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-white md:rounded-lg md:px-2 md:py-1"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-full border border-[#35d8ff]/35 bg-[#08243f] text-xs text-[#49dcff] shadow-[0_0_24px_rgba(53,216,255,0.36)] transition group-hover:scale-105">
            B
          </span>
          <span className="flex flex-col">
            <span>{brand}</span>
            <span className="mt-1 hidden text-[11px] font-bold normal-case tracking-[0.04em] text-sky-100/52 md:block">
              Roblox Programmer
            </span>
          </span>
        </Link>

        <div
          ref={navRef}
          className="relative flex gap-1 overflow-x-auto rounded-lg border border-sky-300/20 bg-sky-300/[0.08] p-1 text-sm font-semibold text-sky-100 md:mt-5 md:flex-col md:overflow-visible md:border-sky-300/12 md:bg-white/[0.035]"
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute left-0 top-0 rounded-md bg-white/10 ${
              indicatorStyle.animate
                ? "transition-[transform,width,height,opacity] duration-300 ease-out"
                : "transition-none"
            }`}
            style={{
              height: indicatorStyle.height,
              opacity: indicatorStyle.opacity,
              transform: indicatorStyle.transform,
              width: indicatorStyle.width,
            }}
          />
          {items.map((item) => {
            const active = item.href === selectedPath;

            return (
              <Link
                key={item.href}
                ref={(node) => {
                  itemRefs.current[item.href] = node;
                }}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => {
                  storeCurrentIndicator();
                  setSelectedPath(item.href);
                }}
                className="nav-button-font relative z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 py-1.5 text-sky-100/80 transition hover:text-white aria-[current=page]:text-white md:h-10 md:w-full md:justify-start md:px-3"
              >
                <NavIcon icon={item.icon} />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto hidden rounded-lg border border-sky-300/12 bg-sky-300/[0.045] p-3 text-xs font-bold text-sky-50/72 md:block">
          <div className="flex items-center gap-2 text-sky-50">
            <span className="h-2 w-2 rounded-full bg-[#39ff14] shadow-[0_0_14px_rgba(57,255,20,0.9)]" />
            Commissions Open
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavIcon({ icon }: { icon: NavItem["icon"] }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {icon === "home" ? (
        <>
          <path d="m3 11 9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-6h6v6" />
        </>
      ) : null}
      {icon === "skills" ? (
        <>
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
          <rect height="18" rx="2" width="14" x="5" y="3" />
        </>
      ) : null}
      {icon === "projects" ? (
        <>
          <path d="M3 7h7l2 2h9v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
          <path d="M3 7V5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v2" />
        </>
      ) : null}
      {icon === "works" ? (
        <>
          <path d="m14 4 6 6" />
          <path d="M18 2 8 12" />
          <path d="m7 13 4 4" />
          <path d="m5 15-2 6 6-2" />
        </>
      ) : null}
      {icon === "contact" ? (
        <>
          <rect height="14" rx="2" width="18" x="3" y="5" />
          <path d="m3 7 9 6 9-6" />
        </>
      ) : null}
    </svg>
  );
}
