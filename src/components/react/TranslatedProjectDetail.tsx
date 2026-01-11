import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, AlertTriangle, Lightbulb, Target, Quote } from 'lucide-react'
import { getProjectBySlug, projectsData } from '../../lib/projectsData'
import type { Language } from './types'

interface TranslatedProjectDetailProps {
    projectSlug: string
    lang: Language
}

const TranslatedProjectDetail = ({ projectSlug, lang }: TranslatedProjectDetailProps) => {
    const t = projectsData[lang] || projectsData.en
    const project = getProjectBySlug(projectSlug, lang)
    const isRtl = lang === 'ar'

    if (!project) {
        return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Project not found</div>
    }

    const getLink = (path: string) => lang === 'en' ? path : `/${lang}${path}`

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30">

            {/* BACKGROUND GRADIENTS */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            {/* HERO */}
            <section className="relative pt-32 pb-16 border-b border-white/5">
                <div className="max-w-5xl mx-auto px-6 relative z-10">

                    {/* Back Link */}
                    <a
                        href={getLink('/projects')}
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                        {t.viewAll}
                    </a>

                    {/* Industry Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
                    >
                        {project.industry}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 mb-8"
                    >
                        {project.client}
                    </motion.p>

                    {/* Quick Results */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-6 border-t border-white/10 pt-8"
                    >
                        {project.results.map((result, i) => (
                            <div key={i} className="bg-slate-900/50 border border-white/5 rounded-xl px-6 py-4">
                                <div className="text-2xl font-bold text-emerald-400">{result.value}</div>
                                <div className="text-xs text-slate-500 uppercase">{result.metric}</div>
                                <div className="text-xs text-emerald-400/70">{result.improvement}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Left Column - Story */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* CHALLENGE SECTION */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-red-500/20 rounded-xl">
                                    <AlertTriangle className="w-6 h-6 text-red-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">{t.challengeTitle}</h2>
                            </div>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                {project.challenge}
                            </p>
                        </motion.div>

                        {/* SOLUTION SECTION */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-xl">
                                    <Lightbulb className="w-6 h-6 text-blue-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">{t.solutionTitle}</h2>
                            </div>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                {project.solution}
                            </p>
                        </motion.div>

                        {/* RESULTS SECTION */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-emerald-500/20 rounded-xl">
                                    <Target className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">{t.resultsTitle}</h2>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-6">
                                {project.results.map((result, i) => (
                                    <div key={i} className="text-center bg-slate-900/50 rounded-xl p-6">
                                        <div className="text-3xl font-bold text-emerald-400 mb-2">{result.value}</div>
                                        <div className="text-sm text-slate-400 mb-1">{result.metric}</div>
                                        <div className="text-xs text-emerald-400/70 font-medium">{result.improvement}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* TESTIMONIAL */}
                        {project.testimonial && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-900/50 border border-white/10 rounded-2xl p-8"
                            >
                                <Quote className="w-10 h-10 text-slate-600 mb-4" />
                                <blockquote className="text-xl text-white italic leading-relaxed mb-6">
                                    "{project.testimonial.quote}"
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-bold">
                                        {project.testimonial.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold">{project.testimonial.author}</div>
                                        <div className="text-slate-500 text-sm">{project.testimonial.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">

                        {/* Tech Stack */}
                        <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-6">
                            <h3 className="text-white font-bold mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 text-sm bg-white/5 text-slate-300 rounded-lg">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl p-6">
                            <h3 className="text-white font-bold mb-2">Want Similar Results?</h3>
                            <p className="text-slate-400 text-sm mb-4">
                                Let's discuss how we can transform your business.
                            </p>
                            <a
                                href={getLink('/contact')}
                                className="block w-full bg-emerald-500 hover:bg-emerald-400 text-white text-center font-bold py-3 px-6 rounded-xl transition-colors"
                            >
                                Start Your Project
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TranslatedProjectDetail
