import { useEffect, useState } from "react";

export default function Intro({ onFinish, onStartExit }) {
  const greetings = [
    "Hello",
    "नमस्ते",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
  ];

  const [index, setIndex] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show || isLeaving) return;

    let timer;

    if (index < greetings.length - 1) {
      timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 350);
    } else {
      timer = setTimeout(() => {
        setIsLeaving(true);
        onStartExit?.();
      }, 700);
    }

    return () => clearTimeout(timer);
  }, [index, show, isLeaving, greetings.length, onStartExit]);

  useEffect(() => {
    if (!isLeaving) return;

    const finishTimer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 1500);

    return () => clearTimeout(finishTimer);
  }, [isLeaving, onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
      <div
        className={`absolute left-0 top-0 w-full h-[120vh] bg-[#05070d] transition-transform duration-[1500ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isLeaving ? "-translate-y-[120vh]" : "translate-y-0"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`flex items-center gap-3 transition-all duration-500 ${
              isLeaving
                ? "-translate-y-10 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <span className="text-white/90 text-xl sm:text-2xl md:text-3xl">
              •
            </span>

            <span
              key={greetings[index]}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight animate-[introWord_350ms_ease_forwards]"
            >
              {greetings[index]}
            </span>
          </div>
        </div>

        <div className="absolute bottom-[-12vh] left-1/2 -translate-x-1/2 w-[140%] h-[24vh]">
          <div className="w-full h-full bg-[#05070d] rounded-[0_0_50%_50%]" />
        </div>
      </div>

      <style>{`
        @keyframes introWord {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
