import React from 'react';
import taj from '../assets/images/taj.jpg';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

            {/* Background Image */}
            <img 
                src={taj}
                alt="Hero"
                className="absolute top-0 left-0 w-full h-full object-cover animate-zoom-in"
            />

            {/* Overlay (IMPORTANT FIX) */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 animate-fade-up">

                {/* Brand */}
                <p className="text-white/70 uppercase tracking-[0.4em] text-xs mb-6">
                    WILDLENS
                </p>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 heading-font">
                    Capturing Nature
                </h1>

                {/* Subtitle */}
               <p className="text-white/70 text-sm md:text-base mb-8">
                    by Faheem Shan
                </p>

                {/* Button */}
                <Link 
                    to="/gallery" 
                    className="bg-accent text-white px-8 py-3 rounded-full text-sm hover:opacity-90 transition shadow-md"
                >
                    View Gallery
                </Link>
            </div>

            {/* Scroll Icon */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
                <ChevronDown className="w-8 h-8" />
            </div>
        </section>
    );
};

export default Hero;