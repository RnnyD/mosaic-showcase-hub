
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 bg-grid-subtle opacity-10"></div>
      
      {/* Refined floating elements */}
      <div className="absolute top-32 left-16 w-32 h-32 glass-dark rounded-3xl animate-float opacity-20"></div>
      <div className="absolute top-48 right-24 w-20 h-20 glass-dark rounded-2xl animate-float opacity-30" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-1/3 w-16 h-16 glass-dark rounded-xl animate-float opacity-25" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="glass-card-dark p-16 rounded-3xl animate-fade-in max-w-5xl mx-auto minimal-shadow-lg">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-extralight text-white mb-8 leading-tight tracking-tight">
              Creative
              <span className="block font-light bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Concevoir des expériences numériques avec une approche moderne et réfléchie
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="glass-button text-white rounded-2xl px-10 py-4 text-lg font-medium tracking-wide"
            >
              Découvrir mes projets
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-blue-400/30 text-blue-300 hover:bg-blue-500/20 rounded-2xl px-10 py-4 text-lg font-medium tracking-wide transition-all duration-300"
            >
              Télécharger CV
            </Button>
          </div>
        </div>
        
        {/* Refined scroll indicator */}
        <button 
          onClick={scrollToProjects}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-subtle glass-dark p-4 rounded-full minimal-shadow hover:scale-110 transition-all duration-300"
        >
          <ArrowDown className="text-blue-400 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
