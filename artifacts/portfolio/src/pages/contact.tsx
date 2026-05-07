import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, GraduationCap } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-serif mb-6 text-foreground">Get in Touch</h1>
            <p className="text-lg text-muted-foreground font-light mb-10 leading-relaxed">
              I am always open to discussing research collaborations, design consulting opportunities, or engaging conversations about the future of learning technologies.
            </p>
            
            <div className="space-y-6 mb-12">
              <a href="mailto:maryam.babaee@university.edu" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="bg-muted w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-medium tracking-wide">maryam.babaee@university.edu</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="bg-card border border-border p-4 rounded-xl hover:border-primary hover:text-primary transition-colors text-muted-foreground">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="bg-card border border-border p-4 rounded-xl hover:border-primary hover:text-primary transition-colors text-muted-foreground">
                <GraduationCap className="h-6 w-6" />
              </a>
              <a href="#" className="bg-card border border-border p-4 rounded-xl hover:border-primary hover:text-primary transition-colors text-muted-foreground">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm"
          >
            <h2 className="text-2xl font-serif mb-6">Send a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Doe" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="jane@example.com" type="email" {...field} className="bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we collaborate?" 
                          className="min-h-[120px] bg-background resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
