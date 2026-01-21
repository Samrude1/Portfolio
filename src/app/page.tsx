import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <main className="relative flex flex-col w-full min-h-screen">
            <Hero />
            <Projects />
            <Skills alternating />
            <About />
            <Contact alternating />
        </main>
    );
}
