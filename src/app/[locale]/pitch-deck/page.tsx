'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

/*
 * 이미지 셋업 (PowerShell에서 실행):
 *
 * mkdir -Force "C:\dev\about.nextain.io\public\assets\pitch-deck"
 * Copy-Item "C:\dev\naia-os\assets\character\naia-character.png" "C:\dev\about.nextain.io\public\assets\pitch-deck\"
 * Copy-Item "C:\dev\naia.nextain.io\public\manual\ko\main-screen.png" "C:\dev\about.nextain.io\public\assets\pitch-deck\"
 * Copy-Item "C:\dev\naia.nextain.io\public\manual\ko\lab-dashboard.png" "C:\dev\about.nextain.io\public\assets\pitch-deck\"
 * Copy-Item "C:\dev\naia.nextain.io\public\manual\ko\chat-text.png" "C:\dev\about.nextain.io\public\assets\pitch-deck\"
 * Copy-Item "C:\dev\naia.nextain.io\public\manual\ko\onboarding-character.png" "C:\dev\about.nextain.io\public\assets\pitch-deck\"
 * Copy-Item "C:\dev\naia.nextain.io\public\manual\ko\skills-tab.png" "C:\dev\about.nextain.io\public\assets\pitch-deck\"
 * Copy-Item "C:\dev\naia.nextain.io\public\manual\ko\channels-tab.png" "C:\dev\about.nextain.io\public\assets\pitch-deck\"
 * Copy-Item "C:\dev\naia-os\assets\installer\login-background.jpg" "C:\dev\about.nextain.io\public\assets\pitch-deck\"
 * Copy-Item "C:\dev\naia.nextain.io\public\manual\ko\channels-tab.png" "C:\dev\about.nextain.io\public\assets\pitch-deck\"
 * Copy-Item "C:\dev\naia.nextain.io\public\branding\naia-os-logo.jpg" "C:\dev\about.nextain.io\public\assets\pitch-deck\"
 */

const TOTAL_SLIDES = 14;

function SlideMeta({ n }: { n: number }) {
    return (
        <>
            <img
                src="/assets/logos/nextain-dark-logo.png"
                alt=""
                className="pitch-slide-logo"
            />
            <span className="pitch-slide-number">
                {n} / {TOTAL_SLIDES}
            </span>
        </>
    );
}

export default function PitchDeckPage() {
    const t = useTranslations('PitchDeck');
    const locale = useLocale();
    const otherLocale = locale === 'ko' ? 'en' : 'ko';
    const otherLabel = locale === 'ko' ? 'EN' : '한국어';
    const imgDir = locale === 'ko' ? '/assets/pitch-deck' : '/assets/pitch-deck-en';

    return (
        <main className="min-h-screen bg-[#0a0a0c] text-white">
            {/* ── Top Bar (no print) ── */}
            <nav className="no-print fixed top-0 w-full z-50 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/10 h-14 flex items-center">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link
                            href={`/${locale}`}
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            {t('nav.home')}
                        </Link>
                        <span className="text-gray-600">|</span>
                        <span className="text-sm font-semibold text-white">
                            {t('nav.title')}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => window.print()}
                            className="px-4 py-1.5 rounded-md bg-white/10 text-sm text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
                        >
                            {t('nav.print')}
                        </button>
                        <Link
                            href={`/${otherLocale}/pitch-deck`}
                            className="px-3 py-1.5 rounded-md border border-white/20 text-sm text-gray-300 hover:text-white hover:border-white/40 transition-colors"
                        >
                            {otherLabel}
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ── Slides ── */}
            <div className="pitch-deck">

                {/* ════════════════════════════════════════
                    SLIDE 1 — COVER
                ════════════════════════════════════════ */}
                <section className="pitch-slide items-center text-center">
                    <div className="absolute inset-0 z-0 opacity-15">
                        <img
                            src="/assets/wallpaper/wallpaper-naia-dark-background1-2160.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-widest text-gray-400 uppercase mb-6">
                            {t('cover.badge')}
                        </div>
                        <img
                            src={`${imgDir}/naia-character.png`}
                            alt="Naia"
                            className="w-28 h-28 object-contain mb-6"
                        />
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight whitespace-pre-line">
                            <span className="text-gradient">{t('cover.title')}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-6">
                            {t('cover.subtitle')}
                        </p>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                            <img src="/assets/logos/nextain-dark-logo.png" alt="Nextain" className="h-5 opacity-60" />
                            <span>{t('cover.company')}</span>
                            <span>·</span>
                            <span>{t('cover.date')}</span>
                            <span>·</span>
                            <span className="text-[#60a5fa]">{t('cover.confidential')}</span>
                        </div>
                    </div>
                    <SlideMeta n={1} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 2 — PROBLEM
                ════════════════════════════════════════ */}
                <section className="pitch-slide">
                    <div className="pitch-label">{t('problem.label')}</div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">{t('problem.title')}</h2>
                    <p className="text-lg text-gray-400 mb-8">{t('problem.subtitle')}</p>
                    <div className="grid grid-cols-3 gap-6">
                        {[1, 2, 3].map((n) => (
                            <div
                                key={n}
                                className="p-6 rounded-2xl bg-white/5 border border-white/5"
                            >
                                <div className="text-3xl mb-3">
                                    {n === 1 ? '🔒' : n === 2 ? '☁️' : '🤖'}
                                </div>
                                <h3 className="text-xl font-bold mb-2">
                                    {t(`problem.p${n}_title` as any)}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {t(`problem.p${n}_desc` as any)}
                                </p>
                            </div>
                        ))}
                    </div>
                    <SlideMeta n={2} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 3 — SOLUTION
                ════════════════════════════════════════ */}
                <section className="pitch-slide">
                    <div className="pitch-label">{t('solution.label')}</div>
                    <div className="flex items-baseline gap-4 mb-1">
                        <h2 className="text-4xl md:text-5xl font-display font-bold">
                            {t('solution.title')}
                        </h2>
                        <p className="text-xl text-[#60a5fa] font-semibold">
                            {t('solution.slogan')}
                        </p>
                    </div>
                    <p className="text-gray-400 mb-5">{t('solution.desc')}</p>

                    {/* 3 Components */}
                    <div className="grid grid-cols-3 gap-4 mb-5">
                        <div className="p-4 rounded-xl bg-gradient-to-b from-[#3b82f6]/15 to-transparent border border-[#3b82f6]/20">
                            <h3 className="font-bold mb-1">{t('solution.c1_title')}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed">{t('solution.c1_desc')}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-gradient-to-b from-[#06b6d4]/15 to-transparent border border-[#06b6d4]/20">
                            <h3 className="font-bold mb-1">{t('solution.c2_title')}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed">{t('solution.c2_desc')}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-gradient-to-b from-[#8b5cf6]/15 to-transparent border border-[#8b5cf6]/20">
                            <h3 className="font-bold mb-1">{t('solution.c3_title')}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed">{t('solution.c3_desc')}</p>
                        </div>
                    </div>

                    {/* Key points + Hero image */}
                    <div className="flex gap-6 items-center">
                        <ul className="space-y-2 flex-1">
                            {[1, 2, 3].map((n) => (
                                <li key={n} className="flex gap-2 items-start text-sm text-gray-300">
                                    <span className="text-[#60a5fa] mt-0.5">→</span>
                                    <span>{t(`solution.f${n}` as any)}</span>
                                </li>
                            ))}
                        </ul>
                        <img
                            src={`${imgDir}/login-background.jpg`}
                            alt="Naia OS"
                            className="w-60 rounded-xl shadow-lg border border-white/10"
                        />
                    </div>
                    <SlideMeta n={3} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 4 — PRODUCT DEMO
                ════════════════════════════════════════ */}
                <section className="pitch-slide">
                    <div className="pitch-label">{t('product.label')}</div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('product.title')}</h2>
                    <div className="grid grid-cols-5 gap-6 items-start">
                        {/* Screenshots */}
                        <div className="col-span-2 flex gap-3">
                            {[
                                { src: `${imgDir}/chat-text.png`, label: t('product.img_chat') },
                                { src: `${imgDir}/skills-tab.png`, label: t('product.img_skills') },
                                { src: `${imgDir}/channels-tab.png`, label: t('product.img_discord') },
                            ].map((img) => (
                                <div key={img.src} className="w-1/3 flex flex-col items-center">
                                    <img
                                        src={img.src}
                                        alt={img.label}
                                        className="w-full rounded-lg border border-white/10 shadow-lg"
                                    />
                                    <span className="text-[10px] text-gray-500 mt-1.5">{img.label}</span>
                                </div>
                            ))}
                        </div>
                        {/* Stats */}
                        <div className="col-span-3 grid grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                                <div
                                    key={n}
                                    className="p-4 rounded-xl bg-white/5 border border-white/5 text-center"
                                >
                                    <div className="text-2xl md:text-3xl font-display font-bold text-gradient">
                                        {t(`product.s${n}_value` as any)}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1">
                                        {t(`product.s${n}_label` as any)}
                                    </div>
                                </div>
                            ))}
                            <div className="col-span-3 p-4 rounded-xl bg-white/5 border border-white/5">
                                <h3 className="font-bold mb-1">{t('product.app_title')}</h3>
                                <p className="text-sm text-gray-400">{t('product.app_desc')}</p>
                            </div>
                        </div>
                    </div>
                    <SlideMeta n={4} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 5 — ECOSYSTEM
                ════════════════════════════════════════ */}
                <section className="pitch-slide">
                    <div className="pitch-label">{t('ecosystem.label')}</div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('ecosystem.title')}</h2>
                    {/* 3 cards */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <h3 className="text-sm font-bold mb-1">🧩 {t('ecosystem.e1_title')}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed">{t('ecosystem.e1_desc')}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <h3 className="text-sm font-bold mb-1">⚡ {t('ecosystem.e2_title')}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed">{t('ecosystem.e2_desc')}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <h3 className="text-sm font-bold mb-1">📖 {t('ecosystem.e3_title')}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed">{t('ecosystem.e3_desc')}</p>
                        </div>
                    </div>
                    {/* Highlight block */}
                    <div className="p-5 rounded-xl bg-gradient-to-r from-[#3b82f6]/10 to-[#06b6d4]/10 border border-[#3b82f6]/20">
                        <h3 className="text-sm font-bold mb-2 text-[#60a5fa]">{t('ecosystem.highlight_title')}</h3>
                        <p className="text-sm italic text-gray-200 mb-2">{t('ecosystem.highlight_quote')}</p>
                        <p className="text-xs text-gray-400 leading-relaxed">{t('ecosystem.highlight_desc')}</p>
                    </div>
                    <SlideMeta n={5} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 6 — MARKET
                ════════════════════════════════════════ */}
                <section className="pitch-slide">
                    <div className="pitch-label">{t('market.label')}</div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">{t('market.title')}</h2>
                    <p className="text-gray-400 mb-8">{t('market.subtitle')}</p>
                    <div className="grid grid-cols-2 gap-8 items-start">
                        {/* TAM/SAM/SOM */}
                        <div className="flex flex-col gap-4">
                            {(['tam', 'sam', 'som'] as const).map((key, i) => (
                                <div
                                    key={key}
                                    className="p-5 rounded-2xl border border-white/5"
                                    style={{
                                        background: `rgba(59, 130, 246, ${0.15 - i * 0.04})`,
                                    }}
                                >
                                    <div className="flex items-baseline gap-3 mb-1">
                                        <span className={`text-3xl font-display font-bold ${i === 0 ? 'text-white' : i === 1 ? 'text-blue-300' : 'text-cyan-400'}`}>
                                            {t(`market.${key}_value` as any)}
                                        </span>
                                        <span className="text-sm font-bold text-gray-300">
                                            {t(`market.${key}_label` as any)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400">
                                        {t(`market.${key}_desc` as any)}
                                    </p>
                                </div>
                            ))}
                            <p className="text-xs text-gray-600">{t('market.source')}</p>
                        </div>
                        {/* Growth drivers */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">{t('market.drivers_title')}</h3>
                            <div className="space-y-3">
                                {[1, 2, 3, 4].map((n) => (
                                    <div key={n} className="flex gap-3 items-start p-3 rounded-xl bg-white/5">
                                        <span className="text-[#60a5fa] font-bold">{String(n).padStart(2, '0')}</span>
                                        <span className="text-sm text-gray-300">
                                            {t(`market.d${n}` as any)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <SlideMeta n={6} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 7 — BUSINESS MODEL
                ════════════════════════════════════════ */}
                <section className="pitch-slide">
                    <div className="pitch-label">{t('bizmodel.label')}</div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('bizmodel.title')}</h2>
                    <div className="grid grid-cols-2 gap-8">
                        {/* B2C */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#60a5fa]">{t('bizmodel.b2c_title')}</h3>
                            <div className="space-y-3">
                                {(['free', 'starter', 'pro', 'enterprise'] as const).map((plan) => (
                                    <div key={plan} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                                        <div className="w-20">
                                            <div className="text-sm font-bold">{t(`bizmodel.${plan}_name` as any)}</div>
                                            <div className="text-xs text-[#60a5fa]">{t(`bizmodel.${plan}_price` as any)}</div>
                                        </div>
                                        <div className="text-sm text-gray-400 flex-1">
                                            {t(`bizmodel.${plan}_desc` as any)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* B2B */}
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-[#38bdf8]">{t('bizmodel.b2b_title')}</h3>
                            <div className="space-y-3 mb-6">
                                {['si', 'saas', 'onprem'].map((key) => (
                                    <div key={key} className="flex gap-2 items-start text-sm text-gray-300 p-3 rounded-xl bg-white/5">
                                        <span className="text-[#38bdf8] mt-0.5">→</span>
                                        <span>{t(`bizmodel.b2b_${key}` as any)}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-r from-[#3b82f6]/10 to-[#06b6d4]/10 border border-[#3b82f6]/20">
                                <p className="text-sm font-semibold text-gray-200">
                                    {t('bizmodel.b2b_highlight')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <SlideMeta n={7} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 8 — COMPETITIVE ADVANTAGE
                ════════════════════════════════════════ */}
                <section className="pitch-slide">
                    <div className="pitch-label">{t('competitive.label')}</div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('competitive.title')}</h2>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-white/5">
                                    {[1, 2, 3, 4].map((h) => (
                                        <th
                                            key={h}
                                            className={`px-4 py-3 text-left font-bold ${h === 4 ? 'text-[#60a5fa]' : 'text-gray-300'}`}
                                        >
                                            {t(`competitive.h${h}` as any)}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((r) => (
                                    <tr key={r} className="border-t border-white/5">
                                        {[1, 2, 3, 4].map((c) => (
                                            <td
                                                key={c}
                                                className={`px-4 py-2.5 ${
                                                    c === 1
                                                        ? 'font-semibold text-gray-200'
                                                        : c === 4
                                                            ? 'text-[#60a5fa] font-semibold'
                                                            : 'text-gray-500'
                                                }`}
                                            >
                                                {t(`competitive.r${r}c${c}` as any)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <SlideMeta n={8} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 9 — TRACTION
                ════════════════════════════════════════ */}
                <section className="pitch-slide">
                    <div className="pitch-label">{t('traction.label')}</div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">{t('traction.title')}</h2>
                    <p className="text-gray-400 mb-6">{t('traction.subtitle')}</p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                                <div key={n} className="flex gap-2 items-start text-sm">
                                    <span className="text-emerald-400 mt-0.5">✓</span>
                                    <span className="text-gray-300">{t(`traction.t${n}` as any)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#3b82f6]/10 to-[#06b6d4]/10 border border-[#3b82f6]/20 flex flex-col justify-center">
                            <h3 className="text-lg font-bold mb-3">{t('traction.speed_title')}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{t('traction.speed_desc')}</p>
                        </div>
                    </div>
                    <SlideMeta n={9} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 10 — TECHNOLOGY
                ════════════════════════════════════════ */}
                <section className="pitch-slide">
                    <div className="pitch-label">{t('tech.label')}</div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('tech.title')}</h2>
                    <div className="grid grid-cols-2 gap-8">
                        {/* Architecture Layers */}
                        <div className="space-y-3">
                            {[1, 2, 3, 4].map((n) => (
                                <div
                                    key={n}
                                    className="p-4 rounded-xl border border-white/10"
                                    style={{
                                        background: `rgba(59, 130, 246, ${0.12 - (n - 1) * 0.025})`,
                                    }}
                                >
                                    <div className="text-xs font-bold text-[#60a5fa] uppercase tracking-wide mb-1">
                                        {t(`tech.l${n}_title` as any)}
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        {t(`tech.l${n}_desc` as any)}
                                    </div>
                                </div>
                            ))}
                            <div className="flex items-center justify-center py-1">
                                <div className="text-xs text-gray-600 tracking-widest">▼ &nbsp; API &nbsp; ▼</div>
                            </div>
                        </div>
                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">{t('tech.stack_title')}</h3>
                            <div className="space-y-2.5">
                                {[1, 2, 3, 4, 5].map((n) => (
                                    <div key={n} className="flex gap-2 items-start text-sm text-gray-300 p-3 rounded-lg bg-white/5">
                                        <span className="text-[#60a5fa]">→</span>
                                        <span>{t(`tech.ts${n}` as any)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <SlideMeta n={10} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 11 — TEAM
                ════════════════════════════════════════ */}
                <section className="pitch-slide">
                    <div className="pitch-label">{t('team.label')}</div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('team.title')}</h2>
                    <div className="grid grid-cols-2 gap-6">
                        {/* CEO */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                            <h3 className="text-xl font-bold mb-0.5">{t('team.ceo_name')}</h3>
                            <p className="text-[#60a5fa] font-semibold text-sm mb-4">{t('team.ceo_role')}</p>
                            <ul className="space-y-1.5">
                                {[1, 2, 3, 4, 5, 6].map((n) => (
                                    <li key={n} className="flex gap-2 items-start text-xs text-gray-400">
                                        <span className="text-white mt-0.5">→</span>
                                        <span>{t(`team.ceo_i${n}` as any)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* CTO */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                            <h3 className="text-xl font-bold mb-0.5">{t('team.cto_name')}</h3>
                            <p className="text-[#60a5fa] font-semibold text-sm mb-4">{t('team.cto_role')}</p>
                            <ul className="space-y-1.5">
                                {[1, 2, 3, 4, 5, 6].map((n) => (
                                    <li key={n} className="flex gap-2 items-start text-xs text-gray-400">
                                        <span className="text-white mt-0.5">→</span>
                                        <span>{t(`team.cto_i${n}` as any)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-center text-gray-400 mt-5 text-sm">
                        {t('team.synergy')}
                    </p>
                    <SlideMeta n={11} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 12 — FINANCIALS
                ════════════════════════════════════════ */}
                <section className="pitch-slide">
                    <div className="pitch-label">{t('financials.label')}</div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">{t('financials.title')}</h2>
                    <p className="text-gray-400 text-sm mb-5">{t('financials.subtitle')}</p>
                    <div className="grid grid-cols-5 gap-6">
                        {/* Revenue Table */}
                        <div className="col-span-3 overflow-hidden rounded-xl border border-white/10">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-white/5">
                                        {[1, 2, 3, 4].map((h) => (
                                            <th
                                                key={h}
                                                className={`px-4 py-2.5 text-left font-bold ${h === 4 ? 'text-[#60a5fa]' : 'text-gray-300'}`}
                                            >
                                                {t(`financials.h${h}` as any)}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1, 2, 3, 4, 5].map((r) => (
                                        <tr key={r} className="border-t border-white/5">
                                            {[1, 2, 3, 4].map((c) => (
                                                <td
                                                    key={c}
                                                    className={`px-4 py-2 ${
                                                        c === 4
                                                            ? 'text-[#60a5fa] font-bold'
                                                            : c === 1
                                                                ? 'font-semibold text-gray-200'
                                                                : 'text-gray-400'
                                                    }`}
                                                >
                                                    {t(`financials.r${r}c${c}` as any)}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="px-4 py-2 bg-white/5 text-xs text-gray-500">
                                {t('financials.note')}
                            </div>
                        </div>
                        {/* Partnerships */}
                        <div className="col-span-2">
                            <h3 className="text-lg font-bold mb-4">{t('financials.partners_title')}</h3>
                            <div className="space-y-2">
                                {[1, 2, 3, 4].map((n) => (
                                    <div key={n} className="flex gap-2 items-start text-sm p-2.5 rounded-lg bg-white/5">
                                        <span className="text-[#60a5fa]">●</span>
                                        <span className="text-gray-300">{t(`financials.pt${n}` as any)}</span>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <SlideMeta n={12} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 13 — ROADMAP
                ════════════════════════════════════════ */}
                <section className="pitch-slide">
                    <div className="pitch-label">{t('roadmap.label')}</div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">{t('roadmap.title')}</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((n) => {
                            const statusColors: Record<number, string> = {
                                1: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
                                2: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
                                3: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
                                4: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
                            };
                            return (
                                <div
                                    key={n}
                                    className="p-5 rounded-2xl bg-white/5 border border-white/5 flex flex-col"
                                >
                                    <div className="text-xs font-bold text-[#60a5fa] mb-2">
                                        {t(`roadmap.m${n}_period` as any)}
                                    </div>
                                    <h3 className="text-lg font-bold mb-1">
                                        {t(`roadmap.m${n}_title` as any)}
                                    </h3>
                                    <span className={`inline-block self-start px-2 py-0.5 rounded-full text-xs font-semibold border mb-3 ${statusColors[n]}`}>
                                        {t(`roadmap.m${n}_status` as any)}
                                    </span>
                                    <div className="text-xs text-gray-400 leading-relaxed">
                                        {(t(`roadmap.m${n}_items` as any) as string).split(' | ').map((item: string, i: number) => (
                                            <div key={i} className="flex gap-1.5 items-start mb-1">
                                                <span className="text-gray-600">·</span>
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <SlideMeta n={13} />
                </section>

                {/* ════════════════════════════════════════
                    SLIDE 14 — CONTACT / ASK
                ════════════════════════════════════════ */}
                <section className="pitch-slide items-center text-center">
                    <div className="absolute inset-0 z-0 opacity-10">
                        <img
                            src="/assets/wallpaper/wallpaper-naia-dark-background1-2160.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="pitch-label">{t('contact.label')}</div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
                            <span className="text-gradient">{t('contact.title')}</span>
                        </h2>

                        {/* Ask */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8 min-w-[400px]">
                            <h3 className="text-lg font-bold mb-3">{t('contact.ask_title')}</h3>
                            <div className="flex items-center justify-center gap-6 text-sm">
                                <div>
                                    <div className="text-gray-400">Stage</div>
                                    <div className="text-lg font-bold text-[#60a5fa]">{t('contact.ask_stage')}</div>
                                </div>
                                <div className="w-px h-10 bg-white/10" />
                                <div>
                                    <div className="text-gray-400">Amount</div>
                                    <div className="text-lg font-bold text-gradient">{t('contact.ask_amount')}</div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 mt-3">{t('contact.ask_use')}</p>
                        </div>

                        {/* Contact info */}
                        <div className="flex gap-8 text-sm text-gray-400">
                            <a href="mailto:luke.yang@nextain.io" className="hover:text-white transition-colors">
                                {t('contact.email')}
                            </a>
                            <a href="https://about.nextain.io" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                {t('contact.web')}
                            </a>
                            <a href="https://naia.nextain.io" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                {t('contact.service')}
                            </a>
                            <a href="https://github.com/nextain" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                {t('contact.github')}
                            </a>
                        </div>

                        <div className="mt-8">
                            <img src="/assets/logos/nextain-dark-logo.png" alt="Nextain" className="h-8 opacity-40" />
                        </div>
                        <p className="text-xs text-gray-600 mt-4">{t('contact.copyright')}</p>
                    </div>
                    <SlideMeta n={14} />
                </section>

            </div>
        </main>
    );
}
