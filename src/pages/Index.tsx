import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import RecruiterSummarySection from "@/components/RecruiterSummarySection";
import ProjectsSection from "@/components/ProjectsSection";
import ResearchSection from "@/components/ResearchSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <SkillsSection />
      <RecruiterSummarySection />
      <ProjectsSection />
      <ResearchSection />
      <ExperienceSection />
        <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
