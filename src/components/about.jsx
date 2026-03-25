import { useEffect, useRef, useState } from "react";

export default function About() {
  const education = [
    {
      title: "Gautam Buddha University",
      subtitle: "B.Tech in Computer Science",
      year: "2023 - 2027",
    },
    {
      title: "Kendriya Vidyalaya Sadiq Nagar",
      subtitle: "Class XII",
      year: "Apirl 2022",
    },
    {
      title: "Kendriya Vidyalaya Noida",
      subtitle: "Class X ",
      year: "March 2020",
    },
  ];

  const tags = ["India", "Backend", "DevOps", "UX/UI"];

  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const totalScrollable = sectionHeight - viewportHeight;
      const scrolled = Math.min(
        Math.max(-rect.top, 0),
        Math.max(totalScrollable, 1),
      );

      const rawProgress = scrolled / Math.max(totalScrollable, 1);
      setProgress(rawProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // delay animation start
  const start = 0.25;
  const adjusted = Math.max(0, (progress - start) / (1 - start));

  // responsive animation
  const opacity = 1 - adjusted * 0.7;
  const scale = 1 - adjusted * 0.06;
  const translateY = -adjusted * 40;
  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 bg-[#f5fefd] min-h-[260vh]"
    >
      <div className="sticky -top-60 min-h-screen flex items-center px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-16 sm:py-20 overflow-hidden">
        <div
          className="max-w-5xl mx-auto w-full transition-transform duration-95 will-change-transform will-change-opacity"
          style={{
            opacity,
            transform: `translateY(${translateY}px) scale(${scale})`,
          }}
        >
          {/* Heading */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-12 mb-10 sm:mb-14 select-none">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">
              About
            </h2>
            <div className="hidden sm:block h-[2px] flex-1 bg-black/20 mt-3" />
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] xl:grid-cols-[280px_1fr] gap-8 sm:gap-10 lg:gap-14 items-start text-neutral-900">
            {/* Image */}
            <div className="w-full flex justify-center lg:justify-start">
              <div className="w-full max-w-[420px] aspect-[16/9] sm:aspect-[3/4] rounded-[24px] overflow-hidden bg-neutral-300">
                <img
                  src="/images/profile2.jpeg"
                  alt="About profile"
                  draggable={false}
                  className="w-full h-full object-cover select-none"
                />
              </div>
            </div>

            {/* Right */}
            <div className="min-w-0 select-none">
              <div className="mb-5 sm:mb-6 text-center lg:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl leading-none">
                  Harsh
                </p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-none mt-1">
                  Singh
                </h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 sm:mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-neutral-200 text-xs sm:text-sm md:text-base"
                  >
                    {tag === "India" && (
                      <svg
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#191919]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-neutral-800 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-3xl text-center lg:text-left">
                Third-year student in B.Tech CSE at Gautam Buddha University.
                Passionate about Web Development, Backend Engineering, and
                DevOps, I build scalable applications and efficient systems. I
                focus on creating intuitive, high-performance applications by
                combining clean design, robust backend logic, and modern
                deployment practices.
              </p>

              {/* Education */}
              <div className="mt-6 sm:mt-8">
                <h4 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                  My Education
                </h4>

                <div className="relative">
                  <div className="space-y-4 sm:space-y-6">
                    {education.map((item, index) => {
                      const isCurrent = index === 0;
                      const isLast = index === education.length - 1;

                      return (
                        <div
                          key={index}
                          className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-8 pl-7 sm:pl-8"
                        >
                          {!isLast && (
                            <span className="absolute left-[6px] sm:left-[7px] top-5 sm:top-6 h-[calc(100%+14px)] w-[2px] bg-black/70" />
                          )}

                          <span
                            className={`absolute left-0 top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-[3px] ${
                              isCurrent
                                ? "bg-[#f5fefd] border-green-600 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                                : "bg-black border-black"
                            }`}
                          />

                          <div className="min-w-0">
                            <h5
                              className={`text-base sm:text-xl md:text-lg font-bold uppercase leading-snug ${
                                isCurrent ? "text-green-600" : ""
                              }`}
                            >
                              {item.title}
                            </h5>

                            <p className="text-neutral-700 mt-1 text-sm sm:text-xs md:text-base leading-relaxed">
                              {item.subtitle}
                            </p>
                          </div>

                          <div className="text-neutral-600 italic text-xs sm:text-sm md:text-base md:text-right">
                            {isCurrent ? (
                              <span className="text-green-600 font-medium">
                                {item.year} • Present
                              </span>
                            ) : (
                              item.year
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
                    <a
                      href="/assets/CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-green-400 text-black rounded-lg text-base font-semibold hover:bg-green-500 transition-all duration-300"
                    >
                      View my CV
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-external-link"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* subtle fade overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-[#f5fefd]"
            style={{
              opacity: Math.max(0, progress - 0.3) * 1.4,
            }}
          />
        </div>
      </div>
    </section>
  );
}
