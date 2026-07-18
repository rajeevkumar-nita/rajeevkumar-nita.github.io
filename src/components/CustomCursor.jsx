import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor
 * An additive glowing ring + dot that trails the native pointer.
 * - Renders only on devices with a fine pointer (mouse/trackpad).
 * - Respects `prefers-reduced-motion`.
 * - Grows and highlights when hovering interactive elements.
 * The native cursor is intentionally left visible so text inputs remain usable.
 */
const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useSpring(cursorX, { stiffness: 300, damping: 28, mass: 0.5 });
  const ringY = useSpring(cursorY, { stiffness: 300, damping: 28, mass: 0.5 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    setEnabled(true);

    const moveHandler = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, label, .cursor-pointer'
      );
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block rounded-full border border-sky-400/70 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 48 : 30,
          height: hovering ? 48 : 30,
          backgroundColor: hovering ? "rgba(56,189,248,0.15)" : "rgba(56,189,248,0)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
      {/* Center dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block h-1.5 w-1.5 rounded-full bg-violet-500 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;
