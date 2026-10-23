import {
  Code2,
  Database,
  Cpu,
  Layers,
  Atom,
  Braces,
  Code,
  Palette,
  Wind,
  Flame,
  Workflow,
  Zap,
  Webhook,
  GitBranch,
  PenTool,
} from 'lucide-react';

const categories = [
  {
    title: 'Frontend',
    icon: Code2,
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    hoverBorder: 'hover:border-cyan-500/40',
    accentColor: 'text-cyan-400',
    skills: [
      { name: 'React', icon: Atom },
      { name: 'JavaScript', icon: Braces },
      { name: 'HTML', icon: Code },
      { name: 'CSS', icon: Palette },
      { name: 'Tailwind', icon: Wind },
    ],
  },
  {
    title: 'Backend & Dados',
    icon: Database,
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    hoverBorder: 'hover:border-amber-500/40',
    accentColor: 'text-amber-400',
    skills: [
      { name: 'Firebase', icon: Flame },
    ],
  },
  {
    title: 'Automação',
    icon: Cpu,
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500/40',
    accentColor: 'text-emerald-400',
    skills: [
      { name: 'n8n', icon: Workflow },
      { name: 'Automação', icon: Zap },
      { name: 'Integrações com API', icon: Webhook },
    ],
  },
  {
    title: 'Ferramentas & Design',
    icon: Layers,
    badgeColor: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20',
    hoverBorder: 'hover:border-fuchsia-500/40',
    accentColor: 'text-fuchsia-400',
    skills: [
      { name: 'GitHub', icon: GitBranch },
      { name: 'UI Design', icon: PenTool },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-slate-300 px-4 sm:px-8 md:px-16 lg:px-32 py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Habilidades & Tecnologias
        </h2>
        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="text-xl mb-16 max-w-3xl text-slate-300 text-justify">
          Competências técnicas organizadas por áreas de especialização, unindo desenvolvimento web moderno, engenharia de dados, automações de processos e design de interfaces.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1500"
                className={`group relative bg-slate-900/60 p-6 sm:p-7 border border-slate-800/80 rounded-2xl flex flex-col justify-between transition-all duration-300 ${category.hoverBorder} hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10`}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

                <div className="relative">
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border ${category.badgeColor}`}>
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-lg text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-col gap-2.5">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-200 group/item"
                        >
                          <div className={`p-1.5 rounded-lg bg-slate-800/80 text-slate-400 group-hover/item:${category.accentColor} transition-colors`}>
                            <SkillIcon className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer badge with count */}
                <div className="relative mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Total
                  </span>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${category.badgeColor}`}>
                    {category.skills.length} {category.skills.length === 1 ? 'tecnologia' : 'tecnologias'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;

