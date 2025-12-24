import { ArrowRight, Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#161b22] to-[#0d1117]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Gagana Geethika Maya
                <span className="block text-[#58a6ff] mt-2">Venkatampalli</span>
              </h1>

              <p className="text-xl md:text-2xl text-[#8b949e] font-medium">
                M.S. Management of Technology | Project & Operations Specialist | Graduate Student
              </p>

              {/* Recruiter CTA Line */}
              <p className="text-[#58a6ff] font-medium text-base md:text-lg max-w-xl">
                Currently seeking internships and full-time roles in project coordination, operations, and business analysis.
              </p>

              <p className="text-lg text-[#c9d1d9] leading-relaxed max-w-xl">
                Turning complex, unstructured problems into efficient systems — project coordination,
                business analysis, and product operations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-6 py-3 bg-[#58a6ff] text-[#0d1117] rounded-lg font-semibold hover:bg-[#58a6ff]/90 transition-all flex items-center space-x-2 shadow-lg shadow-[#58a6ff]/20"
              >
                <span>View Portfolio</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-[#21262d] text-[#f0f6fc] rounded-lg font-semibold hover:bg-[#30363d] transition-colors flex items-center space-x-2 border border-[#30363d]"
                aria-label="Contact Me"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <a
                href="mailto:gv2281@nyu.edu"
                className="flex items-center space-x-2 text-[#8b949e] hover:text-[#58a6ff] transition-colors"
              >
                <Mail size={20} />
                <span className="text-sm">gv2281@nyu.edu</span>
              </a>

              <a
                href="https://linkedin.com/in/gagana-geethika-maya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#8b949e] hover:text-[#58a6ff] hover:bg-[#161b22] rounded-lg transition-colors"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com/ggmvenkatampalli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#8b949e] hover:text-[#58a6ff] hover:bg-[#161b22] rounded-lg transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#58a6ff] to-[#3fb950] rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />

              <div className="relative bg-[#161b22] rounded-2xl p-1 border border-[#30363d]">
                <img
                  src="https://i.postimg.cc/J0HPFpXF/IMG-20251209-WA0007.jpg"
                  alt="Gagana Geethika Maya Venkatampalli"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>

            <div className="mt-6 bg-[#161b22] rounded-xl p-6 border border-[#30363d] shadow-xl">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#58a6ff] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[#f0f6fc]">New York, NY</p>
                  <p className="text-sm text-[#8b949e] mt-1">
                    M.S. Management of Technology — NYU (Expected 2027)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#30363d] to-transparent" />
    </section>
  );
}
