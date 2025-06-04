
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                About <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. I specialize in modern web technologies 
                and have a keen eye for user experience design.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                writing and speaking.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="glass-card border-white/20 text-center p-6 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 fluent-shadow rounded-2xl">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">50+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="glass-card border-white/20 text-center p-6 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 fluent-shadow rounded-2xl">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">5+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl">
              <div className="aspect-square bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-2xl relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
