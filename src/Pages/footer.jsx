function Footer(){
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "filipe-mafuila",
      description: "Rede profissional & artigos",
      url: "https://www.linkedin.com/in/filipe-mafuila/",
      icon: "fa-brands fa-linkedin-in",
      color: "text-[#0A66C2]",
      bgColor: "bg-[#0A66C2]/10",
      borderColor: "border-[#0A66C2]/20",
      hoverBorder: "hover:border-[#0A66C2]/60",
      hoverBg: "hover:bg-[#0A66C2]/15",
      actionText: "Conectar",
    },
    {
      name: "GitHub",
      handle: "FilipeMafuila",
      description: "Repositórios & código aberto",
      url: "https://github.com/FilipeMafuila",
      icon: "fa-brands fa-github",
      color: "text-white",
      bgColor: "bg-slate-800",
      borderColor: "border-slate-700/60",
      hoverBorder: "hover:border-purple-500/60",
      hoverBg: "hover:bg-purple-500/10",
      actionText: "Ver código",
    },
    {
      name: "WhatsApp",
      handle: "+244 949 630 037",
      description: "Conversa direta & orçamentos",
      url: "https://wa.me/244949630037",
      icon: "fa-brands fa-whatsapp",
      color: "text-[#25D366]",
      bgColor: "bg-[#25D366]/10",
      borderColor: "border-[#25D366]/20",
      hoverBorder: "hover:border-[#25D366]/60",
      hoverBg: "hover:bg-[#25D366]/15",
      actionText: "Conversar",
    },
    {
      name: "Facebook",
      handle: "filipe.mafuila",
      description: "Atualizações & comunidade",
      url: "https://www.facebook.com/filipe.mafuila",
      icon: "fa-brands fa-facebook-f",
      color: "text-[#1877F2]",
      bgColor: "bg-[#1877F2]/10",
      borderColor: "border-[#1877F2]/20",
      hoverBorder: "hover:border-[#1877F2]/60",
      hoverBg: "hover:bg-[#1877F2]/15",
      actionText: "Seguir",
    },
    {
      name: "Email",
      handle: "filipemafuila8@gmail.com",
      description: "Propostas & contacto formal",
      url: "mailto:filipemafuila8@gmail.com",
      icon: "fa-solid fa-envelope",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      hoverBorder: "hover:border-indigo-500/60",
      hoverBg: "hover:bg-indigo-500/15",
      actionText: "Enviar email",
    },
  ];

  return(
    <footer className="bg-slate-950 border-t border-slate-900/80 pt-16 pb-12 px-4 sm:px-8 md:px-16 lg:px-32 text-slate-400">
      <div className="max-w-7xl mx-auto">
        {/* Bloco Detalhado de Redes Sociais */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                Canais Oficiais
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
                Conecte-se Comigo
              </h3>
              <p className="text-base text-slate-400 mt-2 max-w-2xl">
                Acompanhe meus projectos, código aberto e publicações, ou inicie uma conversa profissional diretamente pelo canal que preferir.
              </p>
            </div>
            <a 
              href="#banner" 
              aria-label="Voltar ao topo" 
              className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all text-sm font-medium self-start sm:self-auto cursor-pointer"
            >
              <span>Topo</span>
              <i className="fa-solid fa-arrow-up text-xs"></i>
            </a>
          </div>

          {/* Grid de Cards Detalhados de Redes Sociais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 ${item.hoverBorder} ${item.hoverBg} transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.bgColor} ${item.borderColor}`}>
                      <i className={`${item.icon} text-lg ${item.color}`}></i>
                    </div>
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs text-slate-600 group-hover:text-white transition-colors"></i>
                  </div>
                  <h4 className="font-bold text-base text-white group-hover:text-indigo-300 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs font-medium text-slate-400 truncate mt-0.5" title={item.handle}>
                    {item.handle}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                  <span>{item.actionText}</span>
                  <i className="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Rodapé Final com Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
          <p>&copy; {currentYear} Filipe Mafuila. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
