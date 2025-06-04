
import { Card, CardContent } from "@/components/ui/card";

const skillsData = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "UI/UX Design", level: 88, category: "Design" },
  { name: "AWS / Cloud", level: 75, category: "DevOps" }
];

const categories = ["Frontend", "Backend", "Design", "DevOps"];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="glass-card-dark p-8 rounded-3xl inline-block animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-extralight text-white mb-6 tracking-tight">
              Technical <span className="font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Expertise across the full development stack with a focus on modern technologies
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={category} 
              className="glass-card-dark border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 minimal-shadow rounded-3xl animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 text-center">
                <h3 className="text-lg font-medium text-white mb-6 tracking-wide">{category}</h3>
                <div className="space-y-6">
                  {skillsData
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-sm font-semibold text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
