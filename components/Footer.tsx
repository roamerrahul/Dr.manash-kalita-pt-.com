"use client";

import { Facebook, Instagram, Twitter, MessageCircle, Phone, Mail, ArrowRight, Sparkles } from "lucide-react";

export function Footer() {
  const whatsappUrl = "https://wa.me/919365310197?text=Hello%20Dr%20Manash%20Kalita%2C%20I%20would%20like%20to%20consult%20you%20regarding%20physiotherapy%20treatment.";

  return (
    <footer className="bg-[#03045E] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <span className="font-headline font-extrabold text-3xl tracking-tighter leading-none block">
              Dr. Manash <span className="text-[#90E0EF] italic">Kalita (PT)</span>
            </span>
            <p className="text-white/70 leading-relaxed font-medium text-sm">
              Expert physiotherapy and rehabilitation services dedicated to clinical excellence and rapid recovery for high-performance individuals.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#00B4D8] hover:text-white transition-all border border-white/10">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#90E0EF]">Clinic Links</h4>
            <ul className="space-y-5">
              {["Home", "About", "Services", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors flex items-center group font-bold text-sm tracking-tight">
                    <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#90E0EF]">Get In Touch</h4>
            <ul className="space-y-8">
              <li className="flex gap-4 items-start group">
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-[#00B4D8] border border-white/10">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Phone</p>
                  <a href="tel:+919365310197" className="text-white hover:text-[#90E0EF] font-bold text-sm tracking-tight transition-colors">+91 93653 10197</a>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-[#00B4D8] border border-white/10">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Email</p>
                  <a href="mailto:kalitamanash631@gmail.com" className="text-white hover:text-[#90E0EF] font-bold text-sm tracking-tight transition-colors truncate block max-w-[200px]">kalitamanash631@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#90E0EF]">Priority Support</h4>
            <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 relative group overflow-hidden">
              <Sparkles className="absolute -top-4 -right-4 w-16 h-16 text-[#90E0EF]/10" />
              <p className="text-white/70 text-sm font-bold leading-relaxed mb-6 tracking-tight">
                Connect directly on WhatsApp for immediate consultation assistance.
              </p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#00B4D8] text-white font-bold py-4 rounded-full hover:bg-[#0077B6] transition-all shadow-2xl text-[11px] uppercase tracking-widest"
              >
                <MessageCircle size={18} />
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-[10px] font-bold uppercase tracking-[0.25em]">
          <p>© {new Date().getFullYear()} Dr. Manash Kalita (PT). All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}