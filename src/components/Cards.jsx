import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";

const cardData = [
  {
    id: "full",
    bg: "bg-[#004D43]",
    logo: "https://ochi.design/wp-content/uploads/2022/04/logo001.svg",
    alt: "Ochi Design logo variant 1",
    layout: "full",
  },
  {
    id: "half-1",
    bg: "bg-[#192826]",
    logo: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg",
    alt: "Ochi Design logo variant 2",
    layout: "half",
  },
  {
    id: "half-2",
    bg: "bg-[#192826]",
    logo: "https://ochi.design/wp-content/uploads/2022/04/logo003.png",
    alt: "Ochi Design logo variant 3",
    layout: "half",
  },
];

function Card({ bg, logo, alt, delay = 0 }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`card relative flex items-center justify-center h-52 sm:h-64 md:h-[50vh] ${bg} rounded-xl shadow-lg border border-white/5 cursor-pointer will-change-transform`}
    >
      <motion.img
        className="w-20 sm:w-24 md:w-32 object-contain drop-shadow-md"
        src={logo}
        alt={alt}
        loading="lazy"
      />
      <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 md:left-10 md:bottom-10 px-3 sm:px-4 md:px-5 py-1 border-2 border-zinc-400 rounded-full text-xs sm:text-sm text-zinc-300">
        &copy; 2019–2024
      </div>
    </motion.div>
  );
}

export default function Cards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="w-full bg-zinc-900 py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-32"
      aria-label="Partner logos"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row items-stretch gap-4 sm:gap-5"
      >
        {/* Left — full card */}
        <div className="w-full md:w-1/2">
          <Card bg={cardData[0].bg} logo={cardData[0].logo} alt={cardData[0].alt} />
        </div>

        {/* Right — two half cards */}
        <div className="w-full md:w-1/2 flex gap-4 sm:gap-5">
          {cardData.slice(1).map((card) => (
            <div key={card.id} className="w-1/2">
              <Card bg={card.bg} logo={card.logo} alt={card.alt} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
