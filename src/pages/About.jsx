// import React from 'react';
// import heroImage from '../assets/images/hero.png';

// const About = () => {
//     return (
//         <main className="bg-background min-h-screen pt-40 pb-32">
//             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                
//                 {/* Image Section */}
//                 <div className="relative group animate-fade-up">
//                     <div className="absolute -top-10 -left-10 w-full h-full border-2 border-accent/20 group-hover:-top-14 group-hover:-left-14 transition-all duration-700 -z-10 rounded-2xl"></div>
//                     <div className="aspect-[4/5] bg-gray-200 shadow-2xl rounded-2xl overflow-hidden hover:shadow-accent/20 transition-all duration-700">
//                         <img 
//                           src={heroImage} 
//                           alt="Faheem Shan Nature Photography" 
//                           className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
//                         />
//                     </div>
//                 </div>

//                 {/* Text Content */}
//                 <div className="flex flex-col gap-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
//                     <p className="text-accent uppercase tracking-[0.5em] text-xs font-bold italic">THE MAN BEHIND THE LENS</p>
//                     <h1 className="text-5xl md:text-7xl font-black heading-font text-heading leading-tight italic uppercase tracking-tighter">Faheem Shan</h1>
//                     <p className="text-lg md:text-xl text-text/80 leading-relaxed italic uppercase tracking-[0.05em] font-light">
//                         "I’m a beginner photographer from Kerala who enjoys capturing nature, small moments, and real-life scenes through my lens."
//                     </p>
//                     <div className="h-px w-20 bg-accent my-4"></div>
//                     <p className="text-text/60 leading-loose italic uppercase tracking-widest text-sm max-w-lg">
//                         Every frame is a story of silence, growth, and the ephemeral beauty of our world. Based in the heart of Kerala, my goal is to highlight the delicate balance between us and the nature that surrounds us.
//                     </p>
                    
//                     <div className="flex gap-12 mt-12">
//                         <div className="text-center group">
//                             <p className="text-3xl font-black text-heading heading-font transition-all group-hover:text-accent italic mb-2 tracking-tighter uppercase">50+</p>
//                             <p className="text-[10px] text-text/40 uppercase tracking-[0.3em] font-medium transition-colors group-hover:text-text/60 italic">Nature Captures</p>
//                         </div>
//                         <div className="text-center group">
//                             <p className="text-3xl font-black text-heading heading-font transition-all group-hover:text-accent italic mb-2 tracking-tighter uppercase">Kerala</p>
//                             <p className="text-[10px] text-text/40 uppercase tracking-[0.3em] font-medium transition-colors group-hover:text-text/60 italic">Home Base</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default About;
import React from 'react';
// import heroImage from '../assets/images/hero.png';
import gateImage from '../assets/images/gate.JPG';

const About = () => {
    return (
        <main className="bg-background dark:bg-[#1A1A1A] min-h-screen pt-40 pb-32 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                
                {/* Image Section */}
                <div className="relative group animate-fade-up">
                    <div className="absolute -top-10 -left-10 w-full h-full border-2 border-accent/20 dark:border-accent/30 group-hover:-top-14 group-hover:-left-14 transition-all duration-700 -z-10 rounded-2xl"></div>
                    <div className="aspect-[4/5] bg-gray-200 dark:bg-[#2A2A2A] shadow-2xl rounded-2xl overflow-hidden hover:shadow-accent/20 transition-all duration-700">
                        <img 
                          src={gateImage} 
                          alt="Faheem Shan Nature Photography" 
                          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
                    <p className="text-accent uppercase tracking-[0.5em] text-xs font-bold italic">THE MAN BEHIND THE LENS</p>
                    <h1 className="text-4xl md:text-6xl font-black heading-font text-heading dark:text-white leading-tight not-italic uppercase tracking-tight">Faheem Shan</h1>
                    <p className="text-lg md:text-xl text-text/80 dark:text-white/80 leading-relaxed italic uppercase tracking-[0.05em] font-light">
                        "I'm a Kerala-based photographer who finds stories in nature, quiet moments, and everyday scenes most people walk past."
                    </p>
                    <div className="h-px w-20 bg-accent my-4"></div>
                    <p className="text-text/60 dark:text-white/60 leading-loose italic uppercase tracking-widest text-sm max-w-lg">
                        Every frame is a story of silence, growth, and the ephemeral beauty of our world. Based in the heart of Kerala, my goal is to highlight the delicate balance between us and the nature that surrounds us.
                    </p>
                    
                    <div className="flex gap-12 mt-12">
                        <div className="text-center group">
                            <p className="text-3xl font-black text-heading dark:text-white heading-font transition-all group-hover:text-accent not-italic mb-2 tracking-tight uppercase">50+</p>
                            <p className="text-[10px] text-text/40 dark:text-white/40 uppercase tracking-[0.3em] font-medium transition-colors group-hover:text-text/60 dark:group-hover:text-white/60 italic">Photographs</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-3xl font-black text-heading dark:text-white heading-font transition-all group-hover:text-accent not-italic mb-2 tracking-tight uppercase">Kerala</p>
                            <p className="text-[10px] text-text/40 dark:text-white/40 uppercase tracking-[0.3em] font-medium transition-colors group-hover:text-text/60 dark:group-hover:text-white/60 italic">Home Base</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;