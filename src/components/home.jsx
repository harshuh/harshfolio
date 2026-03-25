import { useState, useEffect } from "react";

export default function Home() {
  const images = ["/images/profile1.webp", "/images/profile2.webp"];
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map(
            (src) =>
              new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
              }),
          ),
        );

        if (isMounted) {
          setImagesLoaded(true);
        }
      } catch (error) {
        console.error("Image preload failed:", error);
        if (isMounted) {
          setImagesLoaded(true);
        }
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [imagesLoaded, images.length]);

  return (
    <div className="min-h-screen bg-[#f5fefd] text-neutral-800 overflow-hidden">
      <main className="pt-32 sm:pt-37 md:pt-46 pb-12 sm:pb-16 px-5 sm:px-8 md:px-12 lg:px-60">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* LEFT SIDE */}
          <div className="max-w-xl text-center md:text-left select-none">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              I am a <span className="text-green-400">Backend;</span>
              <br />
              Developer.
            </h1>

            <p className="mt-3 text-neutral-900 text-base sm:text-lg lg:text-xl leading-relaxed select-none">
              I specialize in building fast, reliable, and user-friendly
              full-stack web applications. I help small businesses and startups
              turn ideas into high-quality websites and products that actually
              work and scale.
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition text-sm sm:text-base"
              >
                Browse Projects
              </button>
            </div>

            <div className="flex justify-center md:justify-start gap-4 sm:gap-5 mt-6 text-3xl sm:text-3xl text-neutral-400 select-none">
              {[
                {
                  icon: "ri-instagram-line",
                  link: "https://instagram.com/harshexist",
                },
                {
                  icon: "ri-linkedin-box-fill",
                  link: "https://www.linkedin.com/in/harshuh/",
                },
                {
                  icon: "ri-github-fill",
                  link: "https://github.com/harshuh",
                },
                {
                  icon: "ri-mail-line",
                  link: "mailto:harshh1124@email.com",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  draggable={false}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <i
                    className={`
                      ${item.icon}
                      cursor-pointer
                      transition-all duration-300
                      group-hover:text-gray-800
                      group-hover:-translate-y-2
                      group-hover:scale-110
                      animate-float
                    `}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center md:-translate-x-6 lg:-translate-x-10">
            <div
              className="
                relative overflow-hidden rounded-full border-2 border-neutral-800
                shadow-[0_0_40px_rgba(34,197,94,0.2)]
                w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80
                select-none
              "
            >
              {!imagesLoaded && (
                <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
              )}

              {images.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`profile ${index + 1}`}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className={`absolute inset-0 w-full h-full object-cover object-right transition-opacity duration-1000 ease-in-out ${
                    currentImage === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* LOGO TICKER */}
        <div className="pt-20 md:pt-24 bg-[#f5fefd]">
          <div className="container mx-auto">
            <div className="overflow-hidden grayscale mask-[linear-gradient(to_right,transparent,black,transparent)]">
              <div className="flex w-max animate-scroll">
                <div className="flex gap-14 pr-14">
                  <img
                    src="logos/nodejsDark.svg"
                    className="logo-ticker-image"
                  />
                  <img src="logos/express.svg" className="logo-ticker-image" />
                  <img src="logos/ts.svg" className="logo-ticker-image" />
                  <img src="logos/postman.svg" className="logo-ticker-image" />
                  <img src="logos/mongoDb.svg" className="logo-ticker-image" />
                  <img src="logos/redis.svg" className="logo-ticker-image" />
                  <img src="logos/docker.svg" className="logo-ticker-image" />
                  <img src="logos/Go.png" className="logo-ticker-image" />
                  <img src="logos/stripe.webp" className="logo-ticker-image" />
                  <img src="logos/github.png" className="logo-ticker-image" />
                </div>

                <div className="flex gap-14 pr-14">
                  <img
                    src="logos/nodejsDark.svg"
                    className="logo-ticker-image"
                  />
                  <img src="logos/express.svg" className="logo-ticker-image" />
                  <img src="logos/ts.svg" className="logo-ticker-image" />
                  <img src="logos/postman.svg" className="logo-ticker-image" />
                  <img src="logos/mongoDb.svg" className="logo-ticker-image" />
                  <img src="logos/redis.svg" className="logo-ticker-image" />
                  <img src="logos/docker.svg" className="logo-ticker-image" />
                  <img src="logos/Go.png" className="logo-ticker-image" />
                  <img src="logos/stripe.webp" className="logo-ticker-image" />
                  <img src="logos/github.png" className="logo-ticker-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
