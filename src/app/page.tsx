import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import HobbiesSection from "@/components/HobbiesSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <AchievementsSection />
      <ProjectsSection />
      <SkillsSection />
      <HobbiesSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
