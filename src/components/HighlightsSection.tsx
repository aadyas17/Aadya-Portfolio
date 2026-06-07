import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, FileText, Trophy } from "lucide-react";

const highlights = [
  { icon: GraduationCap, text: "Information Science Student (CGPA: 9.05)" },
  { icon: Briefcase, text: "SAP BTP & ABAP Internship Experience" },
  { icon: FileText, text: "Research Papers Accepted at AICCoNS 2026 & IDBA 2026" },
  { icon: Trophy, text: "Selected for ACM India Summer School 2026, IIT Guwahati" },
  { icon: Award, text: "Selected for OFSS Associate Consultant Position" },
];

const HighlightsSection = () => {
  return (
    <section id="highlights" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-mono text-primary/70 tracking-widest uppercase mb-2">Highlights</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">Highlights</h2>
        <p className="text-sm text-muted-foreground mb-8">A quick overview of my academic background, experience, and achievements.</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-xl p-4 flex items-start gap-3 hover:glow-lavender transition-all duration-300"
            >
              <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <h.icon size={17} />
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed pt-1.5">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HighlightsSection;
