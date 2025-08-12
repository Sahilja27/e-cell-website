
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TimelineSection } from './components/TimelineSection';
import { EurekaSection } from './components/EurekaSection';
import { OpnSourceFestSection } from './components/OpnSourceFestSection';
import { EventsSection } from './components/EventsSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000); // Adjusted timer for the new animation

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-primary-dark flex flex-col justify-center items-center z-50 transition-opacity duration-500">
                <div className="flex flex-col items-center">
                    <div className="typewriter">
                        <h1 className="text-light-text text-8xl md:text-9xl font-display tracking-tight">
                            E<span className="text-brand-accent">-</span>CELL
                        </h1>
                    </div>
                    <p className="text-light-text text-3xl md:text-4xl font-display tracking-[0.2em] fade-in-delayed -mt-2 md:-mt-4 pl-1">
                        IICT
                    </p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="bg-primary-dark text-subtle-text font-sans antialiased">
            <Header />
            <main id="content" className="mx-auto max-w-7xl px-6 sm:px-12 md:px-24">
                <HeroSection />
                <AboutSection />
                <TimelineSection />
                <EurekaSection />
                <OpnSourceFestSection />
                <EventsSection />
                <TestimonialsSection />
                <TeamSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
