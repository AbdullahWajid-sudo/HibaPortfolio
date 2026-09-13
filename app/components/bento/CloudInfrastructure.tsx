export function CloudInfrastructure() {
  return (
    <div className="md:col-span-7 md:row-span-2 rounded-4xl bento-card p-8 flex flex-col justify-between group overflow-hidden relative">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex justify-between items-start">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
          <span className="material-symbols-outlined text-primary text-3xl">
            Person_Check
          </span>
        </div>
        <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(0,229,75,0.6)]"></span>
          <span className="text-[10px] font-label font-bold text-on-surface uppercase tracking-wide">
            CLIENT EXPERIENCE
          </span>
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-2xl font-headline font-bold text-white tracking-tight">
          Client Relations
        </h4>
        <p className="text-sm font-label uppercase tracking-[0.2em] text-on-surface-variant mt-1 font-semibold z-10">
          END-TO-END INTERIOR DELIVERY
        </p>
        <div className="mt-4 space-y-2 z-10">
          <p className="text-md text-on-surface-variant/80 font-light leading-relaxed">
            Leveraging transparent communication protocols to ensure a smooth
            transition from initial concept to complete turnkey handover.
          </p>
          <div className="flex gap-2 flex-wrap mt-4">
            <div className="flex items-center gap-2 bg-black/30 border border-white/10 px-4 py-2 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
              <span className="text-[12px] font-label font-bold text-on-surface">
                PERSONALIZED LIVING ANALYSIS
              </span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 border border-white/10 px-4 py-2 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
              <span className="text-[12px] font-label font-bold text-on-surface">
                DESIGN BRIEFING
              </span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 border border-white/10 px-4 py-2 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(173,198,255,0.6)]"></span>
              <span className="text-[12px] font-label font-bold text-on-surface">
                SPATIAL REQUIREMENT MAPPING
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-20 right-13 translate-x-1/4 translate-y-1/4 opacity-10 group-hover:opacity-20 transition-all duration-500">
          <span
            className="material-symbols-outlined text-[200px] scale-[3] md:scale-[5] block"
            style={{
              fontVariationSettings: "'wght' 100",
              lineHeight: 1,
            }}
          >
            Location_Away
          </span>
        </div>
        <div className="absolute bottom-10 right-26 translate-x-1/4 translate-y-1/4 opacity-10 group-hover:opacity-20 transition-all duration-500">
          <span
            className="material-symbols-outlined text-[200px] scale-[3] md:scale-[5] block"
            style={{
              fontVariationSettings: "'wght' 100",
              lineHeight: 1,
            }}
          >
            Holiday_Village
          </span>
        </div>
      </div>
    </div>
  );
}
