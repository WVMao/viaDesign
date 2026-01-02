import { useState, type FormEvent } from 'react';
import { motion, type Variants, type TargetAndTransition } from 'framer-motion';
import { MessageCircle, Mail, Send, Sparkles, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Demande de devis',
        message: ''
    });
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        const whatsappMessage = `*Nouveau message via Portfolio* 🚀\n\n` +
            `👤 Nom: ${name}\n` +
            `📧 Email: ${email}\n` +
            `📌 Sujet: ${subject}\n\n` +
            `📝 Message:\n${message}`;

        const url = `https://wa.me/237671170671?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, '_blank');

        setFormData({ name: '', email: '', subject: 'Demande de devis', message: '' });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const floatingAnimation: TargetAndTransition = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/20 relative overflow-hidden">
            {/* Subtle Toghu-inspired motif */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] dark:opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 20-20 20L0 20z' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }}></div>
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-green-200/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-green-200/20 to-blue-200/20 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* Infos & Design */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.span
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-wider text-sm uppercase mb-4 px-4 py-2 bg-blue-100 rounded-full"
                    >
                        <Sparkles size={16} className="animate-pulse" />
                        Contact
                    </motion.span>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-outfit font-bold text-gray-900 dark:text-white mb-6 leading-tight"
                    >
                        Discutons de votre <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                            prochain projet
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 dark:text-gray-400 mb-8 text-lg"
                    >
                        Vous avez une idée ? Je suis là pour la concrétiser.
                        Que ce soit pour un design graphique percutant ou un site web complet.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="space-y-4"
                    >
                        <motion.a
                            href="https://wa.me/237671170671"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg shadow-green-500/30 cursor-pointer group"
                        >
                            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <MessageCircle size={28} className="text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">WhatsApp Direct</h4>
                                <p className="text-green-100 font-medium">+237 671 17 06 71</p>
                            </div>
                            <motion.div
                                className="ml-auto"
                                animate={floatingAnimation}
                            >
                                <span className="text-white/80 text-2xl">→</span>
                            </motion.div>
                        </motion.a>

                        <motion.div
                            whileHover={{ scale: 1.02, x: 5 }}
                            className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-lg border border-gray-100 cursor-pointer group"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                <Mail size={28} className="text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                                <p className="text-gray-600">contact@viadesign.cm</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Formulaire */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-800 relative overflow-hidden"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                >
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                    <motion.div
                        className="mb-6 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <label className="block text-gray-700 dark:text-gray-300 font-bold mb-2 text-sm">Votre Nom</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800 border-2 border-gray-100 dark:border-slate-700 text-gray-900 dark:text-white focus:border-blue-500 focus:bg-white dark:focus:bg-slate-700 focus:outline-none transition-all focus:shadow-lg focus:shadow-blue-500/10"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </motion.div>

                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <label className="block text-gray-700 font-bold mb-2 text-sm">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none transition-all focus:shadow-lg focus:shadow-blue-500/10"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </motion.div>

                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <label className="block text-gray-700 font-bold mb-2 text-sm">Sujet</label>
                        <select
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none transition-all cursor-pointer"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        >
                            <option>Demande de devis</option>
                            <option>Collaboration</option>
                            <option>Projet Web</option>
                            <option>Design Graphique</option>
                            <option>Autre</option>
                        </select>
                    </motion.div>

                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <label className="block text-gray-700 font-bold mb-2 text-sm">Message</label>
                        <textarea
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-blue-500 focus:bg-white focus:outline-none transition-all h-32 resize-none focus:shadow-lg focus:shadow-blue-500/10"
                            placeholder="Décrivez votre projet..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all flex items-center justify-center gap-3 border-none relative overflow-hidden group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Envoyer sur WhatsApp
                            <motion.span
                                animate={{ x: isHovered ? 5 : 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Send size={18} />
                            </motion.span>
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>

                    {/* Trust badges */}
                    <motion.div
                        className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="flex items-center gap-1">
                            <CheckCircle size={14} className="text-green-500" />
                            Réponse rapide
                        </span>
                        <span className="flex items-center gap-1">
                            <CheckCircle size={14} className="text-green-500" />
                            Devis gratuit
                        </span>
                    </motion.div>
                </motion.form>

            </div>
        </section>
    );
};

export default Contact;
