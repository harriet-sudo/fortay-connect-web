import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to Supabase
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "We'll be in touch shortly." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main className="py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
              <h1 className="font-display text-4xl font-bold text-foreground">Let's talk</h1>
              <p className="mt-4 text-muted-foreground">
                Whether you're exploring options or ready to start a project, we'd love to hear from you.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@fortayconnect.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Birmingham, United Kingdom</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button size="lg" variant="outline" asChild>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book a Walkthrough <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border p-8">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Your company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required rows={4} placeholder="How can we help?" />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
