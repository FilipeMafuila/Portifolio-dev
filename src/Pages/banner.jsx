function Banner(){
    const skills = [
        { name: "React", icon: "fa-brands fa-react", hoverClass: "hover:bg-cyan-500/10 hover:text-cyan-300" },
        { name: "Javascript", icon: "fa-brands fa-js", hoverClass: "hover:bg-yellow-500/10 hover:text-yellow-300" },
        { name: "Tailwind CSS", icon: "fa-solid fa-code", hoverClass: "hover:bg-sky-500/10 hover:text-sky-300" },
        { name: "Automações & Chatbots", icon: "fa-solid fa-robot", hoverClass: "hover:bg-emerald-500/10 hover:text-emerald-300" },
        { name: "UI Design", icon: "fa-solid fa-palette", hoverClass: "hover:bg-fuchsia-500/10 hover:text-fuchsia-300" }
    ];
    
    return(
        <>
        <section id="banner" className="bg-slate-950 text-slate-300 px-4 sm:px-8 md:px-16 lg:px-32 py-20 min-h-screen flex items-center overflow-x-hidden">
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-12">
                <div className="w-full md:w-1/2 text-center md:text-left ">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 text-white tracking-tight">Filipe Mafuila</h1>
                    <p className="font-medium text-xl sm:text-2xl lg:text-3xl mb-6 text-indigo-400">Desenvolvedor Front-End & Automações</p>
                    <p className="mb-8 text-lg sm:text-xl leading-relaxed text-slate-300 max-w-xl md:text-justify">
                        Com mais de 1 ano e meio de experiência em empresa de TI, transformo ideias em experiências digitais de alta performance, desenvolvo sistemas web modernos e crio automações de processos com chatbots inteligentes e respostas automáticas para clientes.
                    </p>
                    
                    <div className="flex gap-2.5 sm:gap-3 mt-5 justify-center md:justify-start flex-wrap">
                       {skills.map(skill => (
                           <span key={skill.name} className={`py-1.5 px-3.5 sm:px-4 rounded-full text-sm sm:text-base font-medium transition-colors cursor-pointer bg-slate-800 text-slate-300 flex items-center gap-2 ${skill.hoverClass}`}>
                               <i className={`${skill.icon} text-sm`}></i>
                               {skill.name}
                           </span>
                       ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 justify-center md:justify-start w-full sm:w-auto">
                        <a href="#contacto" className="bg-indigo-800 hover:bg-indigo-700 text-white font-medium transition-all duration-300 py-3 px-6 sm:px-8 shadow-lg border border-indigo-700/50 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto text-center whitespace-nowrap">
                            Fale Comigo <i className="fa-solid fa-paper-plane text-xs"></i>
                        </a>
                        <a href="#projectos" className="bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all duration-300 py-3 px-6 sm:px-8 shadow-lg rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto text-center whitespace-nowrap">
                            Ver Projectos <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    </div>

                    <div className="flex gap-5 mt-8 justify-center md:justify-start">
                       <a href="https://www.linkedin.com/in/filipe-mafuila/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 -m-2"><i className="fa-brands fa-linkedin text-2xl text-slate-300 hover:text-white transition-colors"></i></a>
                       <a href="https://github.com/FilipeMafuila" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="p-2 -m-2"><i className="fa-brands fa-square-github text-2xl text-slate-300 hover:text-white transition-colors"></i></a>
                       <a href="https://www.facebook.com/filipe.mafuila" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="p-2 -m-2"><i className="fa-brands fa-square-facebook text-2xl text-slate-300 hover:text-white transition-colors"></i></a>
                    </div>
                </div>

                <div className="hidden md:flex md:w-1/2 justify-center md:justify-end items-center">
                    <img className="max-w-sm lg:max-w-md shadow-2xl" src="/Img/perfil.png" alt="Foto de perfil de Filipe Mafuila" />
                </div>
            </div>
        </section>
        </>
    )
}
export default Banner;
