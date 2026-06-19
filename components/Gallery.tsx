
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function Gallery() {
  const recoveryImages = PlaceHolderImages.filter(img => img.id.startsWith("recovery-") || img.id.startsWith("gallery-"));

  return (
    <section id="gallery" className="py-32 bg-white/50 overflow-hidden border-t border-primary/10 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center space-y-6 mb-24">
          <Badge className="bg-primary/10 text-primary border-primary/20 font-bold px-8 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Recovery in Action
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold text-primary tracking-tight leading-[1.05]">
            Clinical <span className="text-foreground italic underline decoration-primary/10 decoration-8 underline-offset-8">Recovery</span> Journey
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-bold leading-relaxed">
            Witness the dedicated medical care and advanced clinical techniques Dr Manash Kalita uses to restore mobility.
          </p>
        </div>

        <div className="relative group/carousel">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-8">
              {recoveryImages.map((img, idx) => (
                <CarouselItem key={idx} className="pl-8 md:basis-full lg:basis-full">
                  <div className="relative group/item">
                    <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white bg-white group-hover/item:border-accent transition-all duration-700 hover:shadow-[0_0_40px_rgba(0,180,216,0.2)]">
                      <Image
                        src={img.imageUrl}
                        alt={img.description}
                        fill
                        className="object-cover group-hover/item:scale-105 transition-transform duration-1000"
                        data-ai-hint={img.imageHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="space-y-4">
                          <div className="w-12 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(0,180,216,0.8)]" />
                          <p className="text-white font-headline font-extrabold text-xl md:text-3xl lg:text-4xl max-w-3xl tracking-tight leading-tight drop-shadow-2xl">
                            {img.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-16 h-16 w-16 bg-white text-primary border-4 border-primary/10 shadow-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" />
            <CarouselNext className="hidden md:flex -right-16 h-16 w-16 bg-white text-primary border-4 border-primary/10 shadow-2xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
