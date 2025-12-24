import { ExternalLink, Github, Filter } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Operations', 'Automation', 'Academic', 'Workshops', 'Process Mapping'];

  const projects = [
    {
      title: 'ASKaMIt — AI-Based OCR Pipeline',
      subtitle: 'Automated text extraction + cleaning',
      description: 'Built an OCR automation pipeline using Tesseract and AI, reducing manual document processing workload by ~70% and improving turnaround time.',
      tags: ['Automation', 'Python', 'OCR', 'AI'],
      impact: '70% workload reduction',
      image: 'https://images.pexels.com/photos/8438948/pexels-photo-8438948.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/ggmvenkatampalli',
      demo: '#'
    },
    {
      title: 'Delta Air Lines — Operations Optimization',
      subtitle: 'Workflow and process analysis',
      description: 'Comprehensive workflow analysis with efficiency recommendations; projected 22% efficiency improvement through As-Is/To-Be mapping and KPI optimization.',
      tags: ['Operations', 'Process Mapping', 'Business Analysis'],
      impact: '22% efficiency gain',
      image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: '#'
    },
    {
      title: 'Organ Donation Matching Platform',
      subtitle: 'Academic project with matching logic',
      description: 'Developed matching logic, comprehensive system documentation, and UI flow diagrams. Includes process flows, data models, and complete testing documentation.',
      tags: ['Academic', 'Documentation', 'System Design'],
      impact: 'Complete system design',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: '#'
    },
    {
      title: 'GDSC Technical Workshops',
      subtitle: 'Workshop planning & execution',
      description: 'Led end-to-end planning, logistics, documentation, and operations for multiple technical workshops. Managed materials, coordination, and post-event analysis.',
      tags: ['Workshops', 'Leadership', 'Operations'],
      impact: 'Multiple successful events',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Portfolio & Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#58a6ff] to-[#3fb950] rounded-full" />
          <p className="text-lg text-[#8b949e] max-w-3xl mt-4">
            Showcase of technical and operations projects with measurable outcomes and impact.
          </p>
        </div>

        <div className="flex items-center space-x-4 mb-12 overflow-x-auto pb-2">
          <Filter size={20} className="text-[#8b949e] flex-shrink-0" />
          <div className="flex space-x-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? 'bg-[#58a6ff] text-[#0d1117]'
                    : 'bg-[#161b22] text-[#c9d1d9] border border-[#30363d] hover:border-[#58a6ff]/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#161b22] rounded-xl border border-[#30363d] overflow-hidden hover:border-[#58a6ff]/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#58a6ff]/10"
            >
              <div className="relative h-48 overflow-hidden bg-[#0d1117]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#3fb950] text-[#0d1117] rounded-full text-xs font-bold">
                    {project.impact}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-[#58a6ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#8b949e]">{project.subtitle}</p>
                </div>

                <p className="text-[#c9d1d9] text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#0d1117] text-[#58a6ff] rounded-md text-xs font-medium border border-[#30363d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3 pt-2">
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 text-[#58a6ff] hover:underline text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Case Study</span>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[#8b949e] hover:text-[#58a6ff] text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
