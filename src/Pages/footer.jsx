function Footer(){
  const currentYear = new Date().getFullYear();

  return(
    <footer className="bg-slate-950 border-t border-slate-900 text-center text-slate-400 py-8 px-4 text-base">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {currentYear} Filipe Mafuila. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4 text-slate-400">
          <a href="https://www.linkedin.com/in/filipe-mafuila/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
          <a href="https://github.com/FilipeMafuila" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <i className="fa-brands fa-square-github text-xl"></i>
          </a>
          <a href="https://www.facebook.com/filipe.mafuila" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <i className="fa-brands fa-square-facebook text-xl"></i>
          </a>
          <a href="#banner" aria-label="Voltar ao topo" className="ml-2 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800" title="Voltar ao topo">
            <i className="fa-solid fa-arrow-up text-xs"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
