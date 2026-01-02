import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { graphicPortfolio, webPortfolio } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import BeforeAfter from '../ui/BeforeAfter';
import { Sparkles, Code2, Layers } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const categories = [
        { key: 'all', label: 'Tout voir' },
        { key: 'beaute', label: 'Beauté' },
        { key: 'evenement', label: 'Événement' },
        { key: 'vente', label: 'Vente & Promo' },
        { key: 'streaming', label: 'Streaming' },
        { key: 'cuisine', label: 'Cuisine' },
        { key: 'sport', label: 'Sport' },
        { key: 'business', label: 'Business' },
        { key: 'autre', label: 'Autre' }
    ];

    const filteredProjects = filter === 'all'
        ? graphicPortfolio
        : graphicPortfolio.filter(p => p.category === filter);

    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="portfolio" className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6">

                {/* -- SECTION GRAPHIQUE -- */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div variants={titleVariants}>
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold mb-4">
                            <Sparkles size={16} className="animate-pulse" />
                            Mes Créations
                        </span>
                    </motion.div>
                    <motion.h2
                        variants={titleVariants}
                        className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Graphique</span>
                    </motion.h2>
                    <motion.p
                        variants={titleVariants}
                        className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Une sélection de mes meilleures créations visuelles. Affiches, flyers, branding et plus encore.
                    </motion.p>
                </motion.div>

                {/* Filtres avec animation */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {categories.map((cat, index) => (
                        <motion.button
                            key={cat.key}
                            onClick={() => setFilter(cat.key)}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === cat.key
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30'
                                : 'bg-white dark:bg-slate-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-800 hover:border-blue-300 hover:text-blue-500 dark:hover:text-blue-400 hover:shadow-md'
                                }`}
                        >
                            {cat.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grille Graphique avec animations */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                    type: "spring",
                                    stiffness: 100
                                }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>



                {/* -- SECTION AVANT/APRÈS (PROCESS) -- */}
                <motion.div
                    className="mb-24 pt-16 border-t border-gray-100 dark:border-slate-800"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <div className="text-center mb-12">
                        <motion.div variants={titleVariants}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-bold mb-4">
                                <Layers size={16} />
                                L'envers du décor
                            </span>
                        </motion.div>
                        <motion.h2
                            variants={titleVariants}
                            className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-4"
                        >
                            Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Process</span> Créatif
                        </motion.h2>
                        <motion.p
                            variants={titleVariants}
                            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
                        >
                            Découvrez comment je transforme une idée brute en un résultat final professionnel. Glissez le curseur pour voir la différence.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <BeforeAfter
                            beforeImage="/assets/graphic-2025-4.jpg"
                            afterImage="/assets/graphic-2025-10.jpg"
                            beforeLabel="Brouillon / Ancien"
                            afterLabel="Version Finale"
                            description="Refonte complète de l'identité visuelle d'un restaurant local."
                        />
                        <BeforeAfter
                            beforeImage="/assets/graphic-2025-14.jpg"
                            afterImage="/assets/graphic-2025-12.jpg"
                            beforeLabel="Idée Initiale"
                            afterLabel="Design Épuré"
                            description="Optimisation de la lisibilité et de l'impact visuel pour un client business."
                        />
                    </div>
                </motion.div>

                {/* -- SECTION WEB -- */}
                <motion.div
                    id="web"
                    className="text-center mb-16 pt-10 border-t border-gray-200"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.div
                        variants={titleVariants}
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl mb-4 shadow-lg shadow-blue-500/30"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Code2 size={32} className="text-white" />
                    </motion.div>
                    <motion.h2
                        variants={titleVariants}
                        className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-4"
                    >
                        Réalisations <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">Web</span>
                    </motion.h2>
                    <motion.p
                        variants={titleVariants}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Des sites modernes, rapides et responsive. Cliquez sur les cartes pour visiter les projets.
                    </motion.p>
                </motion.div>

                {/* Grille Web avec animations */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {webPortfolio.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 80
                            }}
                            whileHover={{ y: -10 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Portfolio;
