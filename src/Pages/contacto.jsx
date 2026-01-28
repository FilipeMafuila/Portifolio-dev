import { useForm, ValidationError } from '@formspree/react';

function Contacto(){
    const [state, handleSubmit] = useForm("mwvbkoly");

   return(
        <section id="contacto" className="bg-slate-950 text-slate-300 px-4 sm:px-8 md:px-16 lg:px-32 py-24">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contacto</h2>
                    <p className="text-xl mb-8 text-slate-300 text-justify">Tem um projecto em mente ou quer dizer olá? Use minhas informações de contacto ou preencha o formulário e vamos conversar.</p>
                    
                    <ul className="space-y-6 mt-12 text-slate-300">
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-envelope text-xl text-indigo-400"></i>
                            <a href="mailto:filipemafuila8@gmail.com" className="hover:text-white transition-colors">filipemafuila8@gmail.com</a>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-phone text-xl text-indigo-400"></i>
                            <div>
                                <p>Unitel: <a href="tel:+244949630037" className="hover:text-white transition-colors">949 630 037</a></p>
                                <p>Africell: <a href="tel:+244954031884" className="hover:text-white transition-colors">954 031 884</a></p>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-location-dot text-xl text-indigo-400"></i>
                            <span>Luanda / Cacuaco, Angola</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                    {state.succeeded ? (
                        <div className="text-center py-8">
                            <i className="fa-solid fa-circle-check text-5xl text-emerald-500 mb-4"></i>
                            <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                            <p className="text-slate-300">Obrigado pelo contacto. Responderei o mais breve possível.</p>
                        </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-base font-medium text-slate-300">Nome</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                placeholder="Seu nome" 
                                className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all"
                                required
                            />
                            <ValidationError prefix="Nome" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-base font-medium text-slate-300">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                placeholder="seu@email.com" 
                                className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all"
                                required
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-base font-medium text-slate-300">Mensagem</label>
                            <textarea 
                                id="message"
                                name="message"
                                placeholder="Sua mensagem..." 
                                className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 h-32 resize-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all"
                                required
                            ></textarea>
                            <ValidationError prefix="Mensagem" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
                        </div>
                        <button type="submit" disabled={state.submitting} className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800/50 disabled:cursor-not-allowed text-white font-medium transition-all duration-300 py-3 px-8 shadow-lg shadow-indigo-500/20 rounded-lg w-full flex justify-center items-center gap-2">
                            {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
                        </button>
                    </form>
                    )}
                </div>
            </div>
        </section>
    )
}
export default Contacto
