import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * MagneticButton
 * Wraps its children and gently pulls them toward the cursor while hovered,
 * creating a tactile "magnetic" interaction. Falls back to a plain wrapper
 * on touch / reduced-motion devices via CSS media queries on the spring.
 *
 * Props:
 * - as: element/component to render as the outer node (default "div")
 * - strength: how far (px) the content shifts toward the pointer (default 24)
 * - className: forwarded to the outer element
 * - ...rest: forwarded to the outer element (href, onClick, etc.)
 */
const MagneticButton = ({
  children,
  as: Component = "div",
  strength = 24,
  className = "",
  ...rest
}) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const MotionTag = motion(Component);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setPos({
      x: (relX / rect.width) * strength,
      y: (relY / rect.height) * strength,
    });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <MotionTag
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default MagneticButton;
