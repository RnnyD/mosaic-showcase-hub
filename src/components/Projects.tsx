
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management and seamless payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team communication features.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    category: "web",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
    tech: ["React Native", "Redux", "SQLite"],
    category: "mobile",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time analytics.",
    tech: ["D3.js", "Python", "FastAPI"],
    category: "data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  }
];

const categories = ["all", "web", "mobile", "data"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="glass-card p-8 rounded-3xl inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Featured <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my recent work showcasing various technologies and design approaches
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="glass p-2 rounded-2xl fluent-shadow">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  onClick={() => setActiveCategory(category)}
                  className={`capitalize transition-all duration-200 rounded-xl ${
                    activeCategory === category 
                      ? "glass-button text-white" 
                      : "hover:bg-white/20"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden glass-card border-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 fluent-shadow-lg rounded-3xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <Button className="glass-button text-white rounded-xl px-6 py-2">
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} className="glass border-blue-200/50 text-blue-700 bg-blue-50/50 rounded-lg">
                      {tech}
                    </Badge>
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
