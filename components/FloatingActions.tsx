
"use client";

import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 animate-in slide-in-from-bottom-8 duration-500">
      <a
        href="https://wa.me/919365310197?text=Hello%20Dr%20Manash%20Kalita%2C%20I%20would%20like%20to%20consult%20you%20regarding%20physiotherapy%20treatment."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
        aria-label="WhatsApp Consultation"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-foreground px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border border-border">
          WhatsApp Me
        </span>
      </a>
      <a
        href="tel:+919365310197"
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
        aria-label="Call Now"
      >
        <Phone className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-foreground px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md border border-border">
          Call Now
        </span>
      </a>
    </div>
  );
}
