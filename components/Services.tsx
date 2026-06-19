"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Zap, 
  Activity, 
  Thermometer, 
  Move, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const services = [
  {
    title: "Physiotherapy Assessment",
    description: "Detailed biomechanical analysis to identify the root cause of your pain.",
    icon: <Target className="w-4 h-4" />,
  },
  {
    title: "Kinesiology Taping",
    description: "Advanced taping techniques to support muscles and stabilize joints.",
    icon: <Activity className="w-4 h-4" />,
  },
  {
    title: "Dry Needling",
    description: "Intramuscular therapy to release chronic tension and trigger points.",
    icon: <Zap className="w-4 h-4" />,
  },
  {
    title: "Sports Rehabilitation",
    description: "Return-to-play programs focused on strength and injury prevention.",
    icon: <ShieldCheck className="w-4 h-4" />,
  },
  {
    title: "Pain Management",
    description: "Evidence-based protocols for both acute injuries and chronic conditions.",
    icon: <Thermometer className="w-4 h-4" />,
  },
  {
    title: "Mobility Restoration",
    description: "Functional movement screening and correction for optimal performance.",
    icon: <Move className="w-4 h-4" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-[#03045E]/10 text-[#03045E] border-[#03045E]/20 px-6 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm inline-flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            Specialized Care
          </Badge>
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tighter leading-tight">
            <span className="text-[#03045E]">Our </span>
            <span className="text-[#00B4D8] italic underline decoration-[#00B4D8]/20 decoration-4 underline-offset-4">Premium</span>
            <span className="text-[#03045E]"> Treatments</span>
          </h2>
          <p className="text-base md:text-lg text-[#03045E]/70 max-w-xl mx-auto leading-relaxed font-semibold tracking-tight">
            Evidence-based techniques refined for rapid recovery and peak physical performance in a professional setting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group relative rounded-[24px] overflow-hidden flex flex-col bg-[#03045E] border border-[#00B4D8]/20 hover:border-[#00B4D8] transition-all duration-500 shadow-xl hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(3,4,94,0.25)] p-6"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 bg-[#0077B6] rounded-[12px] flex items-center justify-center text-white shadow-lg border border-white/10 mb-4 group-hover:scale-105 group-hover:bg-[#00B4D8] transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-headline font-bold mb-2 text-white group-hover:text-[#90E0EF] transition-colors leading-tight tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed mb-4 text-[13px] font-medium">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <Button variant="link" className="p-0 h-auto text-[#00B4D8] font-bold hover:text-white group/btn text-[9px] uppercase tracking-[0.15em] no-underline" asChild>
                    <a href="#contact">
                      Consultation <ArrowRight className="ml-1.5 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
