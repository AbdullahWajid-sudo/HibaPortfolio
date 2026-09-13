import AnimatedNumber from "./AnimatedNumber";
import Image from "next/image";
export default function About() {
  return (
    <main>
      <section className="py-32  bg-primary/5" id="about">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl group-hover:bg-primary/20 transition-all"></div>
              <Image
                alt="Portrait of Abdullah "
                width={1000}
                height={1000}
                className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-4/5 w-full border border-white/5"
                data-alt="Professional portrait of a male developer in dark clothing, moody dramatic side lighting, high contrast, minimalist background"
                src="/hibaimg.jpeg"
              />
            </div>
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <label className="text-tertiary font-label text-xs uppercase tracking-[0.3em] font-semibold mb-2">
                  Discovery
                </label>
                <h2 className="text-5xl md:text-7xl text-surface font-headline font-bold tracking-tight">
                  Spatial Precision meets Artistic Vision.
                </h2>
              </div>
              <div className="space-y-6 text-surface text-lg leading-relaxed font-light">
                <p>
                  Versatile Interior Designer with expertise in residential
                  execution, photorealistic 3D rendering, and complete project
                  oversight. Combines a strong background in technical drafting
                  and client management with hands-on site leadership—taking
                  projects seamlessly from initial draft to complete staging.
                </p>
                <p>
                  With a deep focus on custom furnishings and sustainable
                  luxury, I transform raw, complex floor plans into refined,
                  high-performance spaces that redefine modern living.
                </p>
              </div>
              <div
                className="grid grid-cols-2 md:grid-cols-3 gap-8 "
                id="stats-section"
              >
                <div className="space-y-1">
                  <div className="text-3xl font-headline font-bold text-primary">
                    <AnimatedNumber target={3} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-surface font-label">
                    Years Exp
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-headline font-bold text-primary">
                    <AnimatedNumber target={40} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-surface font-label">
                    Projects
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-headline font-bold text-primary">
                    <AnimatedNumber target={3} suffix="+" />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-surface font-label">
                    Certifications
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
