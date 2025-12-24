import { ClipboardList, BarChart3, GitBranch, FileText, Users, Database } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: ClipboardList,
      title: 'Project Coordination',
      description: 'Keep teams aligned with structured timelines, clear communication, and organized workflows.',
      deliverables: [
        'Timeline & deliverables tracking',
        'Meeting facilitation & notes',
        'Stakeholder communication',
        'Prioritized task lists'
      ]
    },
    {
      icon: BarChart3,
      title: 'Business Analysis',
      description: 'Turn complex problems into actionable requirements, KPIs, and insights.',
      deliverables: [
        'Requirements gathering',
        'KPI tracking & reporting',
        'Stakeholder interviews',
        'Data visualization in Tableau'
      ]
    },
    {
      icon: GitBranch,
      title: 'Process Mapping & Optimization',
      description: 'Identify bottlenecks and streamline workflows to improve efficiency.',
      deliverables: [
        'As-Is / To-Be process maps',
        'Bottleneck identification',
        'Efficiency recommendations',
        'Implementation roadmaps'
      ]
    },
    {
      icon: FileText,
      title: 'Technical Documentation',
      description: 'Create clear SOPs, user manuals, and process frameworks.',
      deliverables: [
        'Standard Operating Procedures',
        'User guides & manuals',
        'Process documentation',
        'Template creation'
      ]
    },
    {
      icon: Users,
      title: 'Event & Workshop Coordination',
      description: 'Plan and execute workshops end-to-end with logistics, materials, and post-event analysis.',
      deliverables: [
        'Event planning & logistics',
        'Materials preparation',
        'Attendee coordination',
        'Post-event analysis'
      ]
    },
    {
      icon: Database,
      title: 'Product Operations Support',
      description: 'Help product teams operate smoothly with dashboards, SQL queries, tooling setup, and automation.',
      deliverables: [
        'SQL queries & reporting',
        'Dashboard creation',
        'Tool administration (Jira, Notion)',
        'Process automation'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Core Capabilities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#58a6ff] to-[#3fb950] rounded-full mx-auto" />
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-[#161b22] rounded-xl p-8 border border-[#30363d] hover:border-[#58a6ff]/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#58a6ff]/10"
              >
                <div className="p-3 bg-[#58a6ff]/10 rounded-lg w-fit mb-4 group-hover:bg-[#58a6ff]/20 transition-colors">
                  <Icon size={28} className="text-[#58a6ff]" />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#8b949e] mb-4">{service.description}</p>

                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-[#c9d1d9]">
                      <span className="text-[#3fb950] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
