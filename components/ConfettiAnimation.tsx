// components/ui/ConfettiAnimation.tsx
"use client";

import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

export default function ConfettiAnimation({ isActive }: { isActive: boolean }) {
  const options = {
    loop: isActive,
    autoplay: isActive,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="absolute -bottom-5 right-0">
      <Lottie options={options} height={200} width={400} />
    </div>
  );
}
