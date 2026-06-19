"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 lg:px-12",
        isScrolled 
          ? "py-4 bg-[#03045E]/95 backdrop-blur-xl shadow-2xl" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className={cn(
            "font-headline font-extrabold text-2xl tracking-tighter transition-colors duration-300",
            isScrolled ? "text-white" : "text-white drop-shadow-lg"
          )}>
            Dr. Manash <span className="text-[#90E0EF]">Kalita (PT)</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:text-[#90E0EF] relative group/link text-white/90"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#90E0EF] transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
          <Button asChild className="rounded-full px-8 h-11 bg-[#00B4D8] hover:bg-[#0077B6] text-white font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 border-none text-[11px] uppercase tracking-widest">
            <a href="#contact">Book Consult</a>
          </Button>
        </div>

        {/* Mobile Trigger */}
        <div className="md:hidden flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white h-12 w-12">
                <Menu className="w-8 h-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#03045E] border-l border-[#0077B6] p-0 text-white">
              <SheetHeader className="p-8 border-b border-white/10">
                <SheetTitle className="text-left text-white font-headline font-bold text-xl">
                   Dr. Manash Kalita
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-8 gap-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="text-lg font-bold py-4 border-b border-white/5 text-white/80 hover:text-[#90E0EF] transition-colors tracking-tight"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
                <div className="mt-8">
                  <SheetClose asChild>
                    <Button asChild className="w-full rounded-full h-14 font-bold bg-[#00B4D8] hover:bg-[#0077B6] text-white shadow-xl text-sm">
                      <a href="#contact">
                        <Calendar className="mr-2 h-5 w-5" /> Book Now
                      </a>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}