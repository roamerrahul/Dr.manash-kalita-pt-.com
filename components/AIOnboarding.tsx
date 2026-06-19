"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { smartPatientOnboarding, type PatientOnboardingOutput } from "@/ai/flows/smart-patient-onboarding";
import { Loader2, Sparkles, Activity, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export function AIOnboarding() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PatientOnboardingOutput | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    
    setLoading(true);
    setResult(null);
    try {
      const data = await smartPatientOnboarding({ description });
      setResult(data);
    } catch (error: any) {
      console.error("AI Error:", error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "There was an issue connecting to our AI assistant. Please try again or book a consultation directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="px-6 py-2 text-sm bg-primary/10 text-primary border-primary/20 font-bold rounded-full">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Symptom Analysis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground">Tell Us How You Feel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
            Let our smart assistant analyze your symptoms and suggest the most effective treatments before your visit.
          </p>
        </div>

        <Card className="bg-white border border-border shadow-medical rounded-[60px] overflow-hidden">
          <CardContent className="pt-12 p-8 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-8">
              <Textarea
                placeholder="Example: I have chronic lower back pain that radiates down my left leg when I sit for too long..."
                className="min-h-[200px] bg-secondary/30 border-none text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 text-lg rounded-[40px] p-8 shadow-inner"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button 
                type="submit" 
                size="lg" 
                disabled={loading} 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-10 text-xl rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-[1.01]"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-3 h-6 w-6" /> 
                    Analyzing symptoms...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-3 h-6 w-6" />
                    Analyze My Condition
                  </>
                )}
              </Button>
            </form>

            {result && (
              <div className="mt-16 space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700 bg-secondary/50 p-10 md:p-12 rounded-[50px] border border-primary/10">
                <div className="space-y-3">
                  <span className="text-primary font-bold uppercase tracking-widest text-xs">Analysis Result</span>
                  <h3 className="text-3xl font-headline font-bold text-foreground">{result.conditionCategory}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h4 className="font-bold text-lg flex items-center gap-3 text-foreground">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <ArrowRight size={20} />
                      </div>
                      Suggested Treatments
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {result.suggestedTreatments.map((t) => (
                        <Badge key={t} className="bg-white text-primary border border-primary/20 py-3 px-6 text-sm font-bold rounded-full shadow-sm">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h4 className="font-bold text-lg flex items-center gap-3 text-foreground">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <ArrowRight size={20} />
                      </div>
                      AI Explanation
                    </h4>
                    <p className="text-muted-foreground leading-relaxed italic text-lg font-medium">
                      "{result.explanation}"
                    </p>
                  </div>
                </div>
                
                <div className="pt-10 border-t border-primary/10 flex flex-col md:flex-row gap-8 items-center justify-between">
                  <p className="text-xl font-bold text-foreground">Ready to start your recovery plan?</p>
                  <Button asChild className="rounded-full px-12 h-16 text-lg font-bold bg-primary text-white hover:bg-primary/90 transition-all shadow-lg">
                    <a href="#contact">Book Consultation Now</a>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}