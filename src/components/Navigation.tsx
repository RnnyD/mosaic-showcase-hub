
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "glass-nav" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Portfolio</h1>
          <div className="hidden md:flex space-x-1">
            {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium fluent-hover"
              >
                {item}
              </button>
            ))}
          </div>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="glass-button text-white rounded-xl px-6 py-2 font-medium"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};
