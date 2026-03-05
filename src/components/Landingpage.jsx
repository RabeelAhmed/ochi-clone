import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Landingpage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const headings = ["we create", "eye opening", "presentations"];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.76, 0, 0.24, 1], duration: 1 },
    },
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full min-h-screen bg-zinc-900 pt-1"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="textstructure mt-28 sm:mt-36 md:mt-44 lg:mt-52 px-4 sm:px-8 md:px-12 lg:px-20"
      >
        {headings.map((item, index) => (
          <div key={index} className="masker overflow-hidden">
            <div className="w-fit flex items-center">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "clamp(60px, 9vw, 140px)" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.3 }}
                  className="rounded-md mr-2 sm:mr-3"
                  style={{
                    height: "clamp(36px, 5.7vw, 90px)",
                    position: "relative",
                    top: "clamp(2px, 1vw, 14px)",
                    backgroundImage:
                      "url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )}
              <motion.h1
                variants={lineVariants}
                className="uppercase leading-[0.9] tracking-tighter font-semibold"
                style={{ fontSize: "clamp(2.5rem, 7.5vw, 8.5rem)" }}
              >
                {item}
              </motion.h1>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="border-t border-zinc-800 mt-10 sm:mt-16 md:mt-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-5 px-4 sm:px-8 md:px-12 lg:px-20"
      >
        {[
          "For Public and Private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-sm sm:text-base font-light tracking-tight leading-none text-zinc-300"
          >
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-2 mt-2 sm:mt-0">
          <button
            className="px-5 py-2.5 border border-zinc-400 rounded-full font-light text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-zinc-900 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Start a project with Ochi"
          >
            start the project
          </button>
          <div
            aria-hidden="true"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-zinc-500"
          >
            <span className="rotate-45 text-sm">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
