import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { CertificatesSection } from "@/components/portfolio/CertificatesSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { SectionSeparator } from "@/components/ui/section-separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SectionSeparator />
      <AboutSection />
      <SectionSeparator />
      <ExperienceSection />
      <SectionSeparator />
      <SkillsSection />
      <SectionSeparator />
      <ProjectsSection />
      <SectionSeparator />
      <CertificatesSection />
      <SectionSeparator />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;