import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Script from 'next/script';
import '../globals.css';

export const metadata = {
    title: 'Nextain | Next AI Networks',
    description: '오픈소스 기반의 상호호환 가능한 AI 환경을 구축하는 기술 연구 기업. 플랫폼에 종속되지 않고, 나만의 AI를 유연하게 소유할 수 있는 세상을 만듭니다.',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: 'Nextain | Next AI Networks',
        description: '오픈소스 기반의 상호호환 가능한 AI 환경을 구축하는 기술 연구 기업. 플랫폼에 종속되지 않고, 나만의 AI를 유연하게 소유할 수 있는 세상을 만듭니다.',
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
        siteName: 'Nextain',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nextain | Next AI Networks',
        description: '오픈소스 기반의 상호호환 가능한 AI 환경을 구축하는 기술 연구 기업. 플랫폼에 종속되지 않고, 나만의 AI를 유연하게 소유할 수 있는 세상을 만듭니다.',
        images: ['/og-image.png'],
    },
};

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <head>
                <Script
                    strategy="beforeInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-F0D8SJPZ2Q"
                />
                <Script
                    id="gtag-init"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-F0D8SJPZ2Q');
                        `,
                    }}
                />
            </head>
            <body className="antialiased bg-[#0a0a0c] text-white">
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
