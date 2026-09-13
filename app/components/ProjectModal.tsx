"use client";

import Image from "next/image";
import { createPortal } from "react-dom";

interface ProjectModalProps {
  isOpen: boolean;
  projectTitle: string;
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSelectImage: (index: number) => void;
  projectLink?: string;
}

export default function ProjectModal({
  isOpen,
  projectTitle,
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
  onSelectImage,
  projectLink,
}: ProjectModalProps) {
  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative z-10 w-full max-w-5xl glass-card border border-white/10 rounded-3xl shadow-2xl p-4 sm:p-5 animate-fade-in"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/5 transition-colors"
          aria-label="Close project modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-on-surface-variant"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-5 pr-14">
          <h2 className="text-3xl md:text-4xl font-headline font-bold tracking-tight mb-2 text-white">
            {projectTitle}
          </h2>
          <p className="text-on-surface-variant text-lg">Project showcase</p>
        </div>

        <div className="relative flex items-center justify-center gap-3">
          {images.length > 1 && (
            <button
              type="button"
              onClick={onPrevious}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-3xl text-white transition hover:bg-white/10"
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <div className="relative h-[60vh] max-height:520px w-full sm:h-[60vh]">
              <Image
                src={images[activeIndex]}
                alt={`${projectTitle} portfolio image ${activeIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={onNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-3xl text-white transition hover:bg-white/10"
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>

        {images.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onSelectImage(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/30"
                }`}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {projectLink && (
          <div className="mt-4 flex justify-center">
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-primary text-on-primary-fixed px-8 py-3 font-headline font-bold text-base hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Visit Project
            </a>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
