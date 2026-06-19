
"use client";

import { HeartPulse, Zap, Target, Move, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const statistics = [
  {
    title: "Relieving Pain",
    description: "Targeted physiotherapy treatments to reduce pain and improve daily comfort.",
    icon: HeartPulse,
  },
  {
    title: "Enhancing Performance",
    description: "Optimize strength, movement efficiency, and physical performance for sports.",
    icon: Zap,
  },
  {
    title: "Correcting Movement",
    description: "Identify and address movement imbalances to prevent injuries.",
    icon: Target,
  },
  {
    title: "Restoring Mobility",
    description: "Improve flexibility and joint function to move with total confidence.",
    icon: Move,
  },
];

export function Stats() {
  return (
    <section className="py-20 md:py-24 bg-[#CAF0F8]/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#03045E]/10 text-[#03045E] border-[#03045E]/20 px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] shadow-sm inline-flex items-center">
            <Sparkles className="w-4 h-4 mr-2" />
            Path to Wellness
          </Badge>
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tight leading-tight">
            <span className="text-[#03045E]">Clinical </span>
            <span className="text-[#00B4D8] italic underline decoration-[#00B4D8]/20 decoration-8 underline-offset-8">Care</span>
            <span className="text-[#03045E]"> Solutions</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statistics.map((stat, idx) => (
            <div 
              key={idx} 
              className="group relative p-6 md:p-8 rounded-[24px] bg-white border-2 border-[#90E0EF]/20 hover:border-[#00B4D8] transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(0,180,216,0.15)] hover:-translate-y-1.5 cursor-default flex flex-col items-center text-center overflow-hidden"
            >
              <div className="w-12 h-12 rounded-[14px] bg-[#03045E] flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-[#0077B6] transition-all duration-300 shadow-md border border-white/10">
                <stat.icon size={22} />
              </div>
              <h3 className="text-md md:text-lg font-headline font-bold text-[#03045E] mb-3 group-hover:text-[#00B4D8] transition-colors leading-tight">
                {stat.title}
              </h3>
              <p className="text-[#03045E]/70 leading-relaxed text-[13px] font-semibold">
                {stat.description}
              </p>
              
              {/* Card Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/0 to-[#00B4D8]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
