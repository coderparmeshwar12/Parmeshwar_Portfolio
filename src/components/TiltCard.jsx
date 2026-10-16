import React, { useRef, useState } from "react";

/**
 * TiltCard - Adds smooth 3D tilt perspective and subtle glare effect on mouse hover.
 * Gracefully degrades to standard card on mobile or reduced-motion devices.
 */
export const TiltCard = ({
  children,
  className = "",
  style = {},
  maxTilt = 8,
  glare = true,
  onClick
}) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`
    );

    if (glare) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      setGlareStyle({
        opacity: 0.25,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 143, 171, 0.4) 0%, rgba(196, 181, 253, 0.15) 35%, transparent 70%)`
      });
    }
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        ...style,
        transform: transformStyle || "none",
        transition: "transform 0.18s cubic-bezier(0.2, 0, 0.2, 1)",
        position: "relative",
        transformStyle: "preserve-3d",
        willChange: "transform"
      }}
    >
      {children}
      {glare && (
        <div
          className="tilt-glare-overlay"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            transition: "opacity 0.25s ease",
            zIndex: 3,
            ...glareStyle
          }}
        />
      )}
    </div>
  );
};
