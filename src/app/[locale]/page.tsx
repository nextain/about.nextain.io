import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('Index');

    return (
        <main className="min-h-screen relative overflow-hidden">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/10 h-20 flex items-center">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src="/assets/logos/logo-trans-48x48.png" alt="Nextain Logo" className="h-8 w-auto" />
                        <span className="font-display font-bold text-xl tracking-tight">Nextain</span>
                    </div>
                    <div className="hidden md:flex gap-8">
                        <a href="#vision" className="text-gray-400 hover:text-white transition-colors">{t('nav.vision')}</a>
                        <a href="#products" className="text-gray-400 hover:text-white transition-colors">{t('nav.products')}</a>
                        <a href="#philosophy" className="text-gray-400 hover:text-white transition-colors">{t('nav.philosophy')}</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="vision" className="relative min-h-screen flex items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/10 to-[#0a0a0c] z-10"></div>
                    <img src="/assets/wallpaper/wallpaper-naia-dark-background1-2160.jpg" alt="Background" className="w-full h-full object-cover opacity-30" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                    <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold tracking-wide text-gray-400 uppercase mb-8">
                        {t('hero.badge')}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tight whitespace-pre-line">
                        {t.rich('hero.title', { hl: (chunks) => <span className="text-gradient">{chunks}</span> })}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        {t('subtitle')}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="#products" className="px-8 py-4 rounded-lg bg-white text-black font-semibold hover:-translate-y-1 transition-transform">
                            {t('core_products')}
                        </a>
                        <a href="#philosophy" className="px-8 py-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md font-semibold hover:bg-white/10 hover:-translate-y-1 transition-transform">
                            {t('our_philosophy')}
                        </a>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            <span className="text-gradient">{t('products_section.title_hl')}</span>
                        </h2>
                        <p className="text-xl text-gray-400">{t('products_section.desc')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Naia OS */}
                        <div className="glass-card p-12 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-4xl font-display font-bold mb-4">Naia OS</h3>
                            <p className="text-[#60a5fa] font-semibold text-lg mb-8">{t('products_section.naia.slogan')}</p>
                            <ul className="grid grid-cols-1 gap-2.5 text-sm text-gray-400">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                    <li key={num} className="flex gap-2 items-start">
                                        <span className="text-white mt-0.5">→</span>
                                        <span>{t(`products_section.naia.f${num}` as any)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Naia Business ADK */}
                        <div className="glass-card p-12 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-300">
                            <h3 className="text-4xl font-display font-bold mb-4">Naia Business ADK</h3>
                            <p className="text-[#38bdf8] font-semibold text-lg mb-8">{t('products_section.jikime.slogan')}</p>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex gap-3"><span className="text-white">→</span> {t('products_section.jikime.f1')}</li>
                                <li className="flex gap-3"><span className="text-white">→</span> {t('products_section.jikime.f2')}</li>
                                <li className="flex gap-3"><span className="text-white">→</span> {t('products_section.jikime.f3')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section id="philosophy" className="py-32 bg-gradient-to-b from-transparent via-[#3b82f6]/5 to-transparent">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-20 leading-tight whitespace-pre-line">
                        {t.rich('philosophy_section.main_title', {
                            hl: (chunks) => <span className="text-gradient">{chunks}</span>
                        })}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="p-8 rounded-2xl bg-white/5 border border-transparent hover:border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="text-2xl font-bold mb-4">{t(`philosophy_section.p${num}.title` as any)}</h4>
                                <p className="text-gray-400 leading-relaxed">{t(`philosophy_section.p${num}.desc` as any)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insight & Footer */}
            <section className="py-32 pb-60">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-br from-[#1e1e23] to-[#141419] border border-white/10 p-16 rounded-[40px] text-center max-w-4xl mx-auto relative">
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wide">
                            {t('insight.badge')}
                        </span>
                        <h3 className="text-3xl font-display font-bold mb-8">{t('insight.title')}</h3>
                        <p className="text-xl text-gray-400 italic mb-10 leading-relaxed max-w-3xl mx-auto">
                            "{t('insight.desc')}"
                        </p>
                        <div className="text-[#60a5fa] font-semibold">{t('insight.author')}</div>
                    </div>
                </div>
            </section>

            <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-between gap-12 mb-16">
                        <div className="max-w-md">
                            <img src="/assets/logos/naia-dark-text-logo.png" alt="Nextain Logo" className="h-12 w-auto mb-6 opacity-80" />
                            <p className="text-gray-400 leading-relaxed">{t('footer.desc')}</p>
                        </div>
                        <div className="flex gap-20">
                            <div>
                                <h4 className="font-bold mb-6 text-lg">{t('nav.products')}</h4>
                                <div className="flex flex-col gap-3 text-gray-400">
                                    <a href="#" className="hover:text-white transition-colors">Naia OS</a>
                                    <a href="#" className="hover:text-white transition-colors">Naia Business ADK</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-sm text-gray-500">
                        <p>{t('footer.rights')}</p>
                        <p className="font-display font-semibold text-gray-400">{t('footer.powered')}</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
