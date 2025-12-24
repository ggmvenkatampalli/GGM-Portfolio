import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#58a6ff] rounded-lg flex items-center justify-center font-bold text-[#0d1117]">
                GGM 
              </div>
              <span className="font-semibold">Gagana Geethika Maya Venkatampalli</span>
            </div>
            <p className="text-[#8b949e] text-sm">
              Project & Operations Specialist | M.S. Management of Technology
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#8b949e] hover:text-[#58a6ff] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:gv2281@nyu.edu"
                className="flex items-center space-x-2 text-[#8b949e] hover:text-[#58a6ff] transition-colors"
              >
                <Mail size={16} />
                <span>gv2281@nyu.edu</span>
              </a>
              <p className="text-[#8b949e]">New York, NY</p>
              <div className="flex space-x-3 pt-2">
                <a
                  href="https://linkedin.com/in/gagana-geethika-maya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#161b22] rounded-lg hover:bg-[#30363d] transition-colors"
                >
                  <Linkedin size={18} className="text-[#8b949e] hover:text-[#58a6ff]" />
                </a>
                <a
                  href="https://github.com/ggmvenkatampalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#161b22] rounded-lg hover:bg-[#30363d] transition-colors"
                >
                  <Github size={18} className="text-[#8b949e] hover:text-[#58a6ff]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#30363d] flex flex-col md:flex-row items-center justify-between">
          <p className="text-[#8b949e] text-sm">
            © {new Date().getFullYear()} Gagana Geethika Maya Venkatampalli. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-[#161b22] rounded-lg hover:bg-[#58a6ff]/10 transition-colors group"
          >
            <ArrowUp size={20} className="text-[#8b949e] group-hover:text-[#58a6ff] transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
}
