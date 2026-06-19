
"use client";

import { useState, useEffect } from "react";
import { useAuth, useUser } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Lock } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const { user, loading: userLoading } = useUser();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!userLoading && user) {
      router.push("/admin/dashboard");
    }
  }, [user, userLoading, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) return;

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({ title: "Login Successful", description: "Welcome back, Dr Manash." });
      router.push("/admin/dashboard");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (userLoading) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-6">
      <Card className="w-full max-w-sm shadow-xl border-primary/5">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white mb-2">
            <Lock className="w-5 h-5" />
          </div>
          <CardTitle className="text-xl font-headline">Admin Portal</CardTitle>
          <CardDescription className="text-xs">Secure login for management</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="admin@manashphysio.com" 
                required 
                className="h-9 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-xs">Password</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                className="h-9 text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full h-10 text-sm font-bold mt-2" disabled={loading}>
              {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : "Sign In"}
            </Button>
          </form>
          <div className="mt-6 p-3 bg-secondary/5 rounded-lg text-[10px] text-muted-foreground text-center border border-secondary/10">
            <p className="font-bold mb-1 text-secondary-foreground">Access Restricted</p>
            <p>Please use authorized credentials only.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
