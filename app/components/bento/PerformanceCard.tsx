import { AnimatedCircleWithNumber } from "../AnimatedCircleWithNumber";

export function PerformanceCard() {
  return (
    <div className="md:col-span-4 md:row-span-2 rounded-4xl bento-card p-8 flex flex-col relative overflow-hidden group">
      <div className="flex justify-between items-start mb-6">
        <div></div>
        <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(0,229,75,0.6)]"></span>
          <span className="text-[10px] font-label font-bold text-on-surface uppercase tracking-wide">
            Performance
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex flex-col items-center justify-center text-center grow">
        <AnimatedCircleWithNumber targetProgress={99.9} duration={1000} />
        <div className="space-y-2">
          <p className="text-sm font-label uppercase tracking-[0.3em] text-on-surface-variant font-bold border-y border-white/5 py-2">
            BESPOKE PRECISION
          </p>
          <p className="text-md text-on-surface-variant/80 font-light leading-relaxed">
            Crafted for ultimate peace of mind through hyper-detailed material selection and personalized space planning.
          </p>
        </div>
      </div>
    </div>
  );
}
