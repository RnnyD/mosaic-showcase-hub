
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  const handleEmailClick = () => {
    window.open('mailto:hello@yourportfolio.com?subject=Collaboration', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/yourprofile', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/yourprofile', '_blank');
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle background elements */}
      <div className="absolute top-20 right-10 w-40 h-40 glass-dark rounded-full animate-float opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 glass-dark rounded-2xl animate-float opacity-30" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <p className="text-lg text-slate-400 mt-4 font-light">
              Feel free to reach out!
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
            {/* Email */}
            <div className="glass-card-dark p-8 rounded-3xl group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Email</h3>
              <p className="text-blue-400 font-medium">hello@yourportfolio.com</p>
            </div>

            {/* LinkedIn */}
            <div className="glass-card-dark p-8 rounded-3xl group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/30 transition-colors">
                <Linkedin className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">LinkedIn</h3>
              <p className="text-purple-400 font-medium">Connect with me ↗</p>
            </div>

            {/* GitHub */}
            <div className="glass-card-dark p-8 rounded-3xl group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/30 transition-colors">
                <Github className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">GitHub</h3>
              <p className="text-green-400 font-medium">View my code ↗</p>
            </div>
          </div>

          {/* Send Message Button */}
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button 
              onClick={handleEmailClick}
              size="lg"
              className="glass-button-dark text-white rounded-2xl px-12 py-6 text-lg font-medium tracking-wide hover:scale-105 transition-all duration-300"
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
