import { GraduationCap, TrendingUp, Users, FileText } from 'lucide-react';

export default function About() {
  const skills = {
    'Project Management': [
      'Coordination',
      'Timeline Tracking',
      'Stakeholder Communication',
      'Risk Management',
      'Meeting Facilitation',
      'Resource Planning'
    ],
    'Business & Operations': [
      'Business Analysis',
      'SOP Development',
      'Process Mapping',
      'Workflow Optimization',
      'KPI Reporting',
      'Documentation'
    ],
    'Technical': [
      'SQL',
      'Python',
      'Tableau',
      'Advanced Excel',
      'Jira',
      'Notion',
      'Tesseract OCR',
      'Git/GitHub'
    ]
  };

  const highlights = [
    {
      icon: TrendingUp,
      metric: '70%',
      description: 'Workload reduction through OCR automation'
    },
    {
      icon: FileText,
      metric: '22%',
      description: 'Projected efficiency improvement in Delta operations analysis'
    },
    {
      icon: Users,
      metric: '500+',
      description: 'Participants impacted through workshop leadership'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#58a6ff] to-[#3fb950] rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">

          {/* About Text + Education */}
          <div className="lg:col-span-2 space-y-6">

            {/* Reduced & Scannable About Text */}
            <div className="space-y-3 text-lg text-[#c9d1d9]">
              <p>
                I am a Project & Operations Specialist pursuing an M.S. in Management of Technology at NYU Tandon,
                with a strong foundation in Computer Science. I specialize in turning complex, ambiguous problems
                into clear, scalable systems by bridging operations, technology, and data.
              </p>
              <p>
                My experience spans project coordination, cross-functional collaboration, and operational documentation,
                where I design structured workflows, develop SOPs, and manage end-to-end execution to drive efficiency and
                measurable outcomes. I leverage SQL, Tableau, and advanced Excel for data-informed analysis and workflow optimization,
                ensuring decisions are grounded in insight and impact.
              </p>
              
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              
              {/* MS Card */}
              <div className="bg-[#161b22] rounded-xl p-6 border border-[#30363d] hover:border-[#58a6ff]/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#58a6ff]/10 rounded-lg">
                    <GraduationCap size={24} className="text-[#58a6ff]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">M.S. Management of Technology</h3>
                    <p className="text-[#8b949e] text-sm">
                      New York University
                    </p>
                    <p className="text-[#58a6ff] text-sm">
                      Expected 2027
                    </p>
                    <p className="text-[#c9d1d9] text-sm mt-2">
                      Focus: Project Management, Operations, Business Analysis
                    </p>
                  </div>
                </div>
              </div>

              {/* B.Tech Card */}
              <div className="bg-[#161b22] rounded-xl p-6 border border-[#30363d] hover:border-[#3fb950]/30 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#3fb950]/10 rounded-lg">
                    <GraduationCap size={24} className="text-[#3fb950]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">B.Tech Computer Science</h3>
                    <p className="text-[#8b949e] text-sm">
                      Andhra University
                    </p>
                    <p className="text-[#3fb950] text-sm">
                      2025 • CGPA: 8.18
                    </p>
                    <p className="text-[#c9d1d9] text-sm mt-2">
                      Databases, Software Engineering, Data Structures, System Design
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Impact Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#161b22] rounded-xl p-6 border border-[#30363d] hover:border-[#58a6ff]/30 transition-colors"
                >
                  <Icon size={24} className="text-[#58a6ff] mb-3" />
                  <h3 className="text-4xl font-bold text-[#58a6ff] mb-2">
                    {item.metric}
                  </h3>
                  <p className="text-[#8b949e] text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Skills & Expertise</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <h4 className="text-lg font-semibold text-[#58a6ff]">
                  {category}
                </h4>
                <p className="text-[#c9d1d9] text-sm leading-relaxed">
                  {items.join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
