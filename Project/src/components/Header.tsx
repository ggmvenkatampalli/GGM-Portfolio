import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0d1117]/95 backdrop-blur-sm border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO + NAME → CLICK TO GO TO HERO */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-10 h-10 bg-[#58a6ff] rounded-lg flex items-center justify-center font-bold text-[#0d1117]">
              GGM
            </div>
            <span className="font-semibold text-lg hover:text-[#58a6ff] transition-colors">
              Gagana Geethika Maya
            </span>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#58a6ff] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-[#58a6ff] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#58a6ff] transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('leadership')} className="hover:text-[#58a6ff] transition-colors">
              Leadership
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#58a6ff] transition-colors">
              Contact
            </button>

            <a
              href="https://drive.google.com/file/d/1M-4jmayon_2QabSmT9sHgUwt-FIoAdmY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#58a6ff] text-[#0d1117] rounded-lg font-medium hover:bg-[#58a6ff]/90 transition-colors"
            >
              Resume
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-[#161b22] rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-[#58a6ff] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-[#58a6ff] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 hover:text-[#58a6ff] transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('leadership')} className="text-left py-2 hover:text-[#58a6ff] transition-colors">
              Leadership
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-[#58a6ff] transition-colors">
              Contact
            </button>

            <a
              href="https://drive.google.com/file/d/1OCC1f_Z9stPf31PmXOCNrCGVVcrWOIs-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#58a6ff] text-[#0d1117] rounded-lg font-medium text-center hover:bg-[#58a6ff]/90 transition-colors"
            >
              Download Resume 
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
