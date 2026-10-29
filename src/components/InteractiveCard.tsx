"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number; // Maximum rotation in degrees (3-5 deg)
}

export function InteractiveCard({
  children,
  className = "",
  style = {},
  maxTilt = 4,
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [translateY, setTranslateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightPos, setLightPos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isInteractive, setIsInteractive] = useState(true);

  // Disable tilt & custom cursor effects on touch devices or if prefers-reduced-motion is active
  useEffect(() => {
    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (hasTouch || prefersReducedMotion) {
      setIsInteractive(false);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isInteractive || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Normalized coordinates from -1 to 1
      const normX = (x - centerX) / centerX;
      const normY = (y - centerY) / centerY;

      // Subtle 3D tilt:
      // cursor top (normY < 0) -> tilt back (rotateX > 0)
      // cursor bottom (normY > 0) -> tilt forward (rotateX < 0)
      // cursor left (normX < 0) -> tilt left (rotateY < 0)
      // cursor right (normX > 0) -> tilt right (rotateY > 0)
      const clampedTilt = Math.min(Math.max(maxTilt, 3), 5);
      const rotX = -normY * clampedTilt;
      const rotY = normX * clampedTilt;

      setTilt({ x: rotX, y: rotY });
      setLightPos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 1,
      });
    },
    [isInteractive, maxTilt]
  );

  const handleMouseEnter = useCallback(() => {
    if (!isInteractive) return;
    setIsHovered(true);
    setTranslateY(-5);
  }, [isInteractive]);

  const handleMouseLeave = useCallback(() => {
    if (!isInteractive) return;
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setTranslateY(0);
    setLightPos((prev) => ({ ...prev, opacity: 0 }));
  }, [isInteractive]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        transform: isInteractive
          ? `perspective(1000px) translateY(${translateY}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : undefined,
        transformStyle: "preserve-3d",
        transition: isHovered
          ? "transform 0.1s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.25s ease, border-color 0.25s ease"
          : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease, border-color 0.4s ease",
        willChange: isHovered ? "transform" : "auto",
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 233, 240, 0.42) 50%, rgba(240, 243, 246, 0.52) 100%)",
        backdropFilter: "blur(14px) saturate(118%)",
        WebkitBackdropFilter: "blur(14px) saturate(118%)",
        boxShadow: isHovered
          ? "0 20px 48px -10px rgba(15, 23, 42, 0.14), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.95), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.25)"
          : "0 8px 28px -4px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04), inset 0 1.5px 0px 0px rgba(255, 255, 255, 0.90), inset 0 -1px 0px 0px rgba(180, 190, 205, 0.20)",
        ...style,
      }}
    >
      {/* Soft floating ground shadow beneath card */}
      {isInteractive && (
        <div
          className="absolute inset-x-4 -bottom-3 h-8 pointer-events-none rounded-full transition-opacity duration-300"
          style={{
            background: "radial-gradient(ellipse at center, rgba(15, 23, 42, 0.16) 0%, transparent 75%)",
            filter: "blur(12px)",
            opacity: isHovered ? 1 : 0,
            zIndex: 0,
          }}
        />
      )}

      {/* Cursor Light Effect: Soft glass-sheen highlight following mouse */}
      {isInteractive && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-200 z-10"
          style={{
            opacity: isHovered ? lightPos.opacity : 0,
            background: `radial-gradient(circle 320px at ${lightPos.x}% ${lightPos.y}%, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.12) 40%, transparent 75%)`,
          }}
        />
      )}

      {/* Subtle top rim light */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] rounded-t-[inherit] z-10"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.85) 20%, rgba(255,255,255,0.85) 80%, rgba(255,255,255,0.2) 100%)",
        }}
      />

      {/* Card Content with subtle 3D lift */}
      <div
        className="relative z-10 w-full h-full flex flex-col justify-between"
        style={{
          transform: isInteractive && isHovered ? "translateZ(6px)" : "translateZ(0px)",
          transformStyle: "preserve-3d",
          transition: "transform 0.25s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}
