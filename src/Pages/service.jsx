function Service(){
    const services = [
        {
            icon: "fa-solid fa-desktop",
            status: "Ativo",
            statusColor: "green",
            title: "Desenvolvimento de sites responsivos",
            description: "Criação de sites modernos, responsivos e leves para empresas, projetos pessoais, portfólios ou páginas de apresentação profissional.",
            aos: "fade-right"
        },
        {
            icon: "fa-solid fa-wand-magic-sparkles",
            status: "Ativo",
            statusColor: "green",
            title: "Criação de interfaces modernas e funcionais",
            description: "Desenvolvimento de interfaces intuitivas e visualmente atraentes que proporcionem uma experiência excepcional aos usuários.",
            aos: "fade-right"
        },
        {
            icon: "fa-solid fa-bullhorn",
            status: "Processando...",
            statusColor: "orange",
            title: "Serviços de Marketing e Social Media",
            description: "Desenvolvimento de estratégias de marketing digital, gestão de redes sociais e criação de conteúdo para aumentar a presença online.",
            aos: "fade-left"
        },
        {
            icon: "fa-solid fa-chalkboard-user",
            status: "Ativo",
            statusColor: "green",
            title: "Mentoria para iniciantes",
            description: "Orientação e suporte para quem está começando no desenvolvimento front-end, ajudando a construir uma base sólida.",
            aos: "fade-left"
        }
    ];

    const statusClasses = {
        green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        orange: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    };
    
    return(
        <>
        <section id="servicos" className="bg-slate-950 text-slate-300 px-4 sm:px-8 md:px-16 lg:px-32 py-24">
            <div className="max-w-7xl mx-auto">
                <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-4xl font-bold mb-4 text-white">Serviços</h2>
                <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="text-xl mb-16 max-w-3xl text-slate-300 text-justify">
                    Ofereço serviços de desenvolvimento front-end utilizando as mais recentes tecnologias. Meu foco é criar interfaces de usuário responsivas, intuitivas e visualmente atraentes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            data-aos={service.aos}
                            data-aos-offset="100"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            className="group relative bg-slate-900/50 p-8 border border-slate-800 rounded-xl flex flex-col transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="relative flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <i className={`${service.icon} text-3xl text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300`}></i>
                                    <p className={`px-3 py-1 text-xs font-medium rounded-full border ${statusClasses[service.statusColor]}`}>{service.status}</p>
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <h3 className="font-bold text-xl mb-2 text-white">{service.title}</h3>
                                    <p className="text-base leading-relaxed text-slate-300 flex-grow text-justify">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <p data-aos="fade-up" data-aos-duration="1500" className="text-xl mt-12 max-w-3xl text-slate-300 text-justify">
                    Estou comprometido em entregar soluções de alta qualidade. Se você está procurando um desenvolvedor front-end dedicado e apaixonado, estou aqui para ajudar!
                </p>
            </div>
        </section>
        </>
    )
}
export default Service;
