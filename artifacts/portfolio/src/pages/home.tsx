import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, ExternalLink, Download, GraduationCap, FileText } from "lucide-react";
import { Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const researchInterests = [
  "Generative AI in Education",
  "AI & Hardware",
  "Engineering Education",
  "CS Education",
  "Large Language Models",
  "Educational Data Mining",
  "Human-Centered AI",
  "Feedback in Online Learning",
  "Argumentation",
  "Human-computer Interaction",
  "Teacher Professional Development ",
  "Computational Thinking",
  "Learning Experience Design",
  "Digital Learning Environments",
  "Learning Sciences",
  "Productive Failure",
  "Learning Analytics",
  "Instructional Design",
  "Technology-Enhanced Learning",
];

const publications = [
  {
     
    citation: ( <> "Rahimi, S., <strong>Babaee, M.</strong>, Esmaeiligoujar, S., & Dede, C. (2026). Generative Artificial Intelligence and Creativity in K–12 Education: A Systematic Scoping Review." </> ),
    venue: "The Oxford Handbook of Human Creativity and Generative Artificial Intelligence in Education",
    link: "https://osf.io/download/npd9f/",
  },
   {
    citation: ( <> "Rahimi, S., Dede, C., Esmaeiligoujar, S., & <strong>Babaee, M.</strong> (2025). Augmenting human creativity with responsible and ethical use of generative AI." </> ),
    venue: "Generative Artificial Intelligence and Creativity: Precautions, perspectives, and possibilities, 87.",
    link: "https://books.google.com/books?hl=en&lr=&id=KERrEQAAQBAJ&oi=fnd&pg=PA87&dq=%09Augmenting+human+creativity+with+responsible+and+ethical+use+of+generative+AI&ots=p0TI1Got_u&sig=XKlnlHCr6gt5V3jZpDKtDEcy72s#v=onepage&q=Augmenting%20human%20creativity%20with%20responsible%20and%20ethical%20use%20of%20generative%20AI&f=false", 
  },
  {
    citation: ( <> "Rhaimi, S., Ercan, D., Gao, R., Esmaeiligoujar, S., <strong>Babaee, M.</strong>, Li, H., ... & Botelho, A. (2025, July).ProductiveMath: A Generative-AI-Powered App to Support Productive Failure Teaching. ProductiveMath: A Generative-AI-Powered App to Support Productive Failure Teaching. " </> ),
    venue: "In International Conference on Artificial Intelligence in Education (pp. 344-351). Cham: Springer Nature Switzerland.",
    link: "https://www.researchgate.net/profile/Hongming-Li-10/publication/391399715_ProductiveMath_A_Generative-AI-Powered_App_to_Support_Productive_Failure_Teaching/links/6880814eb3294610e9b92e09/ProductiveMath-A-Generative-AI-Powered-App-to-Support-Productive-Failure-Teaching.pdf", 
  },
  
  {
    citation: ( <>  "Khoshgoftar, Z., <strong>Babaee, M.</strong>, Rouzbahani, A. K., & Kalantarion, M. (2025). Educational data mining in medical education: A five-level approach. </> ) ",
    venue: "Journal of Education and Health Promotion, 14(1), 24.",
    link: "https://journals.lww.com/jehp/fulltext/2025/01310/educational_data_mining_in_medical_education__a.24.aspx",
  },
    {
    citation: ( <> "<strong>Babaee, M.</strong>, Rahimi, S., & Esmaeiligoujar, S. (2024). Fostering K-12 Students’ Computational Thinking Skills Using Collaborative Technology-rich Learning Environments: A Systematic Review. </> )",
    venue: "n Proceedings of the 18th International Conference of the Learning Sciences-ICLS 2024, pp. 786-792. International Society of the Learning Sciences.",
    link: "https://repository.isls.org/bitstream/1/11170/1/ICLS2024_786-792.pdf",
  },
  {
    citation: ( <>  "Noroozi, O., Banihashem, S. K., Taghizadeh Kerman, N., Parvaneh Akhteh Khaneh, <strong>Babaee, M.</strong>, M., Ashrafi, H., & Biemans, H. J. (2023). Gender differences in students’ argumentative essay writing, peer review performance and uptake in online learning environments. </> )",
    venue: "Interactive Learning Environments, 31(10), 6302-6316.",
    link: "https://www.tandfonline.com/doi/full/10.1080/10494820.2022.2034887",
  },
 
   {
    citation: ( <>  "Ranjbaran, F., <strong>Babaee, M.</strong>, Parvaneh Akhteh Khaneh, M., Gohari, M., Daneshvar Ghorbani, B., Taghizadeh Kerman, N., ... & Noroozi, O. (2023). Students' Argumentation Performance in Online Learning Environments: Bridging Culture and Gender. </> )",
    venue: "International Journal of Technology in Education 6, no. 3 (2023): 434-454.",
    link: "https://journals.lww.com/jehp/fulltext/2025/01310/educational_data_mining_in_medical_education__a.24.aspx",
  },
   {
    citation: ( <> "Rahimi, S., Shute, V., Khodabandelou, R., Kuba, R., <strong>Babaee, M.</strong>, & Esmaeiligoujar, S. (2023). Stealth assessment: A systematic review of the literature." </> ),
    venue: "In Proceedings of the 17th International Conference of the Learning Sciences-ICLS 2023, pp. 1977-1978. International Society of the Learning Sciences.",
    link: "https://repository.isls.org/bitstream/1/10118/1/ICLS2023_1977-1978.pdf",
  },
];

const recentResearch = [
  {
    title: "Generative AI as a Co-Designer in Inquiry-Based Learning",
    venue: "ICLS 2024",
    role: "Research Assistant",
  },
  {
    title: "Productive Failure in Block-Based Programming Environments",
    venue: "Computers & Education",
    role: "Co-Investigator",
  },
  {
    title: "Mapping the Conceptual Space of Digital Literacy in K-12",
    venue: "AERA 2023",
    role: "Research Assistant",
  },
];

const projects = [
  {
    title: "Immersive Learning VR",
    desc: "A virtual reality environment designed to teach complex spatial reasoning.",
    img: "/proj-vr.png",
  },
  {
    title: "LogicBlocks App",
    desc: "Mobile application introducing computational thinking through narrative puzzles.",
    img: "/proj-app.png",
  },
  {
    title: "Digital Literacy Hub",
    desc: "Open-source curriculum materials for integrating tech ethics in classrooms.",
    img: "/proj-literacy.png",
  },
];

const teachingItems = [
  {
    tag: "University Teaching",
    title: "Instructor of Record",
    desc: "Redesigned Introduction to Educational Technology for 60+ undergraduates, integrating active learning modules and project-based assessments.",
    detail: "U of Toronto · Fall 2023 & Spring 2024",
  },
  {
    tag: "Curriculum Design",
    title: "Computational Thinking for K-8 Educators",
    desc: "Developed an online module sequence for pre-service teachers to embed coding concepts in everyday classroom practice — no screens required.",
    detail: "Summer 2023",
  },
  {
    tag: "Professional Development",
    title: "Designing for Productive Failure",
    desc: "Facilitated a faculty seminar on restructuring assignments to encourage intellectual risk-taking and reward the process of working through difficulty.",
    detail: "2024 Workshop Series",
  },
];

export function Home() {
  return (
    <div className="pb-24">

      {/* ── Hero ── */}
      <section id="home-hero" className="pt-24 pb-32 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
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
                  <a href="https://www.linkedin.com/in/maryambabaee" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full shadow-sm hover:text-primary hover:border-primary/30 transition-colors" asChild>
                  <a href="https://scholar.google.com/citations?user=NlU4lCcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar"><GraduationCap className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full shadow-sm hover:text-primary hover:border-primary/30 transition-colors" asChild>
                  <a href="https://github.com/marmariiin-lang" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-5 w-5" /></a>
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
              <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-3 transform origin-bottom-left transition-transform hover:rotate-6 duration-500" />
              <img
                src="/maryam.jpg"
                alt="Maryam Babaee"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl grayscale-[20%] sepia-[10%] hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Research Interests ── */}
      <section className="border-y border-border/40 bg-muted/20 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl font-serif text-foreground mb-2">Research Interests</h2>
            <p className="text-muted-foreground text-sm">The themes that run through my work across disciplines.</p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {researchInterests.map((interest) => (
              <motion.span
                key={interest}
                variants={item}
                className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground/80 hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {interest}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Selected Publications ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <h2 className="text-3xl font-serif text-foreground mb-2">Selected Publications</h2>
              <p className="text-muted-foreground">Peer-reviewed work from conferences and journals.</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="https://scholar.google.com/citations?user=NlU4lCcAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-4 py-2 hover:border-primary"
              >
                <GraduationCap className="h-4 w-4" />
                Google Scholar
              </a>
              <Link href="/research" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                All Research <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <div className="space-y-6">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08 }}
                className="group flex gap-5 items-start pl-5 border-l-2 border-border hover:border-primary transition-colors duration-300"
              >
                <div className="flex-1">
                  <p className="text-foreground/90 leading-relaxed font-serif mb-2">{pub.citation}</p>
                  <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase">{pub.venue}</span>
                </div>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-1"
                  aria-label="Open publication"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Research (as Assistant Researcher) ── */}
      <section id="section-research" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <h2 className="text-3xl font-serif text-foreground mb-2">Recent Research Contributions</h2>
              <p className="text-muted-foreground">Research I have contributed to as a collaborator and assistant researcher.</p>
            </div>
            <Link href="/research" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentResearch.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href="/research" className="group block h-full">
                  <div className="bg-card border border-border/50 rounded-xl p-8 h-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="inline-block text-xs font-semibold tracking-wider text-primary mb-4 uppercase bg-primary/8 px-2 py-1 rounded-md">
                      {r.role}
                    </div>
                    <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors mb-4 line-clamp-3">
                      {r.title}
                    </h3>
                    <div className="flex items-center justify-between pt-6 border-t border-border/40">
                      <span className="text-sm text-muted-foreground">{r.venue}</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/research" className="inline-flex items-center text-primary font-medium">
              View All Research <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Selected Projects ── */}
      <section id="section-projects" className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <h2 className="text-3xl font-serif text-foreground mb-2">Selected Projects</h2>
              <p className="text-muted-foreground">Bridging learning sciences research and tangible design practice.</p>
            </div>
            <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0">
              View Portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href="/projects" className="group block">
                  <div className="rounded-xl overflow-hidden bg-card border border-border/50 shadow-sm hover:shadow-lg transition-all duration-500">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                      <img
                        src={proj.img}
                        alt={proj.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-primary transition-colors">{proj.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">{proj.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center text-primary font-medium">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Teaching & Design ── */}
      <section id="section-teaching" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <h2 className="text-3xl font-serif text-foreground mb-2">Teaching & Design</h2>
              <p className="text-muted-foreground">Designing learning environments where struggle leads to insight.</p>
            </div>
            <Link href="/teaching" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teachingItems.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href="/teaching" className="group block h-full">
                  <div className="bg-card border border-border/50 rounded-xl p-8 h-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="text-xs font-semibold tracking-wider text-primary mb-4 uppercase">{t.tag}</div>
                    <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors mb-3">{t.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{t.desc}</p>
                    <div className="mt-6 pt-4 border-t border-border/40 text-xs text-muted-foreground font-medium tracking-wide">{t.detail}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/teaching" className="inline-flex items-center text-primary font-medium">
              View All Teaching <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Full CV ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-serif text-foreground mb-3">Curriculum Vitae</h2>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Full academic record including education, research experience, publications, conference presentations, teaching, and awards.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/cv">
                  <FileText className="mr-2 h-4 w-4" />
                  View Full CV
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="#" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
