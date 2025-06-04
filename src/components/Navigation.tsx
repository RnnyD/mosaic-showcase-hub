
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? "glass-nav" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-light text-white tracking-wide">Portfolio</h1>
          <div className="hidden md:flex space-x-2">
            {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-5 py-2 rounded-xl text-slate-300 hover:text-white transition-all duration-300 font-normal fluent-hover tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="glass-button text-white rounded-2xl px-6 py-2 font-normal tracking-wide"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};
