"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
}

interface Meteor {
  id: number;
  x: number;
  delay: number;
  duration: number;
}

export function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    // Generate static twinkling stars
    const generatedStars: Star[] = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleDelay: Math.random() * 5,
    }));
    setStars(generatedStars);

    // Generate meteors
    const generatedMeteors: Meteor[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8 + i * 2,
      duration: Math.random() * 1.5 + 1,
    }));
    setMeteors(generatedMeteors);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.twinkleDelay}s`,
          }}
        />
      ))}

      {/* Meteors / Shooting stars */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute animate-meteor"
          style={{
            left: `${meteor.x}%`,
            top: "-10%",
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        >
          <div className="relative">
            {/* Meteor head */}
            <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.8)]" />
            {/* Meteor tail */}
            <div
              className="absolute top-0 left-0 w-0.5 bg-gradient-to-b from-white via-white/50 to-transparent"
              style={{
                height: "80px",
                transform: "rotate(45deg) translateX(-50%)",
                transformOrigin: "top left",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
