import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}>

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Who I am
        </h2>

        <div className="glass rounded-2xl p-8 md:p-10 glow-lavender">
          <p className="text-foreground/90 leading-relaxed text-base md:text-lg mb-5">
            Information Science graduate with interests in Data Analytics, AI/ML, and enterprise technologies. Experienced through internships, academic projects, and research work involving machine learning, NLP, SAP ABAP, and data-driven solutions.
          </p>
          <p className="text-foreground/80 leading-relaxed text-sm md:text-base mb-8">
            Outside technology, I enjoy music, literature, and open-mic performances. I have been an active member of the Hindi Parishad literary society and have training in classical music.






          </p>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
              <GraduationCap size={20} className="text-primary" />
              Education
            </h3>
            {[
            {
              school: "Dayanand Sagar College of Engineering, Bengaluru",
              degree: "BE in Information Science Engineering",
              score: "CGPA: 9.05"
            },
            {
              school: "Small Wonder's Senior Secondary School, Jabalpur (MP)",
              degree: "CBSE Higher Secondary",
              score: "90.2%"
            }].

            map((edu, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border/50">

                <div>
                  <p className="font-medium text-foreground text-sm">{edu.school}</p>
                  <p className="text-muted-foreground text-sm">{edu.degree}</p>
                </div>
                <span className="text-primary font-semibold text-sm mt-1 sm:mt-0">{edu.score}</span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>);

};

export default AboutSection;