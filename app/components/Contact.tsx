"use client";

import React, { useState } from "react";
import Image from "next/image";
import ContactModal from "./ContactModal";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main>
      <section className="py-32 relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="glass-card border border-white/10 p-12 md:p-24 rounded-3xl text-center space-y-10">
            <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-none">
              LETS BUILD <br /> SOMETHING{" "}
              <span className="text-tertiary">TOGETHER</span>
            </h2>
            <p className="text-white text-xl max-w-2xl mx-auto font-light">
              Currently seeking new opportunities and architectural challenges.
              Lets discuss your next digital evolution.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <button
                className="w-full md:w-auto bg-primary text-on-primary-fixed px-12 py-5 rounded-xl font-headline font-bold text-lg hover:scale-105 transition-transform text-center"
                onClick={openModal}
              >
                Start a Conversation
              </button>
              <div className="flex gap-4">
                <a
                  className="w-17 h-17 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                  href="https://wa.me/+923330009490"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <Image
                      src="/icons/icons8-whatsapp-50.png"
                      alt="WhatsApp"
                      width={50}
                      height={50}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
