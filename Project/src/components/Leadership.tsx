import { Users, Award, Calendar } from 'lucide-react';

export default function Leadership() {
  const experiences = [
    {
      icon: Users,
      role: 'Cultural Head',
      organization: 'Girl Up (UN Foundation Chapter)',
      period: '2022 - 2024',
      color: 'text-[#f78166]',
      bgColor: 'bg-[#f78166]/10',
      description: 'Managed 30-member team and program operations',
      achievements: [
        'Led cultural initiatives reaching 500+ participants',
        'Coordinated cross-functional teams for large-scale events',
        'Developed program frameworks and operational guidelines',
        'Managed budgets and resource allocation'
      ],
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Award,
      role: 'Workshop Lead',
      organization: 'Google Developer Student Club',
      period: '2023 - 2024',
      color: 'text-[#3fb950]',
      bgColor: 'bg-[#3fb950]/10',
      description: 'Organized and facilitated technical workshops',
      achievements: [
        'Designed workshop curriculum and materials',
        'Facilitated hands-on technical sessions',
        'Managed logistics and attendee coordination',
        'Gathered feedback and optimized future sessions'
      ],
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="leadership" className="py-20 md:py-32 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Leadership & Activities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#58a6ff] to-[#3fb950] rounded-full" />
          <p className="text-lg text-[#8b949e] max-w-3xl mt-4">
            Community leadership and program management experience driving impact through organized initiatives.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="group bg-[#161b22] rounded-xl border border-[#30363d] overflow-hidden hover:border-[#58a6ff]/50 transition-all"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 relative h-64 md:h-auto">
                    <img
                      src={exp.image}
                      alt={exp.organization}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent opacity-60" />
                  </div>

                  <div className="md:col-span-2 p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 ${exp.bgColor} rounded-lg flex-shrink-0`}>
                          <Icon size={24} className={exp.color} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                          <p className="text-lg text-[#8b949e]">{exp.organization}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-[#8b949e] text-sm">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-[#c9d1d9] text-lg">{exp.description}</p>

                    <div>
                      <h4 className="font-semibold text-[#f0f6fc] mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="text-[#3fb950] mt-1 flex-shrink-0">✓</span>
                            <span className="text-[#c9d1d9]">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
