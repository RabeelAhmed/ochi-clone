import { motion } from "framer-motion";
import React from "react";

export default function Maurquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-6 sm:py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] overflow-hidden"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap no-select">
        {[0, 1].map((i) => (
          <motion.h1
            key={i}
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
            className="uppercase font-semibold flex-shrink-0 mb-4 inline-block"
            style={{ fontSize: "clamp(3rem, 13vw, 11rem)", lineHeight: 1 }}
            aria-hidden={i === 1 ? "true" : undefined}
          >
            We are Ochi —&nbsp;
          </motion.h1>
        ))}
      </div>
    </div>
  );
}
