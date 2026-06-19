"use client";

import { ShieldCheck, HeartPulse, Target, Sparkles, Cpu, Stethoscope, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const expertiseList = [
  { title: "Manual Therapy", desc: "Expert hand-on techniques", icon: HeartPulse },
  { title: "Clinical Excellence", desc: "Evidence-based protocols", icon: ShieldCheck },
  { title: "Robotic Rehab", desc: "Exo-Robot powered recovery", icon: Cpu },
  { title: "Fast Recovery", desc: "Accelerated healing plans", icon: Target },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#CAF0F8]/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-[0.15] pointer-events-none">
        <Stethoscope size={500} className="text-[#03045E] -mr-20 -mt-10 rotate-12" />
      </div>
      <div className="absolute bottom-10 left-0 opacity-[0.15] pointer-events-none">
        <Activity size={400} className="text-[#03045E] -ml-10 -mb-10" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          <div className="space-y-8 flex flex-col items-center max-w-3xl">
            <Badge className="bg-[#0077B6] text-white border-none px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] w-fit shadow-lg mb-2">
              <Sparkles className="w-4 h-4 mr-2 text-[#90E0EF]" />
              Elite Clinical Recovery
            </Badge>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-[#03045E] leading-[1.05] tracking-tighter">
              Helping You <span className="text-[#00B4D8] italic">Move Better,</span> <br />
              Recover Faster & Live Pain-Free
            </h2>
            <p className="text-xl md:text-2xl text-primary/80 leading-relaxed font-semibold tracking-tight">
              As a specialist Physiotherapist, my goal is to identify the root cause of dysfunction, restore elite movement patterns, and help patients return confidently to high-performance daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {expertiseList.map((item, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center text-center p-8 rounded-[32px] bg-white border-2 border-[#90E0EF]/30 transition-all duration-500 group hover:border-[#00B4D8] hover:shadow-[0_20px_50px_rgba(0,180,216,0.2)] hover:-translate-y-2 cursor-default"
              >
                <div className="w-16 h-16 bg-[#03045E] rounded-[22px] flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-[#0077B6] transition-all duration-300 shadow-xl border border-white/10">
                  <item.icon size={28} />
                </div>
                <h4 className="font-headline font-bold text-[#03045E] text-xl tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-[10px] text-[#0077B6] font-extrabold tracking-[0.15em] uppercase">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}