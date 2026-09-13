"use client";

import { useEffect, useState } from "react";
import { Projects } from "../data/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Projects;
}

const MotionImage = motion.create(Image);

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isGalleryOpen]);

  const openGallery = () => {
    setActiveImageIndex(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);

  const showPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <>
      <motion.div
        className="group premium-project-card-v2 relative overflow-hidden rounded-3xl aspect-4/5 sm:aspect-square lg:aspect-4/5"
        whileHover="hover"
        initial="initial"
        variants={{
          initial: { scale: 1, y: 0 },
          hover: { scale: 1.01, y: -8 },
        }}
        transition={{
          duration: 0.5,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        <MotionImage
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          src={project.image}
          width={1100}
          height={1100}
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.12 },
          }}
          transition={{
            duration: 0.8,
            ease: [0.33, 1, 0.68, 1],
          }}
        />

        <motion.div
          className="absolute inset-0 bg-linear-to-t from-black/95 via-black/20 to-black/40"
          variants={{
            initial: { opacity: 0.7 },
            hover: { opacity: 0.9 },
          }}
          transition={{ duration: 0.4 }}
        />

        <div className="card-content relative z-10 flex flex-col justify-between h-full p-6">
          <motion.div
            className="space-y-2"
            variants={{
              initial: { y: 0 },
              hover: { y: -2 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3
              className="px-5 py-2 rounded-2xl font-headline font-bold text-2xl 
                       bg-black/40 backdrop-blur-xl border border-white/10 
                       text-white tracking-widest uppercase drop-shadow-lg"
            >
              {project.title}
            </h3>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={{
              initial: { y: 10, opacity: 0.9 },
              hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 
                         text-[10px] font-black text-white uppercase tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={openGallery}
              className="w-full py-3 rounded-xl font-headline font-bold flex items-center justify-center gap-2 
                     bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 
                     text-[14px] text-white tracking-widest transition-all"
            >
              View Project
              <span className="material-symbols-outlined text-base">
                arrow_outward
              </span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isGalleryOpen}
        projectTitle={project.title}
        images={galleryImages}
        activeIndex={activeImageIndex}
        onClose={closeGallery}
        onPrevious={showPreviousImage}
        onNext={showNextImage}
        onSelectImage={setActiveImageIndex}
        projectLink={project.link}
      />
    </>
  );
}
