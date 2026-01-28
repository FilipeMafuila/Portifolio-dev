import odontoImg from '../assets/odonto.png';
import portfolioImg from '../assets/portifolio.png';

function Projects(){
    const projectData = [
        {
            image: odontoImg,
            title: "Odonto+Care",
            description: "Website institucional para a clínica odontológica Odonto+Care, focado em apresentar os serviços e facilitar o agendamento de consultas.",
            tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
            link: "https://odonto-care-alpha.vercel.app/",
            aos: "fade-up"
        },
        {
            image: portfolioImg,
            title: "Portfólio Pessoal",
            description: "Meu portfólio pessoal, desenvolvido para apresentar minhas habilidades, projetos e trajetória. Este é o site que você está navegando agora.",
            tags: ['React', 'Tailwind CSS'],
            link: "#", // Atualize com o link do seu portfólio quando estiver online
            aos: "fade-up"
        },
        // Adicione mais projetos aqui no futuro
    ];

    return(
        <>
        <section id="projectos" className="bg-slate-950 text-slate-300 px-4 sm:px-8 md:px-16 lg:px-32 py-24">
            <div className="max-w-7xl mx-auto">
                <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Projectos
                </h2>
                <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="text-xl mb-16 max-w-3xl text-slate-300 text-justify">
                    Aqui estão alguns dos meus projectos recentes que demonstram minhas habilidades em desenvolvimento front-end e design de interfaces.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projectData.map((project, index) => (
                        <div 
                            key={index} 
                            data-aos={project.aos}
                            data-aos-offset="100"
                            data-aos-duration="1500"
                            className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
                        >
                            <div className="overflow-hidden">
                                <img src={project.image} alt={`Imagem do projeto ${project.title}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col">
                                <h3 className="font-bold text-2xl mb-2 text-white">{project.title}</h3>
                                <p className="text-base leading-relaxed text-slate-300 flex-grow mb-4 text-justify">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-slate-800 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white font-medium inline-flex items-center gap-2 transition-colors self-start">
                                    Ver projecto
                                    <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                                </a>
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
