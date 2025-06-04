
import { useState, useEffect } from "react";
import { ArrowUp, Apple } from "lucide-react";

export const FixedButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openAppleMusic = () => {
    window.open("https://music.apple.com", "_blank");
  };

  return (
    <div className="fixed-buttons">
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top-btn group"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      )}
      
      <button
        onClick={openAppleMusic}
        className="apple-music-btn group"
        aria-label="Apple Music"
      >
        <Apple className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};
