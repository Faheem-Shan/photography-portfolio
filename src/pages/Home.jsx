// // import React from 'react';
// // import Hero from '../components/Hero';
// // import GalleryGrid from '../components/GalleryGrid';

// // const Home = () => {
// //     return (
// //         <main className="bg-background">
// //             <Hero />
            
// //             {/* Featured Section */}
// //             <div className="py-32 px-6 max-w-5xl mx-auto text-center border-b border-gray-200">
// //                 <p className="text-accent uppercase tracking-[0.4em] text-xs font-semibold mb-6 italic">The Vision</p>
// //                 <h2 className="text-4xl md:text-5xl font-black text-heading heading-font leading-tight tracking-tight uppercase italic mb-8">Capturing Nature's Essence Through My Lens</h2>
// //                 <p className="text-lg md:text-xl text-text/60 leading-relaxed max-w-3xl mx-auto italic font-light drop-shadow-sm uppercase tracking-wider">Explore a curated collection of minimalist nature photography, specializing in the scenic landscapes and macro transitions of Kerala.</p>
// //             </div>

// //             {/* Quick Gallery Sneak Peek */}
// //             <GalleryGrid />

// //             {/* Call to Action */}
// //             <div className="bg-white py-32 px-6 text-center shadow-inner rounded-3xl mx-6 mb-12">
// //                 <h3 className="text-3xl md:text-4xl font-extrabold text-heading heading-font uppercase italic tracking-tighter mb-8">Interested in my work?</h3>
// //                 <a href="/contact" className="inline-block bg-accent hover:bg-heading text-white px-12 py-5 rounded-full font-bold tracking-widest text-sm uppercase transition-all duration-300 shadow-xl hover:shadow-2xl">Get in touch</a>
// //             </div>
// //         </main>
// //     );
// // };

// // export default Home;

// import React from 'react';
// import Hero from '../components/Hero';
// import GalleryGrid from '../components/GalleryGrid';
// import { Link } from 'react-router-dom';

// const Home = () => {
//     return (
//         <main className="bg-background">

//             {/* Hero */}
//             <Hero />

//             {/* 🌿 Vision Section */}
//             <section className="py-24 px-6 max-w-4xl mx-auto text-center">
                
//                 <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">
//                     The Vision
//                 </p>

//                 <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6 heading-font">
//                     Capturing nature through simple, real moments
//                 </h2>

//                 <p className="text-text/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
//                     A collection of nature, light, and everyday scenes captured from Kerala — 
//                     focusing on calm visuals and natural beauty.
//                 </p>

//             </section>

//             {/* 🌿 Gallery Preview */}
//             <section className="py-12">
//                 <GalleryGrid />
//             </section>

//             {/* 🌿 CTA Section */}
//             <section className="py-20 px-6">
//                 <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-2xl py-16 px-8 shadow-sm">

//                     <h3 className="text-2xl md:text-3xl font-semibold mb-4 heading-font">
//                         Interested in my work?
//                     </h3>

//                     <p className="text-text/60 mb-8">
//                         Feel free to reach out for collaborations or just to connect.
//                     </p>

//                     <Link 
//                         to="/contact" 
//                         className="inline-block bg-accent text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition"
//                     >
//                         Get in touch
//                     </Link>

//                 </div>
//             </section>

//         </main>
//     );
// };

// export default Home;
import React from 'react';
import Hero from '../components/Hero';
import GalleryGrid from '../components/GalleryGrid';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="bg-background dark:bg-[#1A1A1A] transition-colors duration-500">

            {/* Hero */}
            <Hero />

            {/* 🌿 Vision Section */}
            <section className="py-24 px-6 max-w-4xl mx-auto text-center">
                
                <p className="text-accent uppercase tracking-[0.3em] text-xs mb-4">
                    The Vision
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6 heading-font dark:text-white">
                    Capturing nature through simple, real moments
                </h2>

                <p className="text-text/60 dark:text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    A collection of nature, light, and everyday scenes captured from Kerala — 
                    focusing on calm visuals and natural beauty.
                </p>

            </section>

            {/* 🌿 Gallery Preview */}
            <section className="py-12">
                <GalleryGrid />
            </section>

            {/* 🌿 CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto text-center bg-card dark:bg-[#1F1F1F] border border-border dark:border-white/10 rounded-2xl py-16 px-8 shadow-sm">

                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 heading-font dark:text-white">
                       Let's create something together
                    </h3>

                    <p className="text-text/60 dark:text-white/60 mb-8">
                        Feel free to reach out for collaborations or just to connect.
                    </p>

                    <Link 
                        to="/contact" 
                        className="inline-block bg-accent text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition"
                    >
                        Get in touch
                    </Link>

                </div>
            </section>

        </main>
    );
};

export default Home;