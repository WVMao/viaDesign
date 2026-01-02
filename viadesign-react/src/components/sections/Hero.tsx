import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Donnez vie à vos ambitions avec un design\nqui marque les esprits et booste vos résultats.";

    useEffect(() => {
        const timeout = setTimeout(() => {
            setText('');
            let i = 0;
            const typing = setInterval(() => {
                if (i <= fullText.length) {
                    setText(fullText.slice(0, i));
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 40);

            return () => clearInterval(typing);
        }, 100); // Petit délai pour éviter les conflits initiaux

        return () => clearTimeout(timeout);
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-green-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Text Content */}
                    <motion.div
                        className="w-full lg:w-1/2 text-left"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm mb-8">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Disponible pour nouveaux projets</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-outfit font-bold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight"
                        >
                            Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Premium</span> <br />
                            <span className="relative inline-block z-10">
                                & Impact Visuel
                                <motion.svg
                                    className="absolute w-[110%] h-4 -bottom-2 -left-[5%] -z-10 overflow-visible"
                                    viewBox="0 0 100 12"
                                    preserveAspectRatio="none"
                                >
                                    <motion.path
                                        d="M0 5 Q 50 12 100 5"
                                        stroke="#22c55e"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                        style={{ filter: "drop-shadow(0 0 4px rgba(34, 197, 94, 0.5))" }}
                                    />
                                </motion.svg>
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed"
                        >
                            {text}
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="text-blue-500 ml-1"
                            >
                                |
                            </motion.span>
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.a
                                href="#portfolio"
                                className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gray-900/20 dark:shadow-white/10 flex items-center gap-2"
                                whileHover={{ y: -2 }}
                            >
                                Voir mes travaux
                                <ArrowRight size={20} />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                className="px-8 py-4 bg-white dark:bg-slate-900 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-800 rounded-2xl font-bold text-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2 group"
                                whileHover={{ y: -2 }}
                            >
                                Me contacter
                                <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                            </motion.a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-12 flex items-center gap-8 text-gray-500 dark:text-gray-400">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-800 border-2 border-white dark:border-slate-950 flex items-center justify-center text-xs font-bold">
                                        {/* Placeholder avatars */}
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white">50+ Clients</span> satisfaits
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visual Composition */}
                    <motion.div
                        className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] flex items-center justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Abstract Composition */}
                        <div className="relative w-full max-w-lg aspect-square">
                            {/* Main Floating Card */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-[4/5] bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-transparent backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl z-20 flex items-center justify-center overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-green-500/20 mix-blend-color z-10" />
                                <img
                                    src="assets/hero-portrait.png"
                                    alt="Portrait ViaDesign"
                                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay gradient for better text integration if needed later */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10" />
                            </motion.div>

                            {/* Floating Sphere */}
                            <motion.div
                                animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-[10%] right-[5%] w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-sm opacity-80 z-10"
                            />

                            {/* Floating Cube/Shape */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute bottom-[20%] left-[10%] w-32 h-32 border-2 border-green-400/30 rounded-3xl z-10 backdrop-blur-sm"
                            />

                            {/* Glow behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 rounded-full blur-[100px] -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
