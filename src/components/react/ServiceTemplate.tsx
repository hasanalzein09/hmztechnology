import { motion } from 'framer-motion'
import QuoteForm from './QuoteForm'
import type { Language } from './types'

interface ServiceFeature {
    title: string;
    description: string;
    icon?: string;
}

interface ServiceTemplateProps {
    lang: string;
    title: string;
    subtitle: string;
    description: string;
    features: ServiceFeature[];
    benefits?: { title: string; items: string[] };
    ctaValues?: { value: string; label: string }[];
    heroImage?: string; // Optional image URL for hero background or side image
}

const ServiceTemplate = ({
    lang,
    title,
    subtitle,
    description,
    features,
    benefits,
    ctaValues
}: ServiceTemplateProps) => {
    const isRtl = lang === 'ar';

    return (
        <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl opacity-30"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                            {subtitle}
                        </p>
                    </motion.div>

                    {ctaValues && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 text-center">
                            {ctaValues.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl"
                                >
                                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                                    <div className="text-gray-400 text-sm">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Main Content & Features */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Column: Description & Features */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">{description}</h2>
                                <div className="space-y-8">
                                    {features.map((feature, i) => (
                                        <div key={i} className="flex gap-4">
                                            {feature.icon && (
                                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100/50 rounded-xl flex items-center justify-center text-2xl">
                                                    {feature.icon}
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {benefits && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    <h3 className="text-2xl font-bold mb-6 relative z-10">{benefits.title}</h3>
                                    <ul className="space-y-3 relative z-10">
                                        {benefits.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <span className="text-green-400 text-lg">✓</span>
                                                <span className="text-gray-300">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </div>

                        {/* Right Column: Quote Form */}
                        <div className="lg:sticky lg:top-8">
                            <QuoteForm lang={lang} defaultService={title} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServiceTemplate
