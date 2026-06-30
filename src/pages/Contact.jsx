// import React, { useState } from 'react';
// import { Send, Mail, MapPin } from 'lucide-react';
// import { FaInstagram } from 'react-icons/fa';

// const Contact = () => {
//     const [status, setStatus] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setStatus('Message sent successfully!');
//         e.target.reset();
//         setTimeout(() => setStatus(''), 5000);
//     };

//     return (
//         <main className="bg-background min-h-screen pt-40 pb-32">
//             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
                
//                 {/* Contact Info */}
//                 <div className="flex flex-col gap-10 animate-fade-in">
//                     <p className="text-accent uppercase tracking-[0.5em] text-xs font-bold italic">LET'S CONNECT</p>
//                     <h1 className="text-5xl md:text-7xl font-black heading-font text-heading leading-tight italic uppercase tracking-tighter">Get in Touch</h1>
//                     <p className="text-lg md:text-xl text-text/60 leading-relaxed italic uppercase tracking-[0.05em] font-light max-w-md">
//                         Have a project or just want to chat about nature photography? I'd love to hear from you.
//                     </p>
                    
//                     <div className="flex flex-col gap-10 mt-12">
//                         <a href="mailto:contact@wildlens.com" className="flex items-center gap-6 group hover:text-accent transition-colors">
//                             <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
//                                 <Mail className="w-6 h-6 text-accent" />
//                             </div>
//                             <span className="text-sm uppercase tracking-widest font-black italic">Email</span>
//                         </a>
//                         <a href="https://instagram.com/._picturesque_.__" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group hover:text-accent transition-colors">
//                             <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
//                                 <FaInstagram className="w-6 h-6 text-accent" />
//                             </div>
//                             <span className="text-sm uppercase tracking-widest font-black italic">Instagram</span>
//                         </a>
//                         <div className="flex items-center gap-6 group">
//                             <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
//                                 <MapPin className="w-6 h-6 text-accent" />
//                             </div>
//                             <span className="text-sm uppercase tracking-widest font-black italic">Kerala, India</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Contact Form */}
//                 <div className="bg-white p-10 md:p-16 shadow-2xl rounded-3xl border border-gray-100 animate-fade-up">
//                     <form onSubmit={handleSubmit} className="flex flex-col gap-10">
//                         <div className="flex flex-col gap-3 group">
//                             <label className="text-[10px] uppercase tracking-[0.4em] font-black text-text/40 group-focus-within:text-accent italic">Your Name</label>
//                             <input 
//                               type="text" 
//                               required 
//                               className="bg-transparent border-b border-gray-200 py-4 focus:border-accent focus:outline-none transition-colors text-lg text-heading font-black italic uppercase tracking-tighter" 
//                               placeholder="Faheem Shan"
//                             />
//                         </div>
//                         <div className="flex flex-col gap-3 group">
//                             <label className="text-[10px] uppercase tracking-[0.4em] font-black text-text/40 group-focus-within:text-accent italic">Email Address</label>
//                             <input 
//                               type="email" 
//                               required 
//                               className="bg-transparent border-b border-gray-200 py-4 focus:border-accent focus:outline-none transition-colors text-lg text-heading font-black italic uppercase tracking-tighter" 
//                               placeholder="hello@example.com"
//                             />
//                         </div>
//                         <div className="flex flex-col gap-3 group">
//                             <label className="text-[10px] uppercase tracking-[0.4em] font-black text-text/40 group-focus-within:text-accent italic">Message</label>
//                             <textarea 
//                               rows="4" 
//                               required 
//                               className="bg-transparent border-b border-gray-200 py-4 focus:border-accent focus:outline-none transition-colors text-lg text-heading font-black italic uppercase tracking-tighter resize-none" 
//                               placeholder="How can I help you?"
//                             ></textarea>
//                         </div>
                        
//                         <button 
//                           type="submit" 
//                           className="flex items-center justify-center gap-4 bg-accent hover:bg-heading text-white py-6 rounded-2xl font-black italic uppercase tracking-[0.3em] text-xs transition-all duration-500 shadow-xl hover:shadow-2xl active:scale-95 mt-4"
//                         >
//                             <span>Send Message</span>
//                             <Send className="w-5 h-5" />
//                         </button>
                        
//                         {status && (
//                             <p className="text-center text-accent text-sm font-black italic uppercase tracking-widest animate-fade-in">{status}</p>
//                         )}
//                     </form>
//                 </div>

//             </div>
//         </main>
//     );
// };

// export default Contact;
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, MapPin } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [sending, setSending] = useState(false);
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            setStatus('Message sent successfully!');
            formRef.current.reset();
        })
        .catch(() => {
            setStatus('Something went wrong. Please try again.');
        })
        .finally(() => {
            setSending(false);
            setTimeout(() => setStatus(''), 5000);
        });
    };

    return (
        <main className="bg-background dark:bg-[#1A1A1A] min-h-screen pt-40 pb-32 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
                
                <div className="flex flex-col gap-10 animate-fade-in">
                    <p className="text-accent uppercase tracking-[0.5em] text-xs font-bold italic">LET'S CONNECT</p>
                    <h1 className="text-4xl md:text-6xl font-black heading-font text-heading dark:text-white leading-tight not-italic uppercase tracking-tight">Get in Touch</h1>
                    <p className="text-lg md:text-xl text-text/60 dark:text-white/60 leading-relaxed italic uppercase tracking-[0.05em] font-light max-w-md">
                        Have a project or just want to chat about photography? I'd love to hear from you.
                    </p>
                    
                    <div className="flex flex-col gap-10 mt-12">
                        <a href="mailto:contact@wildlens.com" className="flex items-center gap-6 group hover:text-accent transition-colors">
                            <div className="w-16 h-16 bg-white dark:bg-[#2A2A2A] shadow-lg rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
                                <Mail className="w-6 h-6 text-accent" />
                            </div>
                            <span className="text-sm uppercase tracking-widest font-black italic dark:text-white/80">Email</span>
                        </a>
                        <a href="https://instagram.com/._picturesque_.__" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group hover:text-accent transition-colors">
                            <div className="w-16 h-16 bg-white dark:bg-[#2A2A2A] shadow-lg rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
                                <FaInstagram className="w-6 h-6 text-accent" />
                            </div>
                            <span className="text-sm uppercase tracking-widest font-black italic dark:text-white/80">Instagram</span>
                        </a>
                        <div className="flex items-center gap-6 group">
                            <div className="w-16 h-16 bg-white dark:bg-[#2A2A2A] shadow-lg rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
                                <MapPin className="w-6 h-6 text-accent" />
                            </div>
                            <span className="text-sm uppercase tracking-widest font-black italic dark:text-white/80">Kerala, India</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#1F1F1F] p-8 md:p-10 shadow-2xl rounded-3xl border border-gray-100 dark:border-white/10 animate-fade-up">
                  <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2 group">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-text/40 dark:text-white/40 group-focus-within:text-accent">Your Name</label>
                    <input 
                    type="text" 
                    name="name"
                    required 
                    className="bg-transparent border-b border-gray-200 dark:border-white/20 py-4 focus:border-accent focus:outline-none transition-colors text-lg text-heading dark:text-white font-medium tracking-normal" 
                    placeholder="Your name"
                    />
                </div>
                <div className="flex flex-col gap-3 group">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-text/40 dark:text-white/40 group-focus-within:text-accent">Email Address</label>
                    <input 
                    type="email" 
                    name="email"
                    required 
                    className="bg-transparent border-b border-gray-200 dark:border-white/20 py-4 focus:border-accent focus:outline-none transition-colors text-lg text-heading dark:text-white font-medium tracking-normal" 
                    placeholder="hello@example.com"
                    />
                </div>
                <div className="flex flex-col gap-3 group">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-text/40 dark:text-white/40 group-focus-within:text-accent">Subject</label>
                    <input 
                    type="text" 
                    name="title"
                    required 
                    className="bg-transparent border-b border-gray-200 dark:border-white/20 py-4 focus:border-accent focus:outline-none transition-colors text-lg text-heading dark:text-white font-medium tracking-normal" 
                    placeholder="What's this about?"
                    />
                </div>
                <div className="flex flex-col gap-3 group">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-text/40 dark:text-white/40 group-focus-within:text-accent">Message</label>
                    <textarea 
                    rows="4" 
                    name="message"
                    required 
                    className="bg-transparent border-b border-gray-200 dark:border-white/20 py-4 focus:border-accent focus:outline-none transition-colors text-lg text-heading dark:text-white font-medium tracking-normal resize-none" 
                    placeholder="How can I help you?"
                    ></textarea>
                </div>
                        
                        <button 
                          type="submit" 
                          disabled={sending}
                          className="flex items-center justify-center gap-4 bg-accent hover:bg-heading text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 shadow-xl hover:shadow-2xl active:scale-95 mt-4 disabled:opacity-50"
                        >
                            <span>{sending ? 'Sending...' : 'Send Message'}</span>
                            <Send className="w-5 h-5" />
                        </button>
                        
                        {status && (
                            <p className="text-center text-accent text-sm font-black uppercase tracking-widest animate-fade-in">{status}</p>
                        )}
                    </form>
                </div>

            </div>
        </main>
    );
};

export default Contact;