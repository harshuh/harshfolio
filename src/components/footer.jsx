import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const indiaTime = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setTime(indiaTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full px-4 sm:px-6 py-6 bg-[#f5fefd] text-neutral-800 min-h-[180px] sm:min-h-0">
      {/* center content */}
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-sm sm:text-lg">
          Made with <span className="text-red-500">❤️</span>
        </p>
        <p className="text-xs sm:text-lg text-black/60 mt-1">
          Designed and developed by Harsh
        </p>
      </div>

      <div className="absolute left-4 bottom-6 sm:left-30 sm:bottom-13 text-xs sm:text-lg text-black/70 font-medium">
        {time} IST
      </div>

      <div>
        <button
          onClick={scrollToTop}
          className="h-12 w-12 sm:h-20 sm:w-20 absolute right-4 bottom-4 sm:right-30 sm:bottom-10 text-lg sm:text-4xl rounded-full border border-green-400/40 bg-white/70 backdrop-blur-md hover:bg-green-400 hover:text-black transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
