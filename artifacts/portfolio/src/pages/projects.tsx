import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Immersive Learning Environment",
    category: "Virtual Reality",
    desc: "A prototype VR application designed to teach complex spatial reasoning and cellular biology through interactive simulation.",
    role: "Lead Designer & Researcher",
    tools: ["Unity", "C#", "Figma"],
    img: "/proj-vr.png"
  },
  {
    title: "LogicBlocks App",
    category: "Educational Tech",
    desc: "Mobile application introducing computational thinking to middle schoolers through narrative-driven logic puzzles.",
    role: "UX Researcher",
    tools: ["React Native", "User Testing"],
    img: "/proj-app.png"
  },
  {
    title: "Digital Literacy Hub",
    category: "Curriculum Design",
    desc: "Open-source curriculum materials and interactive web platform for integrating tech ethics in classrooms.",
    role: "Instructional Designer",
    tools: ["Webflow", "Storyline"],
    img: "/proj-literacy.png"
  },
  {
    title: "Ecosystems Exhibit",
    category: "Museum Experience",
    desc: "Interactive science museum exhibit exploring local ecosystems through tangible computational interfaces.",
    role: "Co-Designer",
    tools: ["Arduino", "Processing", "Physical Computing"],
    img: "/proj-museum.png"
  },
  {
    title: "Socratic AI Tutor",
    category: "Prototype",
    desc: "An experimental interface using LLMs to prompt student reflection rather than providing direct answers.",
    role: "Product Designer",
    tools: ["Python", "OpenAI API", "React"],
    img: "/proj-ai.png"
  },
  {
    title: "Productive Failure Redesign",
    category: "Instructional Design",
    desc: "Complete pedagogical redesign of an intro CS course to incorporate intentional struggle before direct instruction.",
    role: "Curriculum Lead",
    tools: ["Canvas LMS", "Learning Analytics"],
    img: "/proj-literacy.png"
  }
];

export function Projects() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-serif mb-6 text-foreground">Projects & Design</h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Applied work translating learning sciences research into tangible products, interfaces, and curricula.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[16/9] overflow-hidden relative bg-muted">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-xs font-semibold tracking-wider text-primary mb-3 uppercase">
                  {project.category}
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>
                <div className="space-y-4 border-t border-border/40 pt-6 mt-auto">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-2">Role</span>
                    <span className="text-sm font-medium text-foreground/80">{project.role}</span>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tools.map(tool => (
                        <Badge key={tool} variant="outline" className="bg-background text-xs font-normal border-border/60">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
