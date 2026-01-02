import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';
import { ExternalLink, Monitor, Eye } from 'lucide-react';
import { useState } from 'react';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isWeb = project.category === 'web';

    const CardContent = () => (
        <>
            <div className="h-full w-full overflow-hidden relative">
                {isWeb ? (
                    <div className="w-full h-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-6 transition-colors">
                        {/* Macbook-style mockup */}
                        <div className="relative w-full aspect-[16/10] bg-slate-900 rounded-lg p-1 shadow-2xl overflow-hidden border-2 border-slate-700">
                            <div className="absolute top-0 left-0 right-0 h-4 bg-slate-800 flex items-center px-2 gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            </div>
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover mt-4 rounded-sm"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x500?text=${encodeURIComponent(project.title)}`;
                                }}
                            />
                            <div className="absolute bottom-2 right-2">
                                <Monitor size={24} className="text-white/20" />
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="relative w-full h-full overflow-hidden bg-gray-50 dark:bg-slate-800 group">
                        <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover object-top transition-transform duration-500"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x300?text=${encodeURIComponent(project.title)}`;
                                }}
                            />
                        </motion.div>
                    </div>
                )}
            </div>

            {/* Overlay avec texte blanc forcé et meilleure lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-2">
                    <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit">
                        {project.category?.toUpperCase() || 'WEB DESIGN'}
                    </span>
                    <h3 className="text-white text-xl font-bold drop-shadow-md leading-tight">
                        {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                    </p>

                    {/* Action Buttons in Flow */}
                    <div className="pt-2 flex flex-col gap-2">
                        {!isWeb && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsModalOpen(true);
                                }}
                                className="w-full py-2 bg-white text-gray-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg shadow-black/20 text-sm"
                            >
                                Étude de cas <Eye size={16} />
                            </button>
                        )}

                        {isWeb && project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-2 bg-blue-600 text-white text-center rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 text-sm flex items-center justify-center gap-2"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Visiter le site <ExternalLink size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <>
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl dark:shadow-slate-900/50 group h-[300px] sm:h-[350px] border border-gray-100 dark:border-slate-800 transition-all duration-300 ${!isWeb ? 'cursor-pointer' : ''}`}
                onClick={() => !isWeb && setIsModalOpen(true)}
            >
                <CardContent />
            </motion.div>

            {isModalOpen && (
                <ProjectModal
                    project={project}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </>
    );
};

export default ProjectCard;
