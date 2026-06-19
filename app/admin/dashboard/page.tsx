
"use client";

import { useCollection, useFirestore } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  CalendarCheck, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const db = useFirestore();
  const appointmentsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, "appointments"), orderBy("created_at", "desc"));
  }, [db]);

  const { data: appointments, loading } = useCollection(appointmentsQuery);

  const stats = useMemo(() => {
    if (!appointments) return { total: 0, new: 0, confirmed: 0, completed: 0, cancelled: 0 };
    return {
      total: appointments.length,
      new: appointments.filter(a => a.status === "New").length,
      confirmed: appointments.filter(a => a.status === "Confirmed").length,
      completed: appointments.filter(a => a.status === "Completed").length,
      cancelled: appointments.filter(a => a.status === "Cancelled").length,
    };
  }, [appointments]);

  const chartData = [
    { name: 'New', count: stats.new, color: '#f59e0b' },
    { name: 'Confirmed', count: stats.confirmed, color: '#3b82f6' },
    { name: 'Completed', count: stats.completed, color: '#10b981' },
    { name: 'Cancelled', count: stats.cancelled, color: '#ef4444' },
  ];

  if (loading) return <div>Analyzing statistics...</div>;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-headline font-bold text-primary">Overview Dashboard</h1>
          <p className="text-muted-foreground">Detailed summary of your physiotherapy practice</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Bookings" value={stats.total} icon={Users} color="bg-primary" />
        <StatCard title="New Requests" value={stats.new} icon={Clock} color="bg-amber-500" />
        <StatCard title="Confirmed" value={stats.confirmed} icon={CalendarCheck} color="bg-blue-500" />
        <StatCard title="Completed" value={stats.completed} icon={CheckCircle2} color="bg-emerald-500" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-xl border-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-primary" />
              Booking Status Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-xl border-primary/5 bg-primary text-white overflow-hidden relative">
          <ArrowUpRight className="absolute -top-10 -right-10 w-48 h-48 text-white/5" />
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {appointments?.slice(0, 3).map((a, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold">
                    {a.full_name.charAt(0)}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="font-bold truncate">{a.full_name}</p>
                    <p className="text-xs text-white/60">{a.service}</p>
                  </div>
                  <span className="text-[10px] bg-white/20 px-2 py-1 rounded-full">{a.status}</span>
                </div>
              ))}
              {stats.total === 0 && <p className="text-white/50 text-center py-8">No recent bookings found.</p>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color }: { title: string, value: number, icon: any, color: string }) {
  return (
    <Card className="overflow-hidden shadow-xl border-primary/5 group hover:border-primary/20 transition-all">
      <CardContent className="p-0">
        <div className="p-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <p className="text-3xl font-headline font-bold text-primary">{value}</p>
          </div>
          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", color)}>
            <Icon size={24} />
          </div>
        </div>
        <div className="h-1 bg-muted">
          <div className={cn("h-full transition-all duration-1000", color)} style={{ width: value > 0 ? '100%' : '0%' }} />
        </div>
      </CardContent>
    </Card>
  );
}
