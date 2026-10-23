function Traject(){
    const trajectoryData = [
        {
            icon: "fa-solid fa-briefcase",
            title: "Experiência em Empresa de TI (1,5+ Anos)",
            tag: "Empresa de TI",
            description: "Atuação profissional por mais de 1 ano e meio no setor de tecnologia, desenvolvendo interfaces web modernas, participando de projectos reais, colaborando com equipes e aprimorando padrões de código e boas práticas.",
            aos: "fade-right"
        },
        {
            icon: "fa-solid fa-building-columns",
            title: "Projectos para Faculdade de Medicina (UAN)",
            tag: "Acadêmico / Institucional",
            description: "Desenvolvimento de soluções e projectos digitais voltados para a Universidade de Medicina da Universidade Agostinho Neto (UAN), com foco em organização de informações, acessibilidade e interface intuitiva.",
            aos: "fade-left"
        },
        {
            icon: "fa-solid fa-robot",
            title: "Automação de Processos & Chatbots",
            tag: "Automação & IA",
            description: "Especialista no desenvolvimento de chatbots interativos, configuração de respostas automáticas para atendimento a clientes no website e fluxos inteligentes para otimização de rotinas operacionais.",
            aos: "fade-right"
        },
        {
            icon: "fa-solid fa-chart-line",
            title: "Websites para Empresas de Consultoria",
            tag: "Consultorias",
            description: "Criação de websites corporativos modernos para duas empresas de consultoria, estruturados para transmitir autoridade, apresentar serviços com clareza e potencializar a captação de clientes.",
            aos: "fade-left"
        },
        {
            icon: "fa-solid fa-dumbbell",
            title: "Website e Sistema para Ginásio",
            tag: "Sistemas Web",
            description: "Desenvolvimento de website e sistema dedicado a um ginásio, integrando visual atraente, apresentação de planos e modalidades, facilitando a gestão e o engajamento dos alunos.",
            aos: "fade-right"
        },
        {
            icon: "fa-solid fa-laptop-code",
            title: "Formação Contínua & Front-End Moderno",
            tag: "Evolução Contínua",
            description: "Trajetória consolidada com estudo contínuo de React, JavaScript, Tailwind CSS e UI Design, unindo teoria sólida, cursos especializados e ampla vivência em projetos práticos do mundo real.",
            aos: "fade-left"
        }
    ];

     return(
        <>
        <section id="trajectoria" className="bg-slate-950 text-slate-300 px-4 sm:px-8 md:px-16 lg:px-32 py-24 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-4xl font-bold mb-4 text-white">Trajetória</h2>
                <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="text-xl mb-16 max-w-3xl text-slate-300 text-justify">
                    Uma trajetória construída com desafios reais no mercado de tecnologia, projectos institucionais de peso, automação de processos e desenvolvimento de sistemas eficientes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {trajectoryData.map((item, index) => (
                        <div
                            key={index}
                            data-aos={item.aos}
                            data-aos-offset="100"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            className="group relative bg-slate-900/70 p-8 border border-slate-800 rounded-xl transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="relative">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-3.5">
                                        <i className={`${item.icon} text-2xl sm:text-3xl text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300`}></i>
                                        <h3 className="font-bold text-lg sm:text-xl text-white">{item.title}</h3>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-base sm:text-lg text-slate-300 text-justify">{item.description}</p>
                            </div>
                            <div className="relative mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400/90 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                                    {item.tag}
                                </span>
                                <i className="fa-solid fa-arrow-right text-xs text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </section>   
        </>
     )
}
export default Traject;
