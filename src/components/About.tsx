
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="glass-card-dark p-10 rounded-3xl">
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-8 tracking-tight">
                About <span className="font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed font-light">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. I specialize in modern web technologies 
                and have a keen eye for user experience design.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed font-light">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                writing and speaking.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="glass-card-dark border-white/10 text-center p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 minimal-shadow rounded-3xl">
                <CardContent className="p-0">
                  <div className="text-3xl font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-sm text-gray-400 font-medium">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="glass-card-dark border-white/10 text-center p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 minimal-shadow rounded-3xl">
                <CardContent className="p-0">
                  <div className="text-3xl font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">5+</div>
                  <div className="text-sm text-gray-400 font-medium">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="glass-card-dark p-8 rounded-3xl">
              <div className="aspect-square bg-gradient-to-br from-gray-800/50 to-black/50 rounded-3xl relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
