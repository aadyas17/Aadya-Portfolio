import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, MapPin, GraduationCap } from "lucide-react";
import { useEffect, useState } from "react";
import aadyaPhoto from "@/assets/aadya-photo.jpg";

const ROLES = [
  "Information Science Student",
  "Data Analytics",
  "AI / ML",
  "SAP ABAP",
];

const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[index];
    const atEnd = !deleting && sub === current;
    const atStart = deleting && sub === "";

    if (atEnd) {
      const t = setTimeout(() => setDeleting(true), 1400);
      return () => clearTimeout(t);
    }
    if (atStart) {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
      return;
    }
    const t = setTimeout(() => {
      setSub((s) =>
        deleting ? current.substring(0, s.length - 1) : current.substring(0, s.length + 1)
      );
    }, deleting ? 45 : 75);
    return () => clearTimeout(t);
  }, [sub, deleting, index]);

  return (
    <span className="text-primary">
      {sub}
      <span className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-1 animate-pulse" />
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full grid md:grid-cols-2 gap-8 items-center">
        {/* Left — Text */}
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gradient">Aadya</span>{" "}
            <span className="text-foreground">Shrivastava</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-base md:text-lg font-medium mb-4 leading-snug min-h-[1.6em]">
            <Typewriter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-muted-foreground mb-5">
            <span className="inline-flex items-center gap-1.5"><MapPin size={13} className="text-primary" /> Bengaluru, India</span>
            <span className="inline-flex items-center gap-1.5"><GraduationCap size={13} className="text-primary" /> CGPA: 9.05</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
            Building data-driven solutions using Python, SQL, Machine Learning, and SAP technologies. Passionate about solving real-world problems through analytics and technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3">

            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
              <Download size={15} /> Resume
            </a>
            <a
              href="https://github.com/aadyas17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-border/50 text-foreground font-medium text-sm hover:border-primary/50 transition-all">
              <Github size={15} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aadya-shrivastava-205aa8282"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-border/50 text-foreground font-medium text-sm hover:border-primary/50 transition-all">
              <Linkedin size={15} /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex justify-center md:justify-end">

          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass glow-lavender flex items-center justify-center overflow-hidden">
            <img src={aadyaPhoto} alt="Aadya Shrivastava" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#highlights"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float">

        <ChevronDown size={24} />
      </motion.a>
    </section>);

};

export default HeroSection;
