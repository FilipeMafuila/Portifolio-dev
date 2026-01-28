function Banner(){
    const skills = [
        { name: "React", hoverClass: "hover:bg-cyan-500/10 hover:text-cyan-300" },
        { name: "Javascript", hoverClass: "hover:bg-yellow-500/10 hover:text-yellow-300" },
        { name: "Tailwind CSS", hoverClass: "hover:bg-sky-500/10 hover:text-sky-300" },
        { name: "UI Design", hoverClass: "hover:bg-fuchsia-500/10 hover:text-fuchsia-300" }
    ];
    
    return(
        <>
        <section id="banner" className="bg-slate-950 text-slate-300 px-4 sm:px-8 md:px-16 lg:px-32 py-20 min-h-screen flex items-center">
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-12">
                <div className="w-full md:w-1/2 text-center md:text-left ">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-white tracking-tight">Filipe Mafuila</h1>
                    <p className="font-medium text-2xl lg:text-3xl mb-6 text-indigo-400">Desenvolvedor Front-End</p>
                    <p className="mb-8 text-xl leading-relaxed text-slate-300 max-w-xl md:text-justify">Apaixonado por transformar ideias em experiências digitais simples, funcionais e bonitas. Trabalho com desenvolvimento de sites responsivos, interfaces modernas e soluções que priorizam a performance.</p>
                    
                    <div className="flex gap-3 mt-5 justify-center md:justify-start flex-wrap">
                       {skills.map(skill => (
                           <span key={skill.name} className={`py-1.5 px-4 rounded-full text-base font-medium transition-colors cursor-pointer bg-slate-800 text-slate-300 ${skill.hoverClass}`}>{skill.name}</span>
                       ))}
                    </div>

                    <div className="flex gap-4 mt-8 justify-center md:justify-start">
                        <a href="#contacto" className="bg-indigo-800 hover:bg-indigo-700 text-white font-medium transition-all duration-300 py-3 px-8 shadow-lg border border-indigo-700/50 rounded-lg flex items-center gap-2">
                            Fale Comigo <i className="fa-solid fa-comment-dots text-xs"></i>
                        </a>
                        <a href="#projectos" className="bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all duration-300 py-3 px-8 shadow-lg rounded-lg flex items-center gap-2">
                            Ver Projectos <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
                    </div>

                    <div className="flex gap-5 mt-8 justify-center md:justify-start">
                       <a href="https://www.linkedin.com/in/filipe-mafuila/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin text-2xl text-slate-300 hover:text-white transition-colors"></i></a>
                       <a href="https://github.com/FilipeMafuila" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-github text-2xl text-slate-300 hover:text-white transition-colors"></i></a>
                       <a href="https://www.facebook.com/filipe.mafuila" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-facebook text-2xl text-slate-300 hover:text-white transition-colors"></i></a>
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
export default Banner