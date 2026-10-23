function Banner(){
    return(
        <>
        <section id="banner" className="bg-slate-950 text-slate-300 px-4 sm:px-8 md:px-16 lg:px-32 py-20 min-h-screen flex items-center overflow-x-hidden">
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 text-white tracking-tight">
                        Filipe Mafuila
                    </h1>
                    <p className="font-medium text-xl sm:text-2xl lg:text-3xl mb-4 text-indigo-400">
                        Desenvolvedor Front-End & Automações
                    </p>
                    <p className="mb-8 text-lg sm:text-xl text-slate-400 max-w-xl">
                        Criando interfaces modernas, sistemas sob medida e automações de processos que geram resultados reais.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 justify-center md:justify-start w-full sm:w-auto">
                        <a href="#contacto" className="bg-indigo-800 hover:bg-indigo-700 text-white font-medium transition-all duration-300 py-3 px-6 sm:px-8 shadow-lg border border-indigo-700/50 rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto text-center whitespace-nowrap">
                            Fale Comigo <i className="fa-solid fa-paper-plane text-xs"></i>
                        </a>
                        <a href="#projectos" className="bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all duration-300 py-3 px-6 sm:px-8 shadow-lg rounded-lg flex items-center justify-center gap-2 w-full sm:w-auto text-center whitespace-nowrap">
                            Ver Projectos <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        </a>
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
