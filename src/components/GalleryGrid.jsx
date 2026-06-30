// import React, { useState, useEffect } from 'react';
// import { X, ZoomIn } from 'lucide-react';

// // Images
// import aesth from '../assets/images/aesth.jpg';
// import flower from '../assets/images/flower.JPG';
// import pillar from '../assets/images/pillar.jpg';
// import sun from '../assets/images/sun.jpg';
// import taj from '../assets/images/taj.jpg';
// import tomb from '../assets/images/tomb.jpg';

// const IMAGES = [
//     { id: 1, src: taj, alt: 'The Taj Mahal captured at dawn', title: 'Eternal Beauty' },
//     { id: 2, src: aesth, alt: 'Aesthetic minimalist nature capture', title: 'Serene Moments' },
//     { id: 3, src: flower, alt: 'Flower in the soft rain', title: 'Raindrop Bloom' },
//     { id: 4, src: pillar, alt: 'Ancient architectural detailing', title: 'Legacy Pillars' },
//     { id: 5, src: sun, alt: 'Golden sunlight through the lens', title: 'Golden Hour' },
//     { id: 6, src: tomb, alt: 'Historic tomb architecture', title: 'History Framed' },
// ];

// const GalleryGrid = () => {
//     const [selectedImage, setSelectedImage] = useState(null);

//     useEffect(() => {
//         const handleKey = (e) => {
//             if (e.key === 'Escape') setSelectedImage(null);
//         };
//         window.addEventListener('keydown', handleKey);
//         return () => window.removeEventListener('keydown', handleKey);
//     }, []);

//     return (
//         <section className="py-24 px-6 max-w-7xl mx-auto bg-background">
//             <div className="mb-24 text-center animate-fade-in">
//                 <p className="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-4">THE COLLECTION</p>
//                 <h2 className="text-3xl md:text-5xl font-black heading-font text-heading leading-tight not-italic uppercase tracking-tight">
//                     Capturing Real Moments
//                 </h2>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                 {IMAGES.map((img, index) => (
//                     <div
//                         key={img.id}
//                         className={`group relative overflow-hidden bg-white shadow-md hover:shadow-xl border border-gray-100 transition-all duration-700 cursor-pointer p-3 rounded-sm animate-fade-up ${
//                             index % 2 === 0 ? 'mt-0' : 'md:mt-12'
//                         }`}
//                         style={{ animationDelay: `${index * 150}ms` }}
//                         onClick={() => setSelectedImage(img)}
//                     >
//                         <div className="aspect-[4/5] overflow-hidden rounded-sm">
//                             <img
//                                 src={img.src}
//                                 alt={img.alt}
//                                 loading={index === 0 ? 'eager' : 'lazy'}
//                                 className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
//                             />
//                         </div>

//                         {/* Overlay */}
//                         <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
//                             <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
//                                 <ZoomIn className="w-8 h-8 text-white mx-auto mb-4" />
//                                 <h3 className="text-white text-lg font-bold heading-font uppercase italic tracking-wider">
//                                     {img.title}
//                                 </h3>
//                                 <p className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-light mt-2">View Full Image</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Lightbox */}
//             {selectedImage && (
//                 <div
//                     className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-md p-4 md:p-12 animate-fade-in"
//                     onClick={() => setSelectedImage(null)}
//                 >
//                     <button
//                         className="absolute top-10 right-10 p-4 text-white hover:text-accent transition-colors transition-all duration-300 transform hover:rotate-90"
//                         onClick={() => setSelectedImage(null)}
//                     >
//                         <X className="w-10 h-10" />
//                     </button>

//                     <div
//                         className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <img
//                             src={selectedImage.src}
//                             alt={selectedImage.alt}
//                             className="w-auto max-h-[75vh] object-contain shadow-2xl border-4 border-white/10"
//                         />

//                         <div className="mt-10 text-center text-white">
//                             <h3 className="text-4xl font-black heading-font tracking-tight uppercase not-italic mb-3">
//                                 {selectedImage.title}
//                             </h3>
//                             <div className="h-px w-12 bg-accent/50 mx-auto mb-4"></div>
//                             <p className="text-xs uppercase tracking-[0.5em] font-light opacity-60">
//                                 WildLens &bull; Faheem Shan
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default GalleryGrid;
import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

// Images
import aesth from '../assets/images/aesth.jpg';
import flower from '../assets/images/flower.JPG';
import pillar from '../assets/images/pillar.jpg';
import sun from '../assets/images/sun.jpg';
import taj from '../assets/images/taj.jpg';
import tomb from '../assets/images/tomb.jpg';

const IMAGES = [
    { id: 1, src: taj, alt: 'The Taj Mahal captured at dawn', title: 'Eternal Beauty' },
    { id: 2, src: aesth, alt: 'Aesthetic minimalist nature capture', title: 'Serene Moments' },
    { id: 3, src: flower, alt: 'Flower in the soft rain', title: 'Raindrop Bloom' },
    { id: 4, src: pillar, alt: 'Ancient architectural detailing', title: 'Legacy Pillars' },
    { id: 5, src: sun, alt: 'Golden sunlight through the lens', title: 'Golden Hour' },
    { id: 6, src: tomb, alt: 'Historic tomb architecture', title: 'History Framed' },
];

const GalleryGrid = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto bg-background dark:bg-[#1A1A1A] transition-colors duration-500">
            <div className="mb-24 text-center animate-fade-in">
                <p className="text-accent uppercase tracking-[0.4em] text-xs font-bold mb-4">THE COLLECTION</p>
                <h2 className="text-3xl md:text-5xl font-black heading-font text-heading dark:text-white leading-tight not-italic uppercase tracking-tight">
                    Capturing Real Moments
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {IMAGES.map((img, index) => (
                    <div
                        key={img.id}
                        className={`group relative overflow-hidden bg-white dark:bg-[#1F1F1F] shadow-md hover:shadow-xl border border-gray-100 dark:border-white/10 transition-all duration-700 cursor-pointer p-3 rounded-sm animate-fade-up ${
                            index % 2 === 0 ? 'mt-0' : 'md:mt-12'
                        }`}
                        style={{ animationDelay: `${index * 150}ms` }}
                        onClick={() => setSelectedImage(img)}
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-sm">
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading={index === 0 ? 'eager' : 'lazy'}
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                <ZoomIn className="w-8 h-8 text-white mx-auto mb-4" />
                                <h3 className="text-white text-lg font-bold heading-font uppercase not-italic tracking-wider">
                                    {img.title}
                                </h3>
                                <p className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-light mt-2">View Full Image</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-md p-4 md:p-12 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-10 right-10 p-4 text-white hover:text-accent transition-colors transition-all duration-300 transform hover:rotate-90"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-10 h-10" />
                    </button>

                    <div
                        className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-auto max-h-[75vh] object-contain shadow-2xl border-4 border-white/10"
                        />
                    <div className="mt-10 text-center text-white">
                        <h3 className="text-4xl font-black heading-font tracking-tight uppercase not-italic mb-3">
                            {selectedImage.title}
                        </h3>
                        <div className="h-px w-12 bg-accent/50 mx-auto mb-4"></div>
                        <p className="text-xs uppercase tracking-[0.5em] font-light text-white/70">
                            WildLens &bull; Faheem Shan
                        </p>
                    </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GalleryGrid;