
import '@/app/globals.css'
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Project from "@/components/projects/project";
import Skill from "@/components/skills/Skill";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Project/>
      <Skill/>
      <Contact/>
    </div>
  );
}
