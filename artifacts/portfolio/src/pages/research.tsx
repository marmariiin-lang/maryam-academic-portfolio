import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const themes = [
  {
    title: "AI and Creativity in Education",
    summary: "Investigating how large language models and generative tools can act as cognitive partners rather than mere tutors, fostering creative problem-solving.",
    papers: [
      {
        title: "Generative AI as a Co-Designer in Inquiry-Based Learning: Opportunities and Tensions",
        venue: "ICLS",
        year: "2024",
        abstract: "This study explores how middle school students interact with LLMs during open-ended science inquiry. We propose a framework for 'co-design' where AI acts as a sounding board rather than an oracle, emphasizing prompt engineering as a meta-cognitive skill."
      },
      {
        title: "Prompting for Curiosity: Designing AI Interfaces that Ask More Than They Answer",
        venue: "CHI",
        year: "2023",
        abstract: "We present the design and evaluation of an educational interface that intentionally restricts direct answers, instead guiding users through Socratic questioning to uncover underlying principles."
      }
    ]
  },
  {
    title: "Computational Thinking",
    summary: "Designing environments and curricula that make computational concepts accessible, tangible, and deeply connected to human-centered problem solving.",
    papers: [
      {
        title: "Productive Failure in Block-Based Programming Environments",
        venue: "Computers & Education",
        year: "2023",
        abstract: "An empirical investigation into how intentionally designing for early struggle in Scratch programming tasks leads to more robust mental models of variable scope and control flow."
      },
      {
        title: "Beyond the Screen: Tangible Interfaces for Algorithmic Thinking",
        venue: "AERA",
        year: "2022",
        abstract: "A qualitative analysis of early childhood interactions with physical programming blocks, highlighting the role of spatial reasoning and collaborative negotiation."
      },
      {
        title: "Debugging as Sensemaking: A Linguistic Analysis of Student Discourse",
        venue: "CSCL",
        year: "2021",
        abstract: "By analyzing how students talk while debugging, we identify patterns of sensemaking that differentiate surface-level trial-and-error from deep structural comprehension."
      }
    ]
  },
  {
    title: "Learning Experience Design",
    summary: "Bridging cognitive science and user experience to create digital platforms that respect cognitive load while engaging narrative and emotional investment.",
    papers: [
      {
        title: "Mapping the Conceptual Space of Digital Literacy in K-12",
        venue: "ETR&D",
        year: "2022",
        abstract: "A systematic review of how digital literacy is conceptualized across 15 years of literature, proposing a unified framework balancing technical skill with ethical reasoning."
      },
      {
        title: "The Affective Dimensions of Dashboard Design in Learning Analytics",
        venue: "LAK",
        year: "2021",
        abstract: "How do students feel when confronted with their own learning data? We evaluate three dashboard paradigms to understand the impact of visual design on learner self-efficacy."
      }
    ]
  }
];

export function Research() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h1 className="text-5xl font-serif mb-6 text-foreground">Research</h1>
          <p className="text-xl text-muted-foreground font-light max-w-3xl leading-relaxed">
            My work investigates how emerging technologies shift the cognitive and social dimensions of learning. I am particularly interested in designing moments of productive friction that lead to deeper understanding.
          </p>
        </motion.div>

        <div className="space-y-32">
          {themes.map((theme, idx) => (
            <motion.section 
              key={theme.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-12">
                <h2 className="text-3xl font-serif mb-4 text-foreground">{theme.title}</h2>
                <p className="text-lg text-foreground/80 max-w-3xl">{theme.summary}</p>
              </div>

              <div className="grid gap-6">
                {theme.papers.map((paper, pIdx) => (
                  <div key={pIdx} className="group bg-card hover:bg-muted/30 border border-border/50 rounded-xl p-8 transition-colors duration-300">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 font-medium">
                        {paper.venue}
                      </Badge>
                      <span className="text-sm font-medium text-muted-foreground">{paper.year}</span>
                    </div>
                    <h3 className="text-xl font-serif text-foreground mb-4 pr-8">
                      {paper.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-4xl">
                      {paper.abstract}
                    </p>
                    <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                      Read Publication <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
