"use client";

import { useUser, useAuth } from "@/firebase";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, CalendarDays, LogOut, Menu, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { signOut } from "firebase/auth";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  const auth = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [user, loading, router, pathname]);

  const handleLogout = async () => {
    if (auth) {
      await signOut(auth);
      router.push("/admin/login");
    }
  };

  if (pathname === "/admin/login") return <>{children}</>;
  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading Admin Panel...</div>;
  if (!user) return null;

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Bookings", href: "/admin/bookings", icon: CalendarDays },
  ];

  const SidebarContent = () => (
    <div className="h-full flex flex-col p-6">
      <div className="mb-10">
        <span className="font-headline font-bold text-xl text-white">Admin Panel</span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
              pathname === item.href ? "bg-white/10 text-secondary font-bold" : "text-white/70 hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon size={20} />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="pt-6 border-t border-white/10 space-y-4">
        <div className="px-4 py-2 flex items-center gap-3">
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white">
            <User size={16} />
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] font-medium text-white/50">Logged in as</p>
            <p className="text-xs font-bold truncate text-white">Dr. Manash Kalita (PT)</p>
          </div>
        </div>
        <Button 
          variant="destructive" 
          className="w-full justify-start gap-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-primary flex items-center justify-between px-6 z-40 shadow-md">
        <div className="flex items-center gap-2">
          <span className="font-headline font-bold text-white">Dr. Manash (PT)</span>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 bg-primary border-none w-64">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-primary text-white sticky top-0 h-screen">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6 lg:p-10 mt-16 lg:mt-0">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}