"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type IndicatorStyle = {
  animate: boolean;
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
  items: NavItem[];
}) {
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const mountedRef = useRef(false);
  const [selectedPath, setSelectedPath] = useState(activePath);
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle>({
    animate: false,
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
        opacity: 1,
        transform: `translateX(${navRect ? itemRect.left - navRect.left : 0}px)`,
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
        const parsed = JSON.parse(stored) as Pick<IndicatorStyle, "opacity" | "transform" | "width">;

        if (typeof parsed.transform !== "string" || typeof parsed.width !== "number") {
          return null;
        }

        return {
          animate: false,
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
        transform: `translateX(${itemRect.left - navRect.left}px)`,
        width: itemRect.width,
      }),
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-sky-300/20 bg-[#06162a]/80 shadow-[0_12px_42px_rgba(0,153,255,0.14)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.24em] text-white"
        >
          <span className="relative h-3 w-3 rounded-full bg-[#35d8ff] shadow-[0_0_24px_rgba(53,216,255,0.95)] transition group-hover:scale-125" />
          {brand}
        </Link>

        <div
          ref={navRef}
          className="relative flex gap-1 overflow-x-auto rounded-lg border border-sky-300/20 bg-sky-300/[0.08] p-1 text-sm font-semibold text-sky-100 lg:overflow-visible"
        >
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-1 left-0 top-1 rounded-md bg-white/10 ${
              indicatorStyle.animate
                ? "transition-[transform,width,opacity] duration-300 ease-out"
                : "transition-none"
            }`}
            style={{
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
                className="nav-button-font relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sky-100/80 transition hover:text-white aria-[current=page]:text-white"
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
