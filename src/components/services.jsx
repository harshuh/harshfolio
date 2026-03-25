const services = [
  {
    no: "01",
    title: "Backend Development",
    description:
      "I build scalable APIs, authentication flows, databases, and server-side systems designed for performance and reliability.",
    points: [
      "Node.js, Express.js",
      "REST APIs, JWT, MongoDB",
      "Docker, Git, Postman",
    ],
  },
  {
    no: "02",
    title: "Web Development",
    description:
      "I create modern, responsive web applications with clean UI, smooth UX, and maintainable code across devices.",
    points: [
      "React, TailwindCSS",
      "Responsive UI",
      "Performance-focused frontend",
    ],
  },
  {
    no: "03",
    title: "DevOps & Deployment",
    description:
      "I work on deployment workflows, containerization, and system setup to keep apps stable, secure, and production-ready.",
    points: ["Docker", "CI/CD basics", "Server deployment & monitoring"],
  },
];

export default function Services() {
  return (
    <section
      id="skills"
      className="relative z-20 -mt-[100vh] min-h-[20vh] md:min-h-[220vh] select-none"
      draggable={false}
    >
      <div className="sticky top-0 min-h-screen flex items-end">
        <div
          className="
            w-full
            rounded-t-[28px] sm:rounded-t-[36px] md:rounded-t-[40px]
            bg-[#f5fefd] text-gray-900
            px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24
            pt-12 sm:pt-16 md:pt-20
          "
        >
          <div className="max-w-6xl mx-auto">
            {/* heading */}
            <div className="flex flex-col gap-5 md:gap-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-none tracking-tight uppercase">
                What I Do <span className="text-green-400">^_^</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                <span className="md:col-span-2 text-gray-600 uppercase text-lg">
                  (SKILLS)
                </span>

                <p className="md:col-span-7 md:col-start-6 text-gray-900 text-base sm:text-base md:text-lg leading-relaxed max-w-2xl">
                  I specialize in building scalable backend systems, modern web
                  applications, and deployment-ready applications that are
                  reliable, maintainable, and built to grow.
                </p>
              </div>
            </div>

            {/* sticky stacked cards */}
            <div className="mt-10 sm:mt-12 md:mt-14 flex flex-col">
              {services.map((service, index) => (
                <div
                  key={service.no}
                  className={`
                    sticky border-t border-black/15 bg-[#f5fefd]
                    ${
                      index === 0
                        ? "top-[12vh] sm:top-[16vh] md:top-[19vh] mb-[18rem] sm:mb-[16rem] md:mb-[20rem]"
                        : ""
                    }
                    ${
                      index === 1
                        ? "top-[24vh] sm:top-[24vh] md:top-[calc(22vh+6rem)] mb-[10rem] sm:mb-[11rem] md:mb-[13rem]"
                        : ""
                    }
                    ${
                      index === 2
                        ? "top-[26vh] sm:top-[32vh] md:top-[calc(24vh+18rem)] mb-[2rem] sm:mb-[15rem] md:mb-[6rem]"
                        : ""
                    }
                  `}
                >
                  {/* top row */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start py-8 sm:py-6">
                    <span className=" text-green-300 md:col-span-2 text-[34px] sm:text-[44px] md:text-[56px] lg:text-[68px] leading-none tracking-tight font-medium text-gray-900">
                      ({service.no})
                    </span>

                    <h3 className=" md:col-span-7 md:col-start-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none font-medium tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* content row */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-28 sm:pb-20 md:pb-10 min-h-[22vh] md:min-h-[34vh]">
                    <div className="md:col-span-7 md:col-start-6 flex flex-col gap-6 sm:gap-8">
                      <p className="max-w-[40ch] text-balance text-base sm:text-base md:text-lg leading-relaxed text-gray-800">
                        {service.description}
                      </p>

                      <div className="flex flex-col divide-y divide-black/15">
                        {service.points.map((point, i) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 sm:gap-6 py-3 sm:py-2"
                          >
                            <span className="font-mono text-xs sm:text-sm leading-[200%] text-gray-500 min-w-[28px]">
                              0{i + 1}
                            </span>

                            <span className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight text-gray-900">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="h-[20vh] sm:h-[28vh] md:h-[35vh]" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
