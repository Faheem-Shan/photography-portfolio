// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Camera } from 'lucide-react';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const navLinks = [
//         { name: 'Home', path: '/' },
//         { name: 'Gallery', path: '/gallery' },
//         { name: 'About', path: '/about' },
//         { name: 'Contact', path: '/contact' },
//     ];

//     const isTransparent = location.pathname === '/' && !scrolled;

//     return (
//         <nav className={`fixed w-full z-50 transition-all duration-500 ${isTransparent ? 'bg-transparent py-8' : 'bg-[#F3F4F6]/90 backdrop-blur-xl border-b border-black/5 py-4 shadow-sm'}`}>
//             <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//                 <Link to="/" className="flex items-center gap-3 group">
//                     <Camera className={`w-6 h-6 transition-colors ${isTransparent ? 'text-white' : 'text-accent'}`} />
//                     <span className={`text-xl font-black tracking-tighter heading-font transition-colors italic ${isTransparent ? 'text-white' : 'text-heading'}`}>WILDLENS</span>
//                 </Link>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex items-center gap-10">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.name}
//                             to={link.path}
//                             className={`text-[10px] font-black tracking-[0.4em] uppercase transition-all hover:text-accent italic ${
//                                 location.pathname === link.path 
//                                     ? 'text-accent' 
//                                     : isTransparent ? 'text-white' : 'text-text'
//                             }`}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </div>

//                 {/* Mobile Toggle */}
//                 <button 
//                   className={`md:hidden p-2 transition-colors ${isTransparent ? 'text-white' : 'text-text'}`}
//                   onClick={() => setIsOpen(!isOpen)}
//                   aria-label="Toggle Menu"
//                 >
//                     {isOpen ? <X /> : <Menu />}
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`md:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-3xl transition-all duration-700 ${isOpen ? 'opacity-100 visible h-screen' : 'opacity-0 invisible h-0'} overflow-hidden`}>
//                 <div className="flex flex-col items-center gap-12 pt-24 text-heading italic uppercase tracking-[0.4em] font-black text-xs">
//                     {navLinks.map((link) => (
//                         <Link
//                             key={link.name}
//                             to={link.path}
//                             onClick={() => setIsOpen(false)}
//                             className={`hover:text-accent transition-colors ${location.pathname === link.path ? 'text-accent' : ''}`}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, Aperture } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        const next = !darkMode;
        setDarkMode(next);
        if (next) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isTransparent = location.pathname === '/' && !scrolled;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isTransparent ? 'bg-transparent py-8' : 'bg-[#F3F4F6]/90 dark:bg-[#111]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/10 py-4 shadow-sm'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <Camera className={`w-6 h-6 transition-colors ${isTransparent ? 'text-white' : 'text-accent'}`} />
                    <span className={`text-xl font-black tracking-tighter heading-font transition-colors ${isTransparent ? 'text-white' : 'text-heading dark:text-white'}`}>WILDLENS</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-[10px] font-black tracking-[0.4em] uppercase transition-all hover:text-accent ${
                                location.pathname === link.path 
                                    ? 'text-accent' 
                                    : isTransparent ? 'text-white' : 'text-text dark:text-white/80'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                        className={`ml-6 p-2 rounded-full border transition-all duration-500 hover:rotate-45 ${
                            isTransparent 
                                ? 'border-white/30 text-white hover:bg-white/10' 
                                : 'border-border dark:border-white/20 text-text dark:text-white hover:bg-accent/10'
                        }`}
                    >
                        <Aperture className={`w-5 h-5 transition-transform duration-700 ${darkMode ? 'rotate-90' : 'rotate-0'}`} />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle dark mode"
                        className={`p-2 rounded-full border transition-all duration-500 ${isTransparent ? 'border-white/30 text-white' : 'border-border dark:border-white/20 text-text dark:text-white'}`}
                    >
                        <Aperture className={`w-5 h-5 transition-transform duration-700 ${darkMode ? 'rotate-90' : 'rotate-0'}`} />
                    </button>
                    <button 
                      className={`p-2 transition-colors ${isTransparent ? 'text-white' : 'text-text dark:text-white'}`}
                      onClick={() => setIsOpen(!isOpen)}
                      aria-label="Toggle Menu"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-background/98 dark:bg-[#1A1A1A]/98 backdrop-blur-3xl transition-all duration-700 ${isOpen ? 'opacity-100 visible h-screen' : 'opacity-0 invisible h-0'} overflow-hidden`}>
                <div className="flex flex-col items-center gap-12 pt-24 text-heading dark:text-white uppercase tracking-[0.4em] font-black text-xs">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`hover:text-accent transition-colors ${location.pathname === link.path ? 'text-accent' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;