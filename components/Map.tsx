"use client";

import { MapPin, Navigation as NavIcon, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Map() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
       {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-16">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-6 flex flex-col items-center">
              <Badge className="bg-primary/10 text-primary border-primary/20 font-bold px-8 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] shadow-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Service Area
              </Badge>
              <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-primary tracking-tight leading-tight">
                Serving <span className="text-foreground italic underline decoration-primary/10 decoration-8 underline-offset-4">Rangia</span> & <br />
                Nearby Areas
              </h2>
              <p className="text-xl text-muted-foreground font-semibold leading-relaxed">
                Conveniently located to serve the community in Rangia, Assam, and surrounding regions with elite medical care.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <div className="flex items-center gap-4 group bg-white/50 backdrop-blur-sm p-6 rounded-[24px] border-2 border-primary/5 hover:border-accent hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] hover:-translate-y-1 transition-all duration-500 shadow-sm cursor-default">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300 border border-white/10 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h5 className="font-headline font-extrabold text-primary text-lg tracking-tight">Clinic Location</h5>
                  <p className="text-muted-foreground text-sm font-bold uppercase tracking-wider">Rangia, Assam, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group bg-white/50 backdrop-blur-sm p-6 rounded-[24px] border-2 border-primary/5 hover:border-accent hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] hover:-translate-y-1 transition-all duration-500 shadow-sm cursor-default">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300 border border-white/10 shadow-lg">
                  <NavIcon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h5 className="font-headline font-extrabold text-primary text-lg tracking-tight">Coverage Region</h5>
                  <p className="text-muted-foreground text-sm font-bold uppercase tracking-wider">Rangia, Goreswar, Tamulpur</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-5xl relative">
             <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[44px] blur-2xl opacity-20" />
            <div className="w-full h-[450px] md:h-[550px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative z-10 transition-transform hover:scale-[1.005] duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14294.4068364841!2d91.6163!3d26.4447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37599028975a59a7%3A0xe726895311f939e0!2sRangia%2C%20Assam!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
