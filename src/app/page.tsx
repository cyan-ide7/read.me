import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import HobbiesSection from "@/components/HobbiesSection";
import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <HobbiesSection />
      <BlogSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-surface text-muted text-sm font-mono">
        <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
        <p className="mt-2 text-xs">© {new Date().getFullYear()} Subham. All rights reserved.</p>
      </footer>
    </main>
  );
}
