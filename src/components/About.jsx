import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.8 } },
  };

  return (
    <div
      ref={ref}
      className="w-full p-6 sm:p-10 md:p-16 lg:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="leading-tight tracking-tight p-3 sm:p-6 md:p-10"
        style={{ fontSize: "clamp(1.4rem, 4vw, 4.5rem)" }}
      >
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </motion.h1>

      <motion.div
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full flex flex-col md:flex-row gap-5 pt-8 sm:pt-10 border-t border-[#a1b562] mt-6 sm:mt-10"
      >
        {/* Left column */}
        <motion.div variants={fadeUp} className="w-full md:w-1/2">
          <h2
            className="font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.75rem)" }}
          >
            Our approach:
          </h2>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group uppercase flex items-center gap-6 sm:gap-10 px-8 sm:px-12 py-4 sm:py-5 mt-8 sm:mt-10 bg-zinc-900 rounded-full text-white text-sm sm:text-base font-medium tracking-wide hover:bg-zinc-800 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
            aria-label="Read more about our approach"
          >
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full group-hover:scale-125 transition-transform duration-200" />
          </motion.button>
        </motion.div>

        {/* Right column — decorative image area */}
        <motion.div
          variants={fadeUp}
          className="w-full md:w-1/2 h-48 sm:h-72 md:h-[70vh] bg-[#b0c859] rounded-3xl overflow-hidden flex items-center justify-center p-0 m-0"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            src="/hulk.jpg"
            alt="Hulk"
            loading="lazy"
            className="w-full h-full object-cover origin-center filter hover:brightness-110 will-change-transform rounded-3xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
