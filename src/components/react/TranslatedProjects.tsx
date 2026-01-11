import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, TrendingUp, Award, Users } from 'lucide-react'
import { projectsData, type Project } from '../../lib/projectsData'
import type { Language } from './types'

interface TranslatedProjectsProps {
    lang: Language
}

const serviceTypeIcons: Record<string, string> = {
    'whatsapp': '💬',
    'instagram': '📸',
    'web': '⚡',
    'seo': '📈',
    'automation': '🤖'
}

const TranslatedProjects = ({ lang }: TranslatedProjectsProps) => {
    const t = projectsData[lang] || projectsData.en
    const isRtl = lang === 'ar'
    const projects = t.projects.length > 0 ? t.projects : projectsData.en.projects

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30">

            {/* BACKGROUND GRADIENTS */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* SUCCESS BANNER */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-6"
                    >
                        <Award className="w-4 h-4" />
                        {t.urgencyBanner}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        {t.title.split(' ')[0]} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                            {t.title.split(' ').slice(1).join(' ')}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-400 mb-6 leading-relaxed max-w-2xl"
                    >
                        {t.subtitle}
                    </motion.p>

                    {/* PSYCHOLOGICAL HOOK */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-sm text-amber-400/90 font-medium mb-10 flex items-center gap-2"
                    >
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        {t.psychologicalHook}
                    </motion.p>

                    {/* STATS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-8 border-t border-white/10 pt-8"
                    >
                        {t.stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* PROJECTS GRID */}
            <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.a
                            href={getLink(`/projects/${project.slug}`)}
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/30 hover:bg-slate-900/80 transition-all duration-300 group block"
                        >
                            {/* Project Header */}
                            <div className="p-8 border-b border-white/5">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-4xl">{serviceTypeIcons[project.serviceType]}</div>
                                    {project.featured && (
                                        <span className="px-2 py-1 text-xs font-bold bg-emerald-500/20 text-emerald-400 rounded-full">
                                            Featured
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-slate-500 mb-3">
                                    {project.client} • {project.industry}
                                </p>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Results Preview */}
                            <div className="p-8 bg-slate-900/30">
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {project.results.slice(0, 3).map((result, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="text-xl font-bold text-emerald-400">{result.value}</div>
                                            <div className="text-xs text-slate-500">{result.metric}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {project.techStack.slice(0, 2).map((tech, idx) => (
                                            <span key={idx} className="px-2 py-1 text-xs bg-white/5 text-slate-400 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center text-sm">
                                        {t.viewProject}
                                        <ArrowRight className={`w-4 h-4 ${isRtl ? 'mr-2 rotate-180' : 'ml-2'}`} />
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial Preview */}
                            {project.testimonial && (
                                <div className="px-8 py-4 border-t border-white/5 bg-emerald-500/5">
                                    <p className="text-sm text-slate-400 italic">
                                        "{project.testimonial.quote.slice(0, 80)}..."
                                    </p>
                                    <p className="text-xs text-slate-500 mt-2">
                                        — {project.testimonial.author}, {project.testimonial.role}
                                    </p>
                                </div>
                            )}
                        </motion.a>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default TranslatedProjects
