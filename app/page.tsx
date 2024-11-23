import { HeroSection } from "@/components/sections/hero";
import { ExpertiseSection } from "@/components/sections/expertise";
import { ProjectsSection } from "@/components/sections/projects";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <HeroSection />
      <ExpertiseSection />
      <ProjectsSection />
    </main>
  );
}