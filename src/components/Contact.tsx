
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const handleContactClick = () => {
    window.open('mailto:hello@yourportfolio.com?subject=Collaboration', '_blank');
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-20 right-10 w-40 h-40 glass rounded-full animate-float opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 glass rounded-2xl animate-float opacity-40" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Title Section */}
          <div className="glass-card p-12 rounded-3xl mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Collaborons
              <span className="block font-medium bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Ensemble
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-refined-light max-w-2xl mx-auto font-light leading-relaxed">
              Créons quelque chose d'extraordinaire. Une idée, un projet, une vision ?
            </p>
          </div>

          {/* Contact Button */}
          <div className="glass-card p-8 rounded-3xl animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Button 
              onClick={handleContactClick}
              size="lg"
              className="glass-button text-white rounded-2xl px-12 py-6 text-lg font-medium tracking-wide hover:scale-105 transition-all duration-300"
            >
              Démarrer une conversation
            </Button>
            
            {/* Subtle contact info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-center space-x-2 text-refined-light">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">hello@yourportfolio.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-refined-light">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium">Disponible pour nouvelles opportunités</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
