import Navbar from "@/components/navbar/Navbar";
import '@/app/globals.css'
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Project from "@/components/projects/project";
import Skill from "@/components/skills/Skill";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Skill/>
    </div>
  );
}
