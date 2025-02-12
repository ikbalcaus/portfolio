import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import NeonMouse from "./components/NeonMouse";
import Toast from "./components/Toast";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 pt-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <NeonMouse />
        <Toast />
      </div>
      <Footer />
    </main>
  );
}
