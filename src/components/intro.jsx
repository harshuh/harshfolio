import { useEffect, useState } from "react";

export default function Intro({ onFinish }) {
  const greetings = ["Hello", "नमस्ते", "Hola", "Bonjour", "Hallo"];

  const [index, setIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) return;

    let timer;

    if (index < greetings.length - 1) {
      timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 450);
    } else {
      timer = setTimeout(() => {
        setIsLeaving(true);
      }, 650);
    }

    return () => clearTimeout(timer);
  }, [index, show, greetings.length]);

  useEffect(() => {
    if (!isLeaving) return;

    const finishTimer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 1400);

    return () => clearTimeout(finishTimer);
  }, [isLeaving, onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] overflow-hidden pointer-events-none">
      {/* curved clip definition */}
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="introCurve" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.88 Q0.5,1 0,0.88 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className={`absolute inset-0 bg-[#0a0a0f] flex items-center justify-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isLeaving ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ clipPath: "url(#introCurve)" }}
      >
        <div className="flex items-center text-white text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
          <span className="mr-3 text-white/90">•</span>
          <span
            key={greetings[index]}
            className="animate-[introText_450ms_ease_forwards]"
          >
            {greetings[index]}
          </span>
        </div>
      </div>
    </div>
  );
}
