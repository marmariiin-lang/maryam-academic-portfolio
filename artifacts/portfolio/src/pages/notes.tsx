import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    title: "When AI meets curiosity in the classroom",
    date: "October 12, 2024",
    category: "Reflections",
    preview: "We often design AI to answer questions as quickly and accurately as possible. But what happens when we design it to withhold information and provoke deeper inquiry instead?"
  },
  {
    title: "Reflections from ICLS 2024",
    date: "July 05, 2024",
    category: "Conference",
    preview: "Three days of intense discussion about embodied cognition, spatial reasoning, and the future of educational technology left me with more questions than answers."
  },
  {
    title: "On Failure as Pedagogy",
    date: "April 22, 2024",
    category: "Design Theory",
    preview: "The concept of 'productive failure' is elegant in theory but messy in practice. How do we design grading rubrics that genuinely reward risk-taking?"
  },
  {
    title: "Reading: How People Learn revisited",
    date: "February 10, 2024",
    category: "Literature",
    preview: "Re-reading the classic Bransford text twenty years later reveals both how far the learning sciences have come, and how deeply entrenched some misconceptions remain."
  },
  {
    title: "What speculative fiction taught me about learning design",
    date: "November 18, 2023",
    category: "Interdisciplinary",
    preview: "Ursula K. Le Guin's worldbuilding techniques offer surprisingly practical frameworks for instructional designers creating narrative-driven digital environments."
  },
  {
    title: "The gap between instructional design theory and practice",
    date: "September 04, 2023",
    category: "Industry",
    preview: "Moving from academic research into industry product development requires translating dense cognitive theories into pragmatic, rapid-iteration sprints."
  }
];

export function Notes() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl font-serif mb-6 text-foreground">Notes & Writing</h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            Informal reflections on learning sciences, design practice, literature, and the intersections between them.
          </p>
        </motion.div>

        <div className="space-y-12">
          {posts.map((post, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative flex flex-col md:flex-row gap-6 md:gap-12 items-start py-8 border-b border-border/50 hover:bg-muted/20 -mx-6 px-6 rounded-2xl transition-colors duration-300"
            >
              <div className="w-48 shrink-0 pt-2">
                <span className="block text-sm font-medium text-muted-foreground mb-2">{post.date}</span>
                <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/10 font-normal">
                  {post.category}
                </Badge>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors">
                  <a href="#" className="before:absolute before:inset-0">
                    {post.title}
                  </a>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.preview}
                </p>
                <div className="flex items-center text-sm font-medium text-primary">
                  Read Note <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
