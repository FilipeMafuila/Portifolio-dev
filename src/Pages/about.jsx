function About(){
    const stats = [
        {
            icon: "fa-solid fa-layer-group",
            title: "Projectos Concluídos",
            value: "6+",
            description: "Web, Sistemas & Automações",
            aos: "fade-right"
        },
        {
            icon: "fa-solid fa-briefcase",
            title: "Experiência em TI",
            value: "1.5+",
            description: "Anos em empresa de tecnologia",
            aos: "fade-up"
        },
        {
            icon: "fa-solid fa-robot",
            title: "Automações & Chatbots",
            value: "100%",
            description: "Respostas e rotinas automatizadas",
            aos: "fade-left"
        }
    ];

    return(
        <>
        <section id="sobre" className="bg-slate-950 text-slate-300 px-4 sm:px-8 md:px-16 lg:px-32 py-24 overflow-x-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-start">
                <div className="md:col-span-2">
                    <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-4xl font-bold mb-6 text-white">Sobre Mim</h2>
                    <div className="flex flex-col gap-6 text-xl leading-relaxed text-slate-300">
                        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" className="text-justify">
                            Sou um desenvolvedor front-end com mais de 1 ano e meio de experiência profissional em empresa de TI. Especializado em React, JavaScript moderno e Tailwind CSS, transformo desafios técnicos em interfaces digitais elegantes, rápidas e funcionais.
                        </p>
                        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="text-justify">
                            Em meu percurso prático, já desenvolvi soluções de grande impacto, incluindo projectos para a Faculdade de Medicina da Universidade Agostinho Neto (UAN), plataformas web para duas empresas de consultoria e sistema completo com website para ginásio.
                        </p>
                        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="text-justify">
                            Além do desenvolvimento web e UI design, sou especialista em automação de processos, criação de chatbots inteligentes e respostas automáticas para clientes em sites, garantindo atendimento instantâneo e otimização de rotinas para empresas e negócios.
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 justify-start w-full sm:w-auto">
                        <a href="#contacto" className="bg-indigo-800 hover:bg-indigo-700 text-white font-medium transition-all duration-300 py-3 px-6 sm:px-8 shadow-lg border border-indigo-700/50 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto text-center whitespace-nowrap">
                            Fale Comigo <i className="fa-solid fa-paper-plane text-xs"></i>
                        </a>
                         <a href="/cv_filipe_mafuila.pdf" download className="bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all duration-300 py-3 px-6 sm:px-8 shadow-lg rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto text-center whitespace-nowrap">
                            Baixar CV <i className="fa-solid fa-download text-xs"></i>
                         </a>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            data-aos={stat.aos}
                            data-aos-duration="1500"
                            data-aos-offset="100"
                            className="flex items-center gap-5 text-slate-400 bg-slate-900/50 p-6 border border-slate-800/50 rounded-xl w-full hover:border-indigo-500/30 transition-colors"
                        >
                            <i className={`${stat.icon} text-3xl text-indigo-500`}></i>
                            <div className="flex-grow">
                                <p className="font-bold text-white text-lg">{stat.title}</p>
                                <p className="text-base text-slate-400">{stat.description}</p>
                            </div>
                            <p className="text-3xl font-bold text-white">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}
export default About;
