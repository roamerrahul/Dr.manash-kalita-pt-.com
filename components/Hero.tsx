"use client";

import Image from "next/image";
import { Sparkles, Stethoscope } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroImages = [
    PlaceHolderImages.find(img => img.id === "hero-exercise"),
    PlaceHolderImages.find(img => img.id === "hero-exo-robot"),
    PlaceHolderImages.find(img => img.id === "hero-physio"),
  ].filter(Boolean);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden premium-gradient">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(#CAF0F8 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00B4D8]/20 rounded-full blur-[120px] -mr-96 -mt-96" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#90E0EF]/10 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 text-center lg:text-left animate-in fade-in slide-in-from-left-8 duration-1000 relative">
          <div className="absolute -top-20 -left-10 lg:-left-20 opacity-5 pointer-events-none transform -rotate-12">
            <Stethoscope size={400} className="text-white" />
          </div>

          <div className="space-y-8 relative z-10">
            <Badge className="bg-[#0077B6] text-white border-none px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] flex items-center gap-2 w-fit mx-auto lg:mx-0 shadow-2xl">
              <Sparkles className="w-4 h-4 text-[#CAF0F8]" />
              Move Better. Live Better.
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold leading-[1.05] text-white tracking-tighter drop-shadow-2xl">
              Relieve Pain.<br />
              <span className="text-[#90E0EF] italic">Restore Mobility.</span><br />
              Move Better.
            </h1>

            <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
              <p className="text-xl md:text-2xl text-[#CAF0F8] font-semibold leading-relaxed tracking-tight">
                Transform your quality of life with <span className="text-white border-b-2 border-[#00B4D8] pb-1">Dr. Manash Kalita (PT)</span>.
              </p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg font-medium">
                We combine elite clinical expertise with modern technology to deliver faster, more effective rehabilitation for athletes and professionals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-8">
              <Button 
                className="rounded-[16px] px-8 h-14 text-xs font-bold uppercase tracking-[0.15em] bg-white text-primary hover:bg-[#CAF0F8] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 shadow-2xl w-full sm:w-[220px]" 
                asChild
              >
                <a href="#contact">Book Appointment</a>
              </Button>
              <Button 
                className="rounded-[16px] px-8 h-14 text-xs font-bold uppercase tracking-[0.15em] bg-[#CAF0F8]/20 backdrop-blur-md text-white border border-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 shadow-2xl w-full sm:w-[220px]" 
                asChild
              >
                <a href="#services">Clinical Services</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(3,4,94,0.5)] aspect-[4/5] border-[12px] border-white/10">
            <Carousel
              plugins={[plugin.current]}
              className="w-full h-full"
              opts={{ loop: true }}
            >
              <CarouselContent className="h-full ml-0">
                {heroImages.map((img, index) => (
                  <CarouselItem key={index} className="pl-0 h-full">
                    <div className="relative h-full w-full">
                      <Image
                        src={img!.imageUrl}
                        alt={img!.description}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03045E]/80 via-transparent to-transparent" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          
          <div className="absolute -bottom-8 -left-8 p-10 rounded-[32px] bg-[#0077B6] text-white z-20 hidden sm:block shadow-[0_20px_40px_rgba(0,119,182,0.4)] border border-white/20 backdrop-blur-md">
            <p className="font-headline font-extrabold text-6xl leading-none tracking-tighter">500+</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] mt-4 text-[#CAF0F8]">Recovered Patients</p>
          </div>
        </div>
      </div>
    </section>
  );
}