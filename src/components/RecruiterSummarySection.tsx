import { motion } from "framer-motion";
import { Target } from "lucide-react";

const RecruiterSummarySection = () => {
  return (
    <section id="recruiter-summary" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-mono text-primary/70 tracking-widest uppercase mb-2">For Recruiters</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">Currently Seeking Opportunities</h2>
        <p className="text-sm text-muted-foreground mb-8">A quick note for hiring teams.</p>

        <div className="glass rounded-2xl p-6 md:p-8 glow-lavender flex gap-4 items-start">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Target size={18} />
          </div>
          <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
            I am actively seeking entry-level opportunities in <span className="text-primary font-medium">Data Analytics, AI/ML, Consulting, and Technology</span> roles. My experience includes Python, SQL, Machine Learning, Data Visualization, SAP ABAP, and business problem-solving through academic projects and internships.
          </p>
        </div>

      </motion.div>
    </section>
  );
};

export default RecruiterSummarySection;
