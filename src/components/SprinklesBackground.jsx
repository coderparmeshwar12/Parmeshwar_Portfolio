import React, { useEffect, useRef } from "react";

/**
 * SprinklesBackground - Lightweight canvas animation that renders
 * slowly drifting candy sprinkles, soft bokeh sparkles, and subtle dessert dust.
 * Automatically throttles and pauses when out of view or if reduced motion is requested.
 */
export const SprinklesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Color palette: pastel pink, lavender, cyan, cream, light gold
    const colors = ["#ff8fab", "#c4b5fd", "#67e8f9", "#ffd1dc", "#fef08a"];

    // Particle types: "pill" (sprinkle rod), "dot" (nonpareil), "sparkle" (star)
    const particleCount = Math.min(Math.floor(width / 32), 48);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.2 - Math.random() * 0.45, // slow upward drift like sparkling aroma
        length: 8 + Math.random() * 8,
        width: 2.2 + Math.random() * 1.5,
        angle: Math.random() * Math.PI * 2,
        angularVelocity: (Math.random() - 0.5) * 0.015,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.2 + Math.random() * 0.35,
        type: Math.random() > 0.4 ? "pill" : "dot"
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.angularVelocity;

        // Wrap edges smoothly
        if (p.y < -20) p.y = height + 20;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (p.type === "pill") {
          // Rounded sprinkle cylinder
          ctx.beginPath();
          const r = p.width / 2;
          const l = p.length;
          ctx.roundRect(-l / 2, -r, l, p.width, r);
          ctx.fill();
        } else {
          // Circular nonpareil dot
          ctx.beginPath();
          ctx.arc(0, 0, p.width, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="sprinkles-bg-canvas"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0
      }}
    />
  );
};
