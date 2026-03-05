import React, { useEffect, useState, useRef } from "react";

export default function Eyes() {
  const [rotate, setRotate] = useState(0);
  const isMobile = useRef(false);

  useEffect(() => {
    // Detect touch device — disable mousemove on mobile
    isMobile.current = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile.current) return;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - window.innerWidth / 2;
      const deltaY = e.clientY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')",
        }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        <div
          className="absolute flex gap-4 sm:gap-6 md:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-label="Decorative animated eyes"
          role="img"
        >
          {[0, 1].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-full bg-zinc-100"
              style={{
                width: "clamp(80px, 15vw, 220px)",
                height: "clamp(80px, 15vw, 220px)",
              }}
            >
              <div
                className="w-2/3 relative rounded-full h-2/3 bg-zinc-900"
              >
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 w-full flex items-center"
                >
                  <div
                    className="rounded-full bg-zinc-100"
                    style={{
                      width: "clamp(20px, 2.5vw, 44px)",
                      height: "clamp(20px, 2.5vw, 44px)",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
