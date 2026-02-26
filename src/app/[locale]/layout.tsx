import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Script from 'next/script';
import '../globals.css';

export const metadata = {
    title: 'Nextain INC - Defining the Infrastructure for the AGI Era',
    description: 'Nextain builds the sovereign infrastructure for the AGI era.',
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
