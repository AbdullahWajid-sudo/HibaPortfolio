"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCertModal } from "../CertModalContext";

export function CertificationsCard() {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const {
    isOpen: isCertModalOpen,
    open: openCertModal,
    close: closeCertModal,
  } = useCertModal();

  useEffect(() => {
    if (isCertModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCertModalOpen]);

  const handleCertClick = (src: string) => {
    setZoomLevel(100);
    setSelectedCert(src);
    openCertModal();
  };

  const handleClose = () => {
    setSelectedCert(null);
    closeCertModal();
  };

  return (
    <>
      <div className="md:col-span-5 md:row-span-2 rounded-4xl bento-card p-8 flex flex-col justify-between overflow-hidden group relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
            <h4 className="font-headline font-bold text-lg text-white">
              Certifications
            </h4>
          </div>
          <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(0,229,75,0.6)]"></span>
            <span className="text-[10px] font-label font-bold text-on-surface uppercase tracking-wide">
              Verified
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="space-y-4">
          <div className="cert-carousel relative overflow-hidden rounded-4xl border border-white/10 bg-black/20">
            <div className="cert-carousel-track flex gap-4 px-3 py-4">
              {[
                "/certification/LCWU.jpeg",
                "/certification/MEC.jpeg",
                "/certification/Mendel.jpeg",
              ]
                .concat([
                  "/certification/LCWU.jpeg",
                  "/certification/MEC.jpeg",
                  "/certification/Mendel.jpeg",
                ])
                .map((src, idx) => (
                  <div
                    key={`${src}-${idx}`}
                    className="cert-card group shrink-0 w-36 sm:w-40 md:w-44 lg:w-48 cursor-pointer"
                    onClick={() => {
                      handleCertClick(src);
                    }}
                  >
                    <Image
                      width={400}
                      height={300}
                      src={src}
                      alt={`Certification ${(idx % 4) + 1}`}
                      className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-3xl shadow-2xl transition-transform duration-400 ease-out group-hover:scale-105"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certification Modal */}
      <AnimatePresence>
        {isCertModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md "
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-4 bg-black/50 px-4 py-2 rounded-full border border-white/10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomLevel((prev) => Math.max(50, prev - 25));
                  }}
                  className="text-white hover:text-primary transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
                  aria-label="Zoom out"
                >
                  <span className="material-symbols-outlined text-lg">
                    remove
                  </span>
                </button>
                <span className="text-white font-label text-sm w-16 text-center">
                  {zoomLevel}%
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomLevel((prev) => Math.min(300, prev + 25));
                  }}
                  className="text-white hover:text-primary transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10"
                  aria-label="Zoom in"
                >
                  <span className="material-symbols-outlined text-lg">add</span>
                </button>
              </div>

              <div className="relative overflow-auto max-w-[85vw] max-h-[65vh] md:max-w-2xl flex items-center justify-center">
                {selectedCert && (
                  <Image
                    width={500}
                    height={375}
                    src={selectedCert}
                    alt="Enlarged Certification"
                    className="object-contain rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10"
                    style={{
                      transform: `scale(${zoomLevel / 100})`,
                      transformOrigin: "center center",
                    }}
                  />
                )}
              </div>

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors flex items-center gap-2 font-label uppercase tracking-widest text-xs sm:text-sm z-50"
              >
                Close
                <span className="material-symbols-outlined">close</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
