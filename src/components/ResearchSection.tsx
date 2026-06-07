import { motion } from "framer-motion";
import { FileText } from "lucide-react";

type ResearchItem = {
  title: string;
  points: string[];
  icon?: any;
};

const research: ResearchItem[] = [
  {
    title: "Smart Health Monitoring System",
    points: [
      "Accepted and presented at AICCoNS 2026 (AIP Track)",
      "Proceedings submitted to AIP Publishing",
    ],
  },
  {
    title: "Decentralized Student Portfolio Management System",
    points: [
      "Accepted at IDBA 2026",
      "Accepted papers to be submitted to Springer LAIS Series",
    ],
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-mono text-primary/70 tracking-widest uppercase mb-2">Research</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">Research & Publications</h2>
        <p className="text-sm italic text-muted-foreground mb-10">Accepted papers, conferences, and academic programs.</p>

        <div className="grid gap-4">
          {research.map((r, i) => {
            const Icon = r.icon || FileText;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-5 md:p-6 hover:glow-lavender transition-all duration-300"
              >
                <h3 className="font-sans font-semibold text-foreground flex items-center gap-2 mb-3">
                  <Icon size={16} className="text-primary" />
                  {r.title}
                </h3>
                <ul className="space-y-1.5">
                  {r.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default ResearchSection;
