"use client";

import { useEffect, useState, useRef } from "react";
import AnimatedNumber from "./AnimatedNumber";

interface AnimatedCircleWithNumberProps {
  targetProgress: number;
  duration?: number;
}

export function AnimatedCircleWithNumber({
  targetProgress,
  duration = 2000,
}: AnimatedCircleWithNumberProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setIsVisible(true);
          setHasStarted(true);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = targetProgress / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetProgress) {
        setProgress(targetProgress);
        clearInterval(timer);
      } else {
        setProgress(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, targetProgress, duration]);

  const fullDashArray = 322.5;
  const fullDashOffset = 30;
  const currentOffset =
    fullDashArray - (progress / 100) * (fullDashArray - fullDashOffset);

  return (
    <div
      ref={elementRef}
      className="relative w-32 h-32 flex items-center justify-center"
    >
      <svg
        className="w-full h-full -rotate-90 transform scale-110"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="transparent"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="4"
        />
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="#bf0a30"
          strokeWidth="4"
          strokeDasharray={fullDashArray}
          strokeDashoffset={currentOffset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-headline font-bold text-white tracking-tighter">
          {progress.toFixed(1)}
        </span>
        <span className="text-[10px] font-label uppercase tracking-widest text-primary font-bold">
          PERFORMANCE
        </span>
      </div>
    </div>
  );
}
