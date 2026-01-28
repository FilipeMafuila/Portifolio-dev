function Traject(){
    const trajectoryData = [
        {
            icon: "fa-solid fa-book-open-reader",
            title: "Autodidata",
            description: "Iniciei minha jornada no desenvolvimento web como autodidata, explorando recursos online, tutoriais e documentações para aprender as bases do HTML, CSS e JavaScript.",
            aos: "fade-right"
        },
        {
            icon: "fa-solid fa-laptop-code",
            title: "Cursos Online",
            description: "Para aprofundar meus conhecimentos, participei de diversos cursos online que me proporcionaram uma compreensão mais sólida das tecnologias front-end modernas, incluindo frameworks como React.",
            aos: "fade-left"
        },
        {
            icon: "fa-solid fa-code-branch",
            title: "Projetos Práticos",
            description: "Ao longo do meu aprendizado, desenvolvi diversos projetos práticos que me permitiram aplicar os conceitos aprendidos e ganhar experiência real no desenvolvimento de interfaces de usuário.",
            aos: "fade-right"
        },
        {
            icon: "fa-solid fa-users",
            title: "Comunidade e Networking",
            description: "Participei ativamente de comunidades online e eventos relacionados ao desenvolvimento web, o que me permitiu aprender com outros profissionais, trocar experiências e expandir minha rede de contatos.",
            aos: "fade-left"
        },
        {
            icon: "fa-solid fa-briefcase",
            title: "Estagios Tech",
            description: "Consegui estágios em empresa de tecnologia, onde pude trabalhar em projetos reais, colaborar com equipes de desenvolvimento e aprimorar minhas habilidades técnicas e profissionais.",
            aos: "fade-right"
        }
    ];

     return(
        <>
        <section id="trajectoria" className="bg-slate-950 text-slate-300 px-4 sm:px-8 md:px-16 lg:px-32 py-24">
            <div className="max-w-7xl mx-auto">
                <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-4xl font-bold mb-4 text-white">Trajetória</h2>
                <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="text-xl mb-16 max-w-3xl text-slate-300 text-justify">Durante a minha jornada de aprendizado eu vivi diversas experiências.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {trajectoryData.map((item, index) => (
                        <div
                            key={index}
                            data-aos={item.aos}
                            data-aos-offset="100"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            className="group relative bg-slate-900/70 p-8 border border-slate-800 rounded-xl transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-4">
                                    <i className={`${item.icon} text-3xl text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300`}></i>
                                    <h3 className="font-bold text-xl text-white">{item.title}</h3>
                                </div>
                                <p className="leading-relaxed text-lg text-slate-300 text-justify">{item.description}</p>
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
