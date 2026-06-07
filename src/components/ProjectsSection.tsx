import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import resumeAnalyzerImg from "@/assets/project-resume-analyzer.png";
import attendanceImg from "@/assets/project-attendance.png";
import imageEditorImg from "@/assets/project-image-editor.png";
import waterborneImg from "@/assets/project-waterborne.png";

type ProjectLinks = { live?: string; github: string };

const projects: {
  title: string;
  problem: string;
  tech: string[];
  impact: string;
  image: string;
  links: ProjectLinks;
}[] = [
  {
    title: "AI Resume Analyzer & Job Recommender",
    problem: "Helps recruiters and candidates match resumes to job descriptions using NLP and surface skill gaps.",
    tech: ["Python", "Transformers", "HuggingFace", "BERT", "NLP"],
    impact: "Semantic resume-JD matching with skill gap analysis to reduce manual screening time.",
    image: resumeAnalyzerImg,
    links: { github: "https://github.com/aadyas17/Resume-analyzer-and-Job-Recommender" },
  },
  {
    title: "Real-Time Face Recognition Attendance",
    problem: "Replaces manual attendance with a real-time facial recognition system for classrooms.",
    tech: ["Python", "OpenCV", "Pandas", "Computer Vision"],
    impact: "Over 90% recognition accuracy with automated logging and reporting.",
    image: attendanceImg,
    links: { github: "https://github.com/aadyas17/Attendance-Management-System-using-Face-Recognition" },
  },

  {
    title: "Pro Image Editor",
    problem: "A fully browser-based image editor so users can crop, filter, and adjust images without installs.",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API", "REST APIs"],
    impact: "10+ editing tools delivered entirely in the browser with zero install.",
    image: imageEditorImg,
    links: {
      live: "https://image-editor-self-kappa.vercel.app/",
      github: "https://github.com/aadyas17/Pro-Image-Editor",
    },
  },
  {
    title: "Smart Health - Waterborne Disease Risk Prediction & Early Warning System",
    problem: "Helps health workers detect waterborne disease outbreaks early through symptom reporting and ML-based risk prediction.",
    tech: ["Python", "Flask", "Machine Learning", "REST APIs", "HTML/CSS/JS"],
    impact: "Early warning system for waterborne disease risk prediction and reporting.",
    image: waterborneImg,
    links: { github: "https://github.com/aadyas17/Waterborne-Disease-Risk-Prediction-and-Early-Warning-System" },
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm font-mono text-primary/70 tracking-widest uppercase mb-2">Projects</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">Things I've built</h2>
        <p className="text-sm italic text-muted-foreground mb-10">Outcomes, not just descriptions.</p>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl overflow-hidden border border-border/50 hover:glow-lavender transition-all duration-500 group"
            >
              {/* Project screenshot */}
              <div className="w-full h-48 bg-secondary/30 border-b border-border/30 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300 mb-2">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.problem}
                </p>

                <div className="space-y-2 mb-5 text-sm">
                  <p className="text-foreground/85">
                    <span className="text-primary font-medium">Tech:</span>{" "}
                    <span className="text-muted-foreground">{project.tech.join(", ")}</span>
                  </p>
                  <p className="text-foreground/85 flex items-start gap-1.5">
                    <TrendingUp size={14} className="text-primary mt-1 shrink-0" />
                    <span>
                      <span className="text-primary font-medium">Impact:</span>{" "}
                      <span className="text-muted-foreground">{project.impact}</span>
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors">
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors">
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
