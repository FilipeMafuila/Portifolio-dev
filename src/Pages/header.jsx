import { useState } from 'react';

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
      { href: '#banner', text: 'Home' },
      { href: '#sobre', text: 'Sobre' },
      { href: '#servicos', text: 'Serviços' },
      { href: '#projectos', text: 'Projectos' },
      { href: '#contacto', text: 'Contacto' },
    ];

    return(
       <nav className="fixed top-0 left-0 z-[999] w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 text-white py-4 transition-all duration-300">
         <div className="container px-4 sm:px-8 md:px-12 lg:px-20 flex justify-between items-center mx-auto">
           <div>
             <p className="font-bold text-xl tracking-tight">Filipe Mafuila</p>
           </div>
           
           {/* Desktop Menu */}
           <div className="hidden md:flex gap-8">
             {navLinks.map((link) => (
               <a key={link.href} className="text-base font-medium text-slate-300 hover:text-white transition-colors" href={link.href}>
                 {link.text}
               </a>
             ))}
           </div>
   
           {/* Mobile Menu Button */}
           <div className="md:hidden">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
               <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
             </button>
           </div>
         </div>
   
         {/* Mobile Menu */}
         {isMenuOpen && (
           <div className="md:hidden mt-4 px-4 sm:px-8">
             <div className="flex flex-col items-center gap-4 bg-slate-900 border border-slate-800 rounded-lg py-4 shadow-xl">
               {navLinks.map((link) => (
                 <a 
                   key={link.href} 
                   className="text-slate-300 hover:text-white font-medium" 
                   href={link.href}
                   onClick={() => setIsMenuOpen(false)} // Close menu on click
                 >
                   {link.text}
                 </a>
               ))}
             </div>
           </div>
         )}
       </nav>
    )
}
export default Header
