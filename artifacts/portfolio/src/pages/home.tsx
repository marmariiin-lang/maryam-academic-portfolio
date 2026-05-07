import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, ExternalLink, Download } from "lucide-react";
import { Linkedin, Github, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Home() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="pt-24 pb-32 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="max-w-2xl"
            >
              <motion.h1 variants={item} className="text-5xl md:text-7xl font-serif text-foreground mb-6 leading-tight">
                Maryam Babaee
              </motion.h1>
              <motion.div variants={item} className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                PhD Researcher <span className="text-primary/40 px-2">•</span> Educational Technology <span className="text-primary/40 px-2">•</span> Learning Experience Designer
              </motion.div>
              <motion.p variants={item} className="text-lg text-foreground/80 mb-10 leading-relaxed">
                Exploring the intersection of artificial intelligence, computational thinking, and human learning. I design digital environments that foster curiosity and turn productive failure into lasting insight.
              </motion.p>
              <motion.div variants={item} className="flex flex-wrap gap-4 items-center">
                <Button asChild size="lg" className="rounded-full px-8 shadow-sm">
                  <Link href="/research">View Research</Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full shadow-sm hover:text-primary hover:border-primary/30 transition-colors" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full shadow-sm hover:text-primary hover:border-primary/30 transition-colors" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer"><GraduationCap className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full shadow-sm hover:text-primary hover:border-primary/30 transition-colors" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></a>
                </Button>
                <Button variant="ghost" className="rounded-full text-muted-foreground hover:text-foreground" asChild>
                  <a href="#"><Download className="mr-2 h-4 w-4" /> Download CV</a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto md:ml-auto w-full max-w-md aspect-[3/4]"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-3 transform origin-bottom-left transition-transform hover:rotate-6 duration-500"></div>
              <img 
                src="/hero-portrait.png" 
                alt="Maryam Babaee" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl grayscale-[20%] sepia-[10%] hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Strip */}
      <section className="border-y border-border/40 bg-muted/30 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium tracking-wide uppercase text-muted-foreground">
            <span>AI & Education</span>
            <span className="hidden md:inline text-border">•</span>
            <span>Computational Thinking</span>
            <span className="hidden md:inline text-border">•</span>
            <span>Learning Experience Design</span>
            <span className="hidden lg:inline text-border">•</span>
            <span className="hidden sm:inline">Digital Environments</span>
            <span className="hidden lg:inline text-border">•</span>
            <span className="hidden md:inline">Productive Failure</span>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="pt-32 pb-16 container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif mb-4 text-foreground">Recent Research</h2>
            <p className="text-muted-foreground">Exploring new paradigms in digital pedagogy.</p>
          </div>
          <Link href="/research" className="hidden md:flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Generative AI as a Co-Designer in Inquiry-Based Learning",
              venue: "ICLS 2024",
              type: "Conference Paper",
            },
            {
              title: "Productive Failure in Block-Based Programming Environments",
              venue: "Computers & Education",
              type: "Journal Article",
            },
            {
              title: "Mapping the Conceptual Space of Digital Literacy in K-12",
              venue: "AERA 2023",
              type: "Symposium",
            }
          ].map((item, i) => (
            <Link key={i} href="/research" className="group block h-full">
              <div className="bg-card border border-border/50 rounded-xl p-8 h-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="text-xs font-semibold tracking-wider text-primary mb-4 uppercase">{item.type}</div>
                <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors mb-4 line-clamp-3">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/40">
                  <span className="text-sm text-muted-foreground">{item.venue}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/research" className="inline-flex items-center text-primary font-medium">
            View All Research <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif mb-4 text-foreground">Selected Projects</h2>
              <p className="text-muted-foreground">Bridging theory and instructional practice.</p>
            </div>
            <Link href="/projects" className="hidden md:flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
              View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Immersive Learning VR",
                desc: "A virtual reality environment designed to teach complex spatial reasoning.",
                img: "/proj-vr.png"
              },
              {
                title: "LogicBlocks App",
                desc: "Mobile application introducing computational thinking through narrative puzzles.",
                img: "/proj-app.png"
              },
              {
                title: "Digital Literacy Hub",
                desc: "Open-source curriculum materials for integrating tech ethics in classrooms.",
                img: "/proj-literacy.png"
              }
            ].map((item, i) => (
              <Link key={i} href="/projects" className="group block">
                <div className="rounded-xl overflow-hidden bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-24 container mx-auto px-6">
        <h2 className="text-3xl font-serif mb-12 text-center text-foreground">Selected Publications</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            "Babaee, M., & Smith, J. (2024). Generative AI as a Co-Designer in Inquiry-Based Learning: Opportunities and Tensions. Proceedings of the International Conference of the Learning Sciences (ICLS).",
            "Babaee, M., Chen, L., & Davis, R. (2023). Productive Failure in Block-Based Programming Environments: A Multi-Modal Analysis. Computers & Education, 192, 104652.",
            "Johnson, A., & Babaee, M. (2022). Mapping the Conceptual Space of Digital Literacy in K-12: A Systematic Review. Educational Educational Technology Research and Development, 70(3), 855-882."
          ].map((citation, i) => (
            <div key={i} className="flex gap-4 pl-4 border-l-2 border-primary/20 hover:border-primary transition-colors">
              <BookOpen className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
              <p className="text-foreground/90 leading-relaxed font-serif tracking-wide">{citation}</p>
            </div>
          ))}
          <div className="text-center pt-8">
            <Button variant="outline" asChild className="rounded-full">
              <Link href="/cv">View Full CV</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
