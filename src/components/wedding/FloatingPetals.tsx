"use client";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  color: string;
  shape: string;
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const colors = [
      "radial-gradient(ellipse, #f9c2c2, #e8a0a0)",
      "radial-gradient(ellipse, #fde8d8, #f4c5a8)",
      "radial-gradient(ellipse, #f0e6ff, #d9c5f5)",
      "radial-gradient(ellipse, #fff0f5, #ffd6e7)",
    ];
    const shapes = [
      "50% 10% 50% 10%",
      "60% 0% 60% 0%",
      "50% 50% 0% 50%",
      "30% 70% 70% 30%",
    ];

    const newPetals: Petal[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${8 + Math.random() * 8}s`,
      animationDelay: `${Math.random() * 10}s`,
      size: `${8 + Math.random() * 10}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));

    setPetals(newPetals);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: petal.left,
            top: "-20px",
            width: petal.size,
            height: petal.size,
            background: petal.color,
            borderRadius: petal.shape,
            animation: `floatPetal ${petal.animationDuration} linear ${petal.animationDelay} infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
