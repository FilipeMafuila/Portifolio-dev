function Footer(){
  const currentYear = new Date().getFullYear();

  return(
    <footer className="bg-slate-950 border-t border-slate-900 text-center text-slate-400 py-8 text-base">
      <p>&copy; {currentYear} Filipe Mafuila. Todos os direitos reservados.</p>
    </footer>
  )
}
export default Footer