import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CV() {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-8 border-b border-border"
        >
          <div>
            <h1 className="text-5xl font-serif mb-4 text-foreground">Curriculum Vitae</h1>
            <p className="text-xl text-muted-foreground font-light">Maryam Babaee</p>
          </div>
          <Button asChild className="shrink-0 gap-2">
            <a href="#" download>
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </motion.div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-serif text-foreground mb-8 uppercase tracking-wider text-primary">Education</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-[1fr_3fr] gap-4">
                <div className="text-muted-foreground font-medium">2020 – Present</div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">Ph.D. in Educational Technology</h3>
                  <p className="text-foreground/80 mb-2">University of Toronto</p>
                  <p className="text-sm text-muted-foreground">Dissertation: "Designing for Productive Failure in Digital Computing Environments"</p>
                </div>
              </div>
              <div className="grid md:grid-cols-[1fr_3fr] gap-4">
                <div className="text-muted-foreground font-medium">2017 – 2019</div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">M.Sc. in Human-Computer Interaction</h3>
                  <p className="text-foreground/80 mb-2">Carnegie Mellon University</p>
                </div>
              </div>
              <div className="grid md:grid-cols-[1fr_3fr] gap-4">
                <div className="text-muted-foreground font-medium">2013 – 2017</div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">B.Sc. in Computer Software Engineering</h3>
                  <p className="text-foreground/80 mb-2">University of Waterloo</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-foreground mb-8 uppercase tracking-wider text-primary">Research Experience</h2>
            <div className="space-y-8">
              <div className="grid md:grid-cols-[1fr_3fr] gap-4">
                <div className="text-muted-foreground font-medium">2020 – Present</div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">Graduate Research Assistant</h3>
                  <p className="text-foreground/80 mb-2">Cognitive Design Lab, University of Toronto</p>
                  <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2">
                    <li>Led design-based research studies investigating cognitive load in VR learning environments.</li>
                    <li>Developed mixed-methods evaluation frameworks combining interaction logs with clinical interviews.</li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-[1fr_3fr] gap-4">
                <div className="text-muted-foreground font-medium">2019 – 2020</div>
                <div>
                  <h3 className="text-lg font-medium text-foreground">Learning Experience Designer</h3>
                  <p className="text-foreground/80 mb-2">EdTech Innovations Inc.</p>
                  <ul className="list-disc list-outside ml-4 text-sm text-muted-foreground space-y-2">
                    <li>Designed interactive curriculum for middle-school computational thinking programs.</li>
                    <li>Conducted usability testing with over 200 students.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-foreground mb-8 uppercase tracking-wider text-primary">Select Publications</h2>
            <div className="space-y-6">
              <div className="pl-4 border-l-2 border-border">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">Babaee, M.</span>, & Smith, J. (2024). Generative AI as a Co-Designer in Inquiry-Based Learning: Opportunities and Tensions. <span className="italic">Proceedings of the International Conference of the Learning Sciences (ICLS)</span>.
                </p>
              </div>
              <div className="pl-4 border-l-2 border-border">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">Babaee, M.</span>, Chen, L., & Davis, R. (2023). Productive Failure in Block-Based Programming Environments: A Multi-Modal Analysis. <span className="italic">Computers & Education</span>, 192, 104652.
                </p>
              </div>
              <div className="pl-4 border-l-2 border-border">
                <p className="text-sm leading-relaxed">
                  Johnson, A., & <span className="font-semibold text-foreground">Babaee, M.</span> (2022). Mapping the Conceptual Space of Digital Literacy in K-12: A Systematic Review. <span className="italic">Educational Technology Research and Development</span>, 70(3), 855-882.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-foreground mb-8 uppercase tracking-wider text-primary">Skills & Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-foreground mb-4">Research & Design</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Design-Based Research, Interaction Analysis, Usability Testing, Cognitive Task Analysis, Wireframing, Rapid Prototyping, Curriculum Design.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-4">Technical</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Python, JavaScript/React, R (Data Analysis), Figma, Unity (C#), Canvas LMS, Webflow.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
