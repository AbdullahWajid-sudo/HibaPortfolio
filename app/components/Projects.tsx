"use client";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = projects.slice(0, 3);
  const remainingProjects = projects.slice(3);

  return (
    <main>
      <section
        className="py-32 bg-[#34171e] relative overflow-hidden"
        id="projects"
      >
        <div className="absolute inset-0 grid-bg opacity-15"></div>
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="mb-24 text-center space-y-4">
            <label className="text-tertiary font-label text-xs uppercase tracking-[0.3em] font-semibold mb-2  ">
              Featured Archives
            </label>
            <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter">
              Selected Projects.
            </h2>
          </div>
          {/* <div className="glass-card bg-black/40 backdrop-blur-md"></div> */}
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {initialProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card-wrapper"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
            <AnimatePresence>
              {showAll &&
                remainingProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className="mt-32 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-12 py-4 font-headline font-bold text-primary transition-all overflow-hidden border border-primary/20 rounded-full hover:border-primary"
            >
              <span className="relative z-10">
                {showAll ? "Show Less" : "Explore Full Archive"}
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300">
                {showAll ? "Show Less" : "Explore Full Archive"}
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
