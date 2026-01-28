function About(){
    const stats = [
        {
            icon: "fa-solid fa-code",
            title: "Projectos Concluídos",
            value: "4",
            description: "Web, UI, Social Media",
            aos: "fade-right"
        },
        {
            icon: "fa-solid fa-graduation-cap",
            title: "Certificados",
            value: "4",
            description: "Certificados adquiridos",
            aos: "fade-up"
        },
        {
            icon: "fa-solid fa-calendar-plus",
            title: "Anos de Experiência",
            value: "1+",
            description: "Continuando a jornada",
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
                            Sou um desenvolvedor front-end apaixonado por criar interfaces modernas e funcionais. Com foco em React, JavaScript e Tailwind CSS, transformo ideias em experiências digitais simples e bonitas.
                        </p>
                        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="text-justify">
                            Minha jornada no desenvolvimento web começou com a busca por soluções que priorizem a performance e a usabilidade. Estou sempre em busca de novos desafios para aprimorar minhas habilidades técnicas.
                        </p>
                        <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" className="text-justify">
                            Além do desenvolvimento, tenho interesse em UI design, o que me permite criar interfaces que não são apenas funcionais, mas também visualmente atraentes.
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" className="flex gap-4 mt-10 justify-start">
                        <a href="#contacto" className="bg-indigo-800 hover:bg-indigo-700 text-white font-medium transition-all duration-300 py-3 px-8 shadow-lg border border-indigo-700/50 rounded-lg flex items-center gap-2">
                            Fale Comigo <i className="fa-solid fa-comment-dots text-xs"></i>
                        </a>
                         <a href="/cv_filipe_mafuila.pdf" download className="bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all duration-300 py-3 px-8 shadow-lg rounded-lg flex items-center gap-2">
                            Baixar CV <i className="fa-solid fa-file-pdf text-xs"></i>
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
export default About
