"use client";

import { useCollection, useFirestore } from "@/firebase";
import { collection, query, orderBy, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useMemo, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MoreHorizontal, 
  Phone, 
  MessageCircle, 
  Trash2, 
  CheckCircle, 
  Eye,
  Filter,
  XCircle
} from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function BookingsPage() {
  const db = useFirestore();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);

  const appointmentsQuery = useMemo(() => {
    if (!db) return null;
    return query(collection(db, "appointments"), orderBy("created_at", "desc"));
  }, [db]);

  const { data: appointments, loading } = useCollection(appointmentsQuery);

  const filteredAppointments = useMemo(() => {
    if (!appointments) return [];
    return appointments.filter(a => 
      a.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.phone.includes(searchTerm) ||
      (a.service && a.service.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [appointments, searchTerm]);

  const updateStatus = async (id: string, status: string) => {
    if (!db) return;
    try {
      await updateDoc(doc(db, "appointments", id), { status });
      toast({ title: "Status Updated", description: `Appointment marked as ${status}.` });
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "Could not update status." });
    }
  };

  const deleteAppointment = async (id: string) => {
    if (!db || !confirm("Are you sure you want to delete this booking?")) return;
    try {
      await deleteDoc(doc(db, "appointments", id));
      toast({ title: "Deleted", description: "Booking has been removed." });
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "Could not delete booking." });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "New": return <Badge className="bg-amber-500">New</Badge>;
      case "Confirmed": return <Badge className="bg-blue-500">Confirmed</Badge>;
      case "Completed": return <Badge className="bg-emerald-500">Completed</Badge>;
      case "Cancelled": return <Badge variant="destructive">Cancelled</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (loading) return <div className="p-10 text-center">Loading bookings...</div>;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-headline font-bold text-primary">Booking Management</h1>
          <p className="text-muted-foreground">Manage all patient appointment requests</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-xl">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input 
          placeholder="Search by name, phone or service..." 
          className="pl-10 h-12 rounded-xl shadow-sm bg-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary/5">
        <Table>
          <TableHeader className="bg-primary text-white">
            <TableRow className="hover:bg-primary border-none">
              <TableHead className="text-white font-bold">Patient</TableHead>
              <TableHead className="text-white font-bold">Service</TableHead>
              <TableHead className="text-white font-bold">Appointment Date</TableHead>
              <TableHead className="text-white font-bold">Status</TableHead>
              <TableHead className="text-white font-bold">Created</TableHead>
              <TableHead className="text-white font-bold text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAppointments.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-20 text-muted-foreground">
                  No appointments found matching your criteria.
                </TableCell>
              </TableRow>
            ) : (
              filteredAppointments.map((a) => (
                <TableRow key={a.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell>
                    <div className="font-bold text-primary">{a.full_name}</div>
                    <div className="text-xs text-muted-foreground">{a.phone}</div>
                  </TableCell>
                  <TableCell className="text-sm">{a.service}</TableCell>
                  <TableCell>
                    <div className="text-sm font-medium">
                      {a.appointment_date ? format(new Date(a.appointment_date), 'PPP') : 'N/A'}
                    </div>
                    <div className="text-xs text-muted-foreground">{a.appointment_time || "Not specified"}</div>
                  </TableCell>
                  <TableCell>{getStatusBadge(a.status)}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">
                    {a.created_at ? format(new Date(a.created_at), 'MMM dd, HH:mm') : 'N/A'}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className="h-4 w-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-2xl">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => { setSelectedAppointment(a); setViewDialogOpen(true); }}>
                          <Eye className="mr-2 h-4 w-4" /> View Details
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => updateStatus(a.id, "Confirmed")} className="text-blue-600">
                          <CheckCircle className="mr-2 h-4 w-4" /> Confirm
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => updateStatus(a.id, "Completed")} className="text-emerald-600">
                          <CheckCircle className="mr-2 h-4 w-4" /> Complete
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => updateStatus(a.id, "Cancelled")} className="text-red-600">
                          <XCircle className="mr-2 h-4 w-4" /> Cancel
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => deleteAppointment(a.id)} className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-headline font-bold text-primary">Appointment Details</DialogTitle>
          </DialogHeader>
          {selectedAppointment && (
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Patient Name</p>
                  <p className="font-medium">{selectedAppointment.full_name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Status</p>
                  <div>{getStatusBadge(selectedAppointment.status)}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Phone</p>
                  <p className="font-medium">{selectedAppointment.phone}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Email</p>
                  <p className="font-medium truncate">{selectedAppointment.email || "N/A"}</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-bold text-muted-foreground uppercase">Treatment Requested</p>
                <p className="font-medium">{selectedAppointment.service}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Date</p>
                  <p className="font-medium">
                    {selectedAppointment.appointment_date ? format(new Date(selectedAppointment.appointment_date), 'PPP') : 'N/A'}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase">Time</p>
                  <p className="font-medium">{selectedAppointment.appointment_time || "Not specified"}</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-bold text-muted-foreground uppercase">Patient Message</p>
                <div className="p-3 bg-muted rounded-lg text-sm italic">
                  "{selectedAppointment.message || "No additional notes provided."}"
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button className="flex-1 rounded-xl bg-primary" asChild>
                  <a href={`tel:${selectedAppointment.phone}`}>
                    <Phone className="mr-2 h-4 w-4" /> Call Patient
                  </a>
                </Button>
                <Button className="flex-1 rounded-xl bg-emerald-500 hover:bg-emerald-600" asChild>
                  <a href={`https://wa.me/${selectedAppointment.phone.replace(/\D/g, '')}`} target="_blank">
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
