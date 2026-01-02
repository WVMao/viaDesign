import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrolled } = useScroll(20);

    const navLinks = [
        { name: 'Accueil', href: '#home' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Réalisations Web', href: '#web' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="font-outfit font-bold text-2xl tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
                    Via<span className="text-blue-600">Design</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <ThemeToggle />
                    <a href="#contact" className="px-5 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                        Démarrer un projet
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        className="text-gray-800 dark:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t border-gray-100 dark:border-slate-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-gray-700 dark:text-gray-200 py-2 border-b border-gray-50 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 text-center py-3 bg-blue-600 text-white rounded-xl font-bold"
                    >
                        Démarrer un projet
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
