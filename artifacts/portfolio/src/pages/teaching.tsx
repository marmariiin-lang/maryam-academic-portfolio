import { motion } from "framer-motion";
import { BookOpen, Users, Presentation, Lightbulb } from "lucide-react";

const sections = [
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "University Teaching",
    items: [
      {
        title: "Instructor of Record: Introduction to Educational Technology",
        period: "Fall 2023, Spring 2024",
        desc: "Redesigned syllabus for 60+ undergraduate students. Integrated active learning modules and project-based assessments focusing on digital equity."
      },
      {
        title: "Teaching Assistant: Human-Computer Interaction for Learning",
        period: "Fall 2022",
        desc: "Led weekly discussion sections, graded design assignments, and mentored graduate students through the iterative design process."
      }
    ]
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "Curriculum Design",
    items: [
      {
        title: "Computational Thinking for K-8 Educators",
        period: "Summer 2023",
        desc: "Developed a comprehensive online module sequence for pre-service teachers to integrate coding concepts without screens."
      },
      {
        title: "Ethics in AI Workshop Series",
        period: "Spring 2023",
        desc: "Designed a 4-part interactive workshop for high schoolers exploring algorithmic bias through roleplay and data visualization."
      }
    ]
  },
  {
    icon: <Presentation className="h-6 w-6 text-primary" />,
    title: "Professional Development",
    items: [
      {
        title: "Designing for Productive Failure",
        period: "2024",
        desc: "Facilitated faculty development seminar on restructuring assignments to encourage intellectual risk-taking."
      },
      {
        title: "Technology Integration Clinic",
        period: "2021 - 2022",
        desc: "Provided one-on-one instructional design consultation for faculty moving courses to hybrid formats."
      }
    ]
  }
];

export function Teaching() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl font-serif mb-6 text-foreground">Teaching & Design</h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            I approach teaching as a design challenge, crafting environments where learners feel safe to experiment, fail, and construct knowledge collaboratively.
          </p>
        </motion.div>

        <div className="space-y-24">
          {sections.map((section, sIdx) => (
            <motion.section 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-10 pb-4 border-b border-border/50">
                <div className="bg-primary/10 p-3 rounded-xl">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-serif text-foreground">{section.title}</h2>
              </div>
              
              <div className="space-y-12 pl-4 md:pl-10 border-l-2 border-muted/50 ml-6 md:ml-8">
                {section.items.map((item, iIdx) => (
                  <div key={iIdx} className="relative">
                    <div className="absolute -left-[21px] md:-left-[45px] top-1.5 w-3 h-3 rounded-full bg-primary/20 border-2 border-background ring-2 ring-primary/10"></div>
                    <div className="mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                      <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
                      <span className="text-sm font-medium text-primary tracking-wide">{item.period}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
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
