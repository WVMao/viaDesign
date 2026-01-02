import { motion, type Variants } from 'framer-motion';
import { Search, Lightbulb, PenTool, Code2, Rocket, Heart } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "01. Découverte",
            description: "Analyse approfondie de vos besoins, de vos objectifs et de votre cible pour poser les bases solides de votre projet.",
            iconStyles: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "02. Stratégie",
            description: "Élaboration d'un concept unique, création de moodboards et définition de la direction artistique.",
            iconStyles: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
        },
        {
            icon: <PenTool className="w-8 h-8" />,
            title: "03. Design",
            description: "Donner vie aux idées à travers des visuels percutants ou des interfaces UI fluides et intuitives.",
            iconStyles: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"
        },
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "04. Réalisation",
            description: "Développement technique rigoureux avec une attention particulière aux détails et aux performances.",
            iconStyles: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "05. Lancement",
            description: "Mise en ligne, tests finaux et accompagnement pour assurer le succès de votre nouvelle identité.",
            iconStyles: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const stepVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="process" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-green-50/50 dark:bg-emerald-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-widest uppercase mb-4"
                    >
                        Méthodologie
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-6"
                    >
                        Mon Processus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Créatif</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-600 dark:text-gray-400 text-lg"
                    >
                        Une approche structurée et passionnée pour transformer vos idées en résultats concrets et impactants.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={stepVariants}
                            className="group relative"
                        >
                            <div className="bg-gray-50 dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${step.iconStyles}`}>
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                    {step.description}
                                </p>

                                {/* Connector line for desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-[100%] w-full h-[2px] bg-gradient-to-r from-gray-100 to-transparent dark:from-slate-800 z-[-1]" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Motivation Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-blue-600 to-green-500 text-white relative overflow-hidden shadow-2xl shadow-blue-500/20"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        <div className="w-full lg:w-1/2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                                    <Heart size={32} className="text-white fill-white/20 animate-pulse" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold">Ma Motivation : L'Excellence</h3>
                            </div>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 italic">
                                "Chaque projet est une opportunité unique de repousser les limites de la créativité.
                                Ce qui m'anime au quotidien, c'est de transformer des visions abstraites en réalités visuelles tangibles qui propulsent votre succès."
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-5 py-2 bg-white/10 rounded-full text-sm font-bold backdrop-blur border border-white/20">Passion Africaine</span>
                                <span className="px-5 py-2 bg-white/10 rounded-full text-sm font-bold backdrop-blur border border-white/20">Rigueur Technique</span>
                                <span className="px-5 py-2 bg-white/10 rounded-full text-sm font-bold backdrop-blur border border-white/20">Résultat Garanti</span>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative group">
                            <motion.div
                                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-square lg:aspect-video"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src="assets/process-illustration.png"
                                    alt="Processus Créatif Illustration"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </motion.div>
                            {/* Floating decorative element */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-4 hidden md:flex"
                            >
                                <Lightbulb className="text-yellow-500 w-12 h-12" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
