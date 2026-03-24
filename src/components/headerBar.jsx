import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = ["Projects", "About", "Contact"];

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[94%] sm:w-[92%] max-w-6xl z-50">
      <div className="relative">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-neutral-700/40 backdrop-blur-xl border border-white/10 shadow-xl">
          {/* Left Section */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              draggable={false}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full shrink-0 select-none"
            />
            <span className="text-gray-800 font-semibold text-sm sm:text-lg truncate flex items-center gap-1 font-mono tracking-wide select-none">
              <span className="text-green-400">&lt;</span>
              <span>Harshuh</span>
              <span className="text-green-400">/&gt;</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-8 text-white text-sm font-medium">
              {navItems.map((item) => (
                <li
                  key={item}
                  className="group overflow-hidden relative whitespace-nowrap select-none"
                  draggable={false}
                >
                  <a href="#" draggable={false} className="block select-none">
                    <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[125%] group-hover:skew-y-8">
                      {item}
                    </div>

                    <div className="absolute top-0 left-0 translate-y-[125%] skew-y-8 transition duration-300 group-hover:translate-y-0 group-hover:skew-y-0">
                      {item}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 select-none">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              className="select-none"
            >
              <button
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                className="flex items-center gap-2 px-3 sm:px-5 py-2 rounded-full border bg-green-400 text-gray-900 hover:border-gray-900 transition text-xs sm:text-sm select-none"
              >
                <span className="hidden sm:inline">Download CV</span>
                <span className="sm:hidden">CV</span>
              </button>
            </a>

            <button className="w-9 h-6 sm:w-10 sm:h-6 rounded-md bg-neutral-800 flex items-center justify-center shrink-0">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India"
                draggable={false}
                className="w-5 h-4 sm:w-6 sm:h-5 object-cover rounded-sm select-none"
              />
            </button>

            <button
              className="md:hidden w-9 h-9 flex items-center justify-center text-white text-xl select-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              draggable={false}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-full mt-3 left-1/2 -translate-x-1/2 w-full max-w-sm transition-all duration-300 ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="rounded-2xl bg-neutral-700/95 backdrop-blur-xl border border-white/10 shadow-xl px-5 py-4">
            <nav>
              <ul className="flex flex-col gap-4 text-white text-sm font-medium">
                {navItems.map((item) => (
                  <li key={item} className="select-none">
                    <a
                      href="#"
                      onClick={() => setOpen(false)}
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      className="block py-1 hover:text-green-400 transition select-none"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
