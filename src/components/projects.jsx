import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    name: "Harshuh",
    url: "https://harshuh.vercel.app",
    tags: ["Portfolio"],
  },
  {
    id: 2,
    name: "Arc Shield",
    url: "https://harshuh.vercel.app",
    tags: ["Extension"],
  },
  {
    id: 3,
    name: "Aulmin Portal",
    url: "https://alumni.gbu.ac.in",
    tags: ["CMS", "Backend"],
  },
  {
    id: 4,
    name: "Attendance Portal",
    url: "https://ams-gbu.vercel.app",
    tags: ["CMS", "Backend"],
  },
  {
    id: 5,
    name: "HEHEH",
    url: "https://www.omfgdogs.com",
    tags: ["Fun"],
  },
  {
    id: 6,
    name: "HEHEH",
    url: "https://www.ihasabucket.com",
    tags: ["Fun"],
  },
];

export default function Projects() {
  const [cursorVisible, setCursorVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let frameId;

    const animate = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.14;
      current.current.y += (mouse.current.y - current.current.y) * 0.14;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.current.x - 32}px, ${current.current.y - 32}px, 0)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const hideCursor = () => {
      setCursorVisible(false);
      setActiveCard(null);

      document.querySelectorAll("[data-project-card]").forEach((card) => {
        card.style.transform =
          "rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)";
      });
    };

    window.addEventListener("scroll", hideCursor, { passive: true });
    window.addEventListener("wheel", hideCursor, { passive: true });
    window.addEventListener("touchmove", hideCursor, { passive: true });

    return () => {
      window.removeEventListener("scroll", hideCursor);
      window.removeEventListener("wheel", hideCursor);
      window.removeEventListener("touchmove", hideCursor);
    };
  }, []);

  const handleMouseMove = (e, id) => {
    if (window.innerWidth < 768) return;

    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    const rotateY = (x / card.width - 0.5) * 8;
    const rotateX = -(y / card.height - 0.5) * 8;

    e.currentTarget.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
      translateY(-4px)
    `;

    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;

    setCursorVisible(true);
    setActiveCard(id);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)";
    setCursorVisible(false);
    setActiveCard(null);
  };

  return (
    <section
      id="projects"
      className="relative bg-[#f5fefd] text-neutral-800 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-16 select-none"
      draggable={false}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight">
            Projects
          </h2>

          <div className="hidden sm:block h-[2px] flex-1 bg-black/10 translate-y-3" />

          <p className="text-sm sm:text-base text-green-400 max-w-md translate-y-3">
            Tap or Hover to Explore Projects.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 [perspective:1400px]">
          {projects.map((project) => (
            <a
              key={project.id}
              data-project-card
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={handleMouseLeave}
              className="group relative block aspect-[4/3] overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] bg-[#f5fefd] cursor-pointer md:cursor-none transition duration-200 ease-out will-change-transform active:scale-[0.97] active:brightness-95 md:active:scale-100 md:active:brightness-100"
              style={{ transformStyle: "preserve-3d" }}
              draggable={false}
            >
              <div className="absolute inset-0 overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] bg-neutral-100">
                <iframe
                  src={project.url}
                  title={project.name}
                  loading="lazy"
                  className="pointer-events-none origin-top-left w-[200%] h-[200%] scale-[0.5] border-0"
                />
              </div>

              <div className="absolute inset-0 bg-black/20 opacity-70 transition duration-500 md:group-hover:opacity-80" />

              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 md:p-6">
                <div className="translate-y-0 opacity-100 md:translate-y-5 md:opacity-0 transition-all duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  <h3 className="text-white text-sm sm:text-lg md:text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-1 sm:gap-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full  border-green bg-green-300 px-2 py-1 text-[9px] sm:text-xs text-neutral-800 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* <div className="mt-10 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 cursor-pointer rounded-full border border-green-400 text-neutral-800 hover:bg-green-400 hover:text-black transition text-sm sm:text-base">
            View More
          </button>
        </div> */}
      </div>

      <div
        ref={cursorRef}
        className={`pointer-events-none fixed left-0 top-0 z-[999] hidden md:flex items-center justify-center transition-opacity duration-200 ${
          cursorVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="h-14 w-14 rounded-full border border-green-400/30 bg-[#f5fefd]/80 backdrop-blur-xl flex items-center justify-center">
          <span className="text-[11px] font-medium text-green-400">View</span>
        </div>
      </div>
    </section>
  );
}
