
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      {/* Floating glass elements for decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 glass rounded-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 glass rounded-2xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 glass rounded-xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="glass-card p-12 rounded-3xl animate-fade-in max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6 leading-tight">
            Creative
            <span className="block font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Crafting digital experiences with modern technologies and thoughtful design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="glass-button text-white rounded-xl px-8 py-3 font-medium"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-blue-600/30 text-blue-600 hover:bg-blue-50/50 rounded-xl px-8 py-3 font-medium transition-all duration-300"
            >
              Download Resume
            </Button>
          </div>
        </div>
        <button 
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce glass p-3 rounded-full"
        >
          <ArrowDown className="text-blue-600 w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
