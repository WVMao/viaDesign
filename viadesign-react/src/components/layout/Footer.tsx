import { motion } from 'framer-motion';
import { Heart, Gift, Download } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: '📘', label: 'Facebook', href: '#' },
        { icon: '📸', label: 'Instagram', href: '#' },
        { icon: '💼', label: 'LinkedIn', href: '#' },
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-32 -right-32 w-64 h-64 border border-white/5 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-20 -left-20 w-40 h-40 border border-white/5 rounded-full"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Logo */}
                    <motion.h2
                        className="text-3xl font-bold font-outfit mb-3 flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        Via<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Design</span>
                        <motion.div
                            className="w-2 h-2 bg-green-400 rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.h2>

                    <p className="text-slate-400 mb-8 max-w-md mx-auto text-lg">
                        Créons ensemble l'identité visuelle qui fera décoller votre activité.
                    </p>

                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center gap-4 mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                className="w-12 h-12 bg-white/5 backdrop-blur border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                aria-label={social.label}
                            >
                                <span className="text-xl">{social.icon}</span>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Free Resources Section */}
                    <motion.div
                        className="mb-12 p-8 bg-white/5 backdrop-blur rounded-3xl border border-white/10 max-w-2xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Gift className="text-yellow-400" />
                            <h3 className="text-xl font-bold">Ressources Gratuites</h3>
                        </div>
                        <p className="text-slate-400 mb-6 font-medium">
                            Téléchargez mon guide exclusif : <br />
                            <span className="text-white font-bold">"5 erreurs à éviter pour réussir son identité visuelle"</span>
                        </p>
                        <motion.a
                            href="#"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Recevoir le Pack Gratuit <Download size={18} />
                        </motion.a>
                    </motion.div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

                    {/* Copyright */}
                    <motion.p
                        className="text-slate-500 text-sm flex items-center justify-center gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        © {currentYear} ViaDesign. Fait avec
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <Heart size={14} className="text-red-400 fill-red-400" />
                        </motion.span>
                        au Cameroun
                    </motion.p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
