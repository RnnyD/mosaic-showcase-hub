
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="glass-card p-8 rounded-3xl inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Technical <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expertise across the full development stack with a focus on modern technologies
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <Card key={category} className="glass-card border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 fluent-shadow rounded-2xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{category}</h3>
                <div className="space-y-4">
                  {skillsData
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600 font-medium">{skill.name}</span>
                          <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out glass"
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
