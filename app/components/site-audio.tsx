"use client";

import { useEffect, useRef, useState } from "react";

const AUDIO_SRC = "/background.mp3";

export function SiteAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    const playAfterInteraction = () => {
      void playAudio();
      window.removeEventListener("pointerdown", playAfterInteraction);
      window.removeEventListener("keydown", playAfterInteraction);
    };

    void playAudio();
    window.addEventListener("pointerdown", playAfterInteraction, { once: true });
    window.addEventListener("keydown", playAfterInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", playAfterInteraction);
      window.removeEventListener("keydown", playAfterInteraction);
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" />
      <button
        type="button"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        aria-pressed={isPlaying}
        onClick={toggleAudio}
        className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#061525]/85 text-cyan-100 shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur transition hover:border-cyan-300/50 hover:bg-[#0a2038] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M11 5 6 9H3v6h3l5 4z" />
          {isPlaying ? (
            <>
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" />
            </>
          ) : (
            <>
              <path d="m16 9 5 5" />
              <path d="m21 9-5 5" />
            </>
          )}
        </svg>
      </button>
    </>
  );
}
