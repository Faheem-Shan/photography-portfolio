import React from 'react';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => {
    return (
        <main className="bg-background dark:bg-[#1A1A1A] min-h-screen pt-32 pb-20 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 text-center mb-20 animate-fade-in">
                <p className="text-accent uppercase tracking-widest text-sm mb-4">THE PORTFOLIO</p>
                <h1 className="text-4xl md:text-6xl font-black heading-font text-heading dark:text-white leading-tight not-italic uppercase tracking-tight">Nature Gallery</h1>
                <p className="text-lg md:text-xl text-text/60 dark:text-white/60 max-w-2xl mx-auto mt-8 uppercase tracking-widest font-light not-italic">A curated collection of nature, travel, and everyday moments captured across Kerala and beyond.</p>
            </div>
            
            <GalleryGrid />
        </main>
    );
};

export default Gallery;