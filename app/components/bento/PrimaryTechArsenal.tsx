import { skills } from "../../data/skills";
import { SkillCard } from "../SkillCard";

export function PrimaryTechArsenal() {
  return (
    <div className="md:col-span-8 md:row-span-4 rounded-3xl sm:rounded-4xl bento-card p-6 sm:p-8 flex flex-col relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-120 h-120 bg-bglow blur-[70px] rounded-full z-0"></div>
      <div className="relative z-10 flex flex-col h-full ">
        <div className="flex justify-between items-start gap-4 mb-8 sm:mb-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
            <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
              grid_view
            </span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(0,229,75,0.6)]"></span>
            <span className="text-[10px] font-label font-bold text-on-surface uppercase tracking-wide">
              STUDIO ACTIVE
            </span>
          </div>
        </div>
        <div className="mt-4 mb-4">
          <h4 className="text-2xl font-headline font-bold text-white tracking-tight">
            Software Suite
          </h4>
          <p className="text-sm font-label uppercase tracking-[0.2em] text-on-surface-variant mt-1 font-semibold z-10">
            FROM 2D DRAFTING TO 3D VIRTUAL REALITY
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 z-10 mt-10">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
