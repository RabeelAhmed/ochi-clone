import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const socialLinks = ["Facebook", "Instagram", "Twitter", "LinkedIn"];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.7 } },
  };

  return (
    <footer
      ref={ref}
      className="w-full bg-zinc-900 p-6 sm:p-10 md:p-16 lg:p-20 border-t border-zinc-800"
      aria-label="Site footer"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row items-start gap-8 md:gap-12 min-h-[40vh]"
      >
        {/* Left column */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 min-w-0 overflow-hidden flex flex-col justify-between gap-8"
        >
          {/* Footer heading */}
          <div>
            {["Eye-", "Opening", "Presentations"].map((word, i) => (
              <h2
                key={i}
                className="uppercase font-semibold leading-none"
                style={{ fontSize: "clamp(2rem, 6vw, 6.5rem)", marginBottom: "-0.05em" }}
              >
                {word}
              </h2>
            ))}
          </div>

          {/* Logo */}
          <div>
            <svg
              width="60"
              height="25"
              viewBox="0 0 72 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-[72px] sm:h-[30px] opacity-70"
              aria-label="Ochi logo"
            >
              <path
                d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
                fill="currentColor"
              />
              <path d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z" fill="currentColor" />
              <path d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z" fill="currentColor" />
              <path
                d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
                fill="currentColor"
              />
              <path
                d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-xs text-zinc-500 mt-3">
              &copy; {new Date().getFullYear()} Ochi Design. All rights reserved.
            </p>
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 min-w-0 overflow-hidden flex flex-col justify-between gap-8"
        >
          {/* Tagline */}
          <div>
            <h3
              className="uppercase font-semibold leading-none text-zinc-100"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5.5rem)" }}
            >
              Presentations
            </h3>
            <p className="text-zinc-400 mt-3 text-sm sm:text-base font-light max-w-sm">
              Strategic presentations for forward-thinking businesses.
            </p>
          </div>

          {/* Social links */}
          <nav aria-label="Social media links">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">Follow us</p>
            <div className="flex flex-col gap-1">
              {socialLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="group relative inline-flex items-center text-lg sm:text-xl font-light text-zinc-300 hover:text-white transition-colors duration-200 w-fit"
                  aria-label={`Ochi on ${link}`}
                >
                  {link}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </nav>
        </motion.div>
      </motion.div>
    </footer>
  );
}
