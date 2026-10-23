function Projects(){
    const projectData = [
        {
            image: "/Img/nexora.png",
            title: "Nexora Consulting — Formação & Consultoria",
            desafio: "Apresentar formações profissionais e serviços de consultoria num percurso claro para pessoas e empresas.",
            solucao: "Website responsivo que reúne serviços, cursos, informações de investimento e contacto direto com a equipa.",
            tags: ["Website Responsivo", "Formação Profissional", "Consultoria Empresarial"],
            link: "https://nexora-liard-beta.vercel.app/",
            isPrivate: false,
            aos: "fade-up"
        },
        {
            image: "/Img/updata.png",
            title: "UPDATA — Consultoria & Formação em Dados",
            desafio: "Apresentar serviços de consultoria em dados para empresas e formação prática para profissionais.",
            solucao: "Website responsivo que organiza as áreas Corporate e Academy, partilha recursos e facilita o agendamento de diagnósticos.",
            tags: ["Consultoria em Dados", "Formação Profissional", "Website Responsivo"],
            link: "https://updataa.vercel.app/",
            isPrivate: false,
            aos: "fade-up"
        },
        {
            image: "/Img/performance-specialist.png",
            title: "Performance Specialist",
            desafio: "Modernizar o acompanhamento da performance desportiva e substituir processos manuais, mantendo o acesso restrito ao preparador físico.",
            solucao: "Plataforma privada que centraliza atletas, treinos, avaliações e testes físicos. O dashboard acompanha carga e intensidade de treino, frequência cardíaca, composição corporal, sono, alimentação, hidratação e estado emocional, com histórico de evolução e partilha de treinos pelo WhatsApp.",
            tags: ["Dashboard de Performance", "Gestão de Treinos", "Acesso Privado"],
            link: null,
            isPrivate: true,
            privateNote: "Plataforma privada restrita a atletas e preparador físico",
            aos: "fade-up"
        },
        {
            image: "/Img/mohamed-gostoso.png",
            title: "Mohamed Gostoso — Sistema de Gestão de Restaurante",
            desafio: "Unir a experiência digital do cliente à gestão completa do restaurante, sem fragmentar reservas, mesas, cardápio e pedidos.",
            solucao: "Os clientes consultam o cardápio, fazem pedidos, reservam mesas e podem escolher a mesa pelo QR Code, recebendo confirmação da reserva pelo WhatsApp. No painel administrativo, a equipa cadastra mesas e pratos, confirma reservas, aceita e acompanha pedidos e consulta o faturamento num só lugar.",
            tags: ["Painel Administrativo", "Pedidos & Reservas", "Cardápio com QR Code"],
            link: null,
            isPrivate: true,
            privateNote: "Sistema de gestão interno restrito à equipa do restaurante",
            aos: "fade-up"
        }
    ];

    return(
        <>
        <section id="projectos" className="bg-slate-950 text-slate-300 px-4 sm:px-8 md:px-16 lg:px-32 pt-10 sm:pt-14 pb-12 sm:pb-16 overflow-x-hidden border-t border-slate-900/80">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
                    <div>
                        <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Projectos em Destaque
                        </h2>
                        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" className="text-xl max-w-3xl text-slate-300 text-justify">
                            Soluções reais entregues para empresas, instituições e clientes, aliando desafios de negócio a desenvolvimento web moderno e sistemas completos.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projectData.map((project, index) => (
                        <div 
                            key={index} 
                            data-aos={project.aos}
                            data-aos-offset="100"
                            data-aos-duration="1500"
                            className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between"
                        >
                            <div className="overflow-hidden bg-slate-950/80 border-b border-slate-800/80 aspect-video relative">
                                <img 
                                    src={project.image} 
                                    alt={`Prévia do projeto ${project.title}`} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                />
                                {project.isPrivate && (
                                    <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                                        <i className="fa-solid fa-lock text-[10px]"></i> Acesso Privado
                                    </div>
                                )}
                            </div>

                            <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Desafio & Solução */}
                                    <div className="space-y-3.5 mb-6 text-sm sm:text-base leading-relaxed text-slate-300">
                                        <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80">
                                            <p className="font-semibold text-indigo-400 mb-1 flex items-center gap-2">
                                                <i className="fa-solid fa-bullseye text-xs"></i> Desafio:
                                            </p>
                                            <p className="text-slate-300 text-justify text-sm sm:text-base">{project.desafio}</p>
                                        </div>

                                        <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80">
                                            <p className="font-semibold text-emerald-400 mb-1 flex items-center gap-2">
                                                <i className="fa-solid fa-circle-check text-xs"></i> Solução:
                                            </p>
                                            <p className="text-slate-300 text-justify text-sm sm:text-base">{project.solucao}</p>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span 
                                                key={tag} 
                                                className="bg-slate-800/80 text-slate-300 text-xs font-medium px-3 py-1 rounded-full border border-slate-700/40"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Botão de Ação */}
                                <div className="pt-2">
                                    {project.link ? (
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="inline-flex items-center justify-center gap-2 text-white bg-indigo-600 hover:bg-indigo-700 font-medium py-3 px-6 rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-300 text-sm whitespace-nowrap w-full sm:w-auto"
                                        >
                                            <span>Visitar projeto</span>
                                            <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                                        </a>
                                    ) : (
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800">
                                            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
                                                <i className="fa-solid fa-shield-halved text-amber-400"></i> {project.privateNote || "Sistema privado com acesso restrito"}
                                            </span>
                                            <a 
                                                href="#contacto" 
                                                className="text-xs font-medium text-indigo-400 hover:text-white transition-colors underline underline-offset-4"
                                            >
                                                Saber mais
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}
export default Projects;
