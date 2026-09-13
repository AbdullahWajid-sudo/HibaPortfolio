"use client";

import { useEffect, useState } from "react";
import { useCertModal } from "./CertModalContext";
import Image from "next/image";

const sections = [
  "home",
  "about",
  "experience",
  "skills",
  "projects",
  "contact",
];
export default function Navbar() {
  const [active, setActive] = useState("home");
  const { isOpen: isCertModalOpen } = useCertModal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-neutral-950/40 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-transform duration-300 ${isCertModalOpen ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl flex flex-row font-bold tracking-tighter text-tertiary font-headline">
          <Image src="/Logo.png" alt="alt" width={60} height={60} />
          <h2 className="ml-2 mt-4">Hiba Wajid</h2>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() =>
                document
                  .getElementById(sec)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`transition ${
                active === sec
                  ? "text-tertiary border-b-2 border-tertiary pb-1 font-headline tracking-tight"
                  : "text-black hover:text-tertiary transition-colors font-headline tracking-tight"
              }`}
            >
              {sec.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-8">
          <div className="flex flex-wrap gap-4 ">
            <a
              className="bg-surface text-black px-4 py-2 rounded-lg font-semibold  flex items-center gap-2 shadow-[0_0_30px_rgba(173,198,255,0.3)] hover:scale-105 transition-transform"
              href="/resume.pdf"
              download="Hiba Resume.pdf"
            >
              My Resume
              <span className="material-symbols-outlined text-sm">
                download
              </span>
            </a>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-black text-surface px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-[0_0_30px_rgba(173,198,255,0.3)] hover:scale-105 transition-transform"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}
