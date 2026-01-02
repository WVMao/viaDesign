import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Donnez vie à vos ambitions avec un design\nqui marque les esprits et booste vos résultats.";

    useEffect(() => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < fullText.length) {
                setText((prev) => prev + fullText.charAt(i));
                i++;
            } else {
                clearInterval(typing);
            }
        }, 40);

        return () => clearInterval(typing);
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/20">
            {/* Ndop-inspired subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }}></div>
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-[10%] w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        scale: [1, 1.2, 1],
                        x: [0, 20, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-[5%] w-96 h-96 bg-gradient-to-tr from-green-400/20 to-emerald-400/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-200/30 rounded-full"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                    }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-200/20 rounded-full"
                />

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-green-100 text-blue-700 font-bold text-sm mb-6 tracking-wide shadow-sm"
                    >
                        <motion.span
                            animate={{ rotate: [0, 20, -20, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            👋
                        </motion.span>
                        BIENVENUE CHEZ VIADESIGN
                        <Sparkles size={14} className="text-green-500 animate-pulse" />
                    </motion.span>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-outfit font-extrabold text-gray-900 dark:text-white leading-tight mb-6"
                    >
                        Design{' '}
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 bg-[length:200%_auto]"
                            animate={{
                                backgroundPosition: ["0% center", "100% center", "0% center"]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                            Premium
                        </motion.span>
                        <br />
                        & Impact Visuel
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 min-h-[4rem] font-medium whitespace-pre-line"
                    >
                        {text}
                        <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="text-blue-500"
                        >
                            |
                        </motion.span>
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.a
                            href="#portfolio"
                            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-500/30 flex items-center gap-2 relative overflow-hidden"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Voir mes réalisations
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowRight size={20} />
                                </motion.span>
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-full font-bold text-lg flex items-center gap-2 shadow-sm"
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                                borderColor: "#3b82f6",
                                color: "#3b82f6"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Me contacter
                        </motion.a>
                    </motion.div>

                    {/* Stats or trust indicators */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
                    >
                        {[
                            { number: "50+", label: "Projets réalisés" },
                            { number: "100%", label: "Clients satisfaits" },
                            { number: "3+", label: "Années d'expérience" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                whileHover={{ scale: 1.1, y: -5 }}
                            >
                                <motion.p
                                    className="text-3xl md:text-4xl font-outfit font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.2 }}
                                >
                                    {stat.number}
                                </motion.p>
                                <p className="text-gray-500 text-sm font-medium mt-1">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
                    <motion.div
                        className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"
                        animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
