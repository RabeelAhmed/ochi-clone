import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";

const projects = [
  {
    name: "FYDE",
    label: "right-0 translate-x-1/2",
    src: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    alt: "Fyde crypto illustration — Featured project",
  },
  {
    name: "VISE",
    label: "right-full translate-x-1/2",
    src: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
    alt: "Vise product front — Featured project",
  },
];

function ProjectCard({ project, index }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 } });
    }
  }, [isInView, controls, index]);

  const letterControls = useAnimation();

  const handleHover = () => letterControls.start({ y: "0%", transition: { ease: [0.22, 1, 0.36, 1], duration: 0.4 } });
  const handleHoverEnd = () => letterControls.start({ y: "100%", transition: { ease: [0.22, 1, 0.36, 1], duration: 0.4 } });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      className="cardcontainer relative w-full md:w-1/2 cursor-pointer group"
      style={{ height: "clamp(220px, 55vw, 75vh)" }}
    >
      {/* Floating project name letters */}
      <h2
        className={`absolute flex ${project.label} top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter overflow-hidden pointer-events-none`}
        style={{ fontSize: "clamp(2.5rem, 5vw, 6rem)" }}
        aria-label={project.name}
      >
        {project.name.split("").map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: "100%" }}
            animate={letterControls}
            transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </h2>

      <div className="card w-full h-full rounded-xl overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover"
          src={project.src}
          alt={project.alt}
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

export default function Featured() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section className="w-full py-10 sm:py-14" aria-label="Featured Projects">
      <div
        ref={headerRef}
        className="w-full px-4 sm:px-8 md:px-12 lg:px-20 border-b border-zinc-700 pb-8 sm:pb-12 md:pb-20"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-semibold tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Featured Projects
        </motion.h2>
      </div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="cards w-full flex flex-col md:flex-row gap-6 md:gap-10 mt-8 md:mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
