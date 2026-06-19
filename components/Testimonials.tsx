"use client";

import { Star, Quote, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Rupam Das",
    role: "Athlete",
    content: "The Dry Needling session for my calf injury was incredibly effective. Dr. Manash knows exactly what he's doing. Recovered much faster than expected!",
    rating: 5
  },
  {
    name: "Anjali Sarma",
    role: "Software Engineer",
    content: "My chronic back pain from long sitting hours is finally under control thanks to the Myofascial Release and posture correction advice. Highly recommend!",
    rating: 5
  },
  {
    name: "Hemant Kalita",
    role: "Local Resident",
    content: "Best physiotherapy in Rangia. Professional approach and the Kinesiology taping really helped my shoulder stability during work.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#0077B6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center space-y-6 mb-20">
          <Badge className="bg-[#03045E] text-white border-none px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] shadow-2xl">
            <Sparkles className="w-4 h-4 mr-2 text-[#90E0EF]" />
            Patient Success
          </Badge>
          <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white tracking-tighter leading-tight">
            Trust the <span className="text-[#CAF0F8] italic underline decoration-white/20 decoration-8 underline-offset-8">Expert</span> Outcomes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#03045E] p-8 rounded-[32px] border-2 border-transparent hover:border-[#90E0EF]/30 transition-all duration-500 flex flex-col shadow-2xl hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)]"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-[#90E0EF]/10 group-hover:text-[#90E0EF]/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00B4D8] text-[#00B4D8]" />
                ))}
              </div>
              
              <p className="text-white/90 leading-relaxed mb-8 italic text-base md:text-lg font-medium tracking-tight">
                "{t.content}"
              </p>
              
              <div className="mt-auto border-t border-white/10 pt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0077B6] rounded-xl flex items-center justify-center text-white font-extrabold text-lg shadow-inner group-hover:scale-105 transition-transform border border-white/10">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-headline font-bold text-white text-base tracking-tight">{t.name}</p>
                  <p className="text-[#90E0EF] font-bold text-[9px] uppercase tracking-[0.2em]">{t.role}</p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-[#90E0EF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[32px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}