import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-neutral-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-4">
        <div className="text-lg font-black text-tertiary font-headline">
          <Image
            src="/Logo.png"
            alt="alt"
            width={90}
            height={90}
            className="ml-5 "
          />
          Hiba Wajid
        </div>
        <div className="text-neutral-500 font-label text-sm tracking-wide">
          Copyright © 2026 Hiba Wajid.
        </div>
        <div className="flex gap-8">
          {/* <a
            className="text-neutral-500 hover:text-green-400 transition-colors font-label uppercase tracking-widest text-[10px]"
            href="https://github.com/AbdullahWajid-sudo"
          >
            <Image
              src="/icons/pngegggithub.png"
              alt="alt"
              width={40}
              height={40}
              className="mt-1.5 mb-1"
            />
            GitHub
          </a> */}
          <a
            className="text-neutral-500 hover:text-tertiary transition-colors font-label uppercase tracking-widest text-[10px]"
            href="https://www.linkedin.com/in/hiba-wajid-375ab2287?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          >
            <Image
              src="/icons/icons8-linkedin.svg"
              alt="alt"
              width={50}
              height={50}
            />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
