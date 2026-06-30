// import React from 'react';
// import { Mail, Camera } from 'lucide-react';
// import { FaInstagram } from 'react-icons/fa';

// const Footer = () => {
//     return (
//         <footer className="bg-[#F0F0EE] py-28 px-6 border-t border-gray-100">
//             <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                
//                 {/* Logo Section */}
//                 <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
//                     <div className="flex items-center gap-2">
//                         <Camera className="w-5 h-5 text-accent" />
//                         <span className="text-xl font-semibold tracking-wider heading-font">
//                             WILDLENS
//                         </span>
//                     </div>
//                     <p className="text-sm text-text/60 max-w-xs uppercase tracking-widest">
//                         Capturing nature's essence since 2024
//                     </p>
//                 </div>

//                 {/* Social Links */}
//                 <div className="flex items-center gap-8 text-text/70">
                    
//                     {/* Instagram */}
//                     <a 
//                         href="https://instagram.com/__by.faheem" 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         className="hover:text-accent flex items-center gap-2 group transition-all"
//                     >
//                         <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
//                         <span className="text-xs uppercase tracking-widest font-medium">
//                             Instagram
//                         </span>
//                     </a>

//                     {/* Email */}
//                     <a 
//                         href="mailto:faheem.devop@gmail.com" 
//                         className="hover:text-accent flex items-center gap-2 group transition-all"
//                     >
//                         <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
//                         <span className="text-xs uppercase tracking-widest font-medium">
//                             Contact
//                         </span>
//                     </a>
//                 </div>

//                 {/* Copyright */}
//                 <p className="text-[10px] text-text/40 uppercase tracking-widest leading-loose text-center md:text-right">
//                     &copy; 2024 WildLens by Faheem Shan.<br />
//                     All rights reserved.
//                 </p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
import React from 'react';
import { Mail, Camera } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#F0F0EE] dark:bg-[#111111] py-14 px-6 border-t border-gray-100 dark:border-white/10 transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                    <div className="flex items-center gap-2">
                        <Camera className="w-5 h-5 text-accent" />
                        <span className="text-xl font-semibold tracking-wider heading-font dark:text-white">
                            WILDLENS
                        </span>
                    </div>
                    <p className="text-sm text-text/60 dark:text-white/60 max-w-xs uppercase tracking-widest">
                        Capturing Kerala's nature, one frame at a time
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-8 text-text/70 dark:text-white/70">
                    
                    {/* Instagram */}
                    <a 
                        href="https://instagram.com/__by.faheem" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-accent flex items-center gap-2 group transition-all"
                    >
                        <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs uppercase tracking-widest font-medium">
                            Instagram
                        </span>
                    </a>

                    {/* Email */}
                    <a 
                        href="mailto:faheem.devop@gmail.com" 
                        className="hover:text-accent flex items-center gap-2 group transition-all"
                    >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-xs uppercase tracking-widest font-medium">
                            Contact
                        </span>
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-[10px] text-text/40 dark:text-white/40 uppercase tracking-widest leading-loose text-center md:text-right">
                    &copy; {new Date().getFullYear()} WildLens by Faheem Shan.<br />
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;