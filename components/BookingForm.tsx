"use client";

import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function BookingForm() {
  const whatsappUrl = "https://wa.me/919365310197?text=Hello%20Dr%20Manash%20Kalita%2C%20I%20would%20like%20to%20consult%20you%20regarding%20physiotherapy%20treatment.";

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#CAF0F8]/80">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-16">
          <div className="space-y-8">
            <Badge className="bg-[#03045E] text-white border-none px-8 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] shadow-2xl">
              <Sparkles className="w-4 h-4 mr-2" />
              Direct Priority Access
            </Badge>
            <h2 className="text-5xl md:text-7xl font-headline font-extrabold text-[#03045E] leading-[1.05] tracking-tighter">
              Start Your <br />
              <span className="text-[#00B4D8] italic underline decoration-[#90E0EF]/60 decoration-8 underline-offset-8">Healing</span> Journey
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
            <a 
              href="tel:+919365310197"
              className="flex flex-col items-center gap-4 p-8 rounded-[32px] bg-white border-2 border-primary/10 w-full sm:w-56 group hover:border-[#03045E] hover:shadow-[0_25px_50px_rgba(3,4,94,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-[#03045E] rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                <Phone size={22} />
              </div>
              <div className="text-center">
                <h4 className="font-headline font-bold text-[#03045E] text-[11px] uppercase tracking-[0.2em] mb-2">Call Now</h4>
                <p className="text-base font-extrabold text-[#0077B6] tracking-tight">+91 93653 10197</p>
              </div>
            </a>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 rounded-[32px] bg-white border-2 border-primary/10 w-full sm:w-56 group hover:border-[#25D366] hover:shadow-[0_25px_50px_rgba(37,211,102,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-[#E7F9EE] rounded-2xl flex items-center justify-center text-[#25D366] shadow-xl group-hover:scale-110 transition-transform border border-[#25D366]/20">
                <MessageCircle size={22} />
              </div>
              <div className="text-center">
                <h4 className="font-headline font-bold text-black text-[11px] uppercase tracking-[0.2em] mb-2">WhatsApp</h4>
                <p className="text-base font-extrabold text-[#0077B6] tracking-tight">Instant Support</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}