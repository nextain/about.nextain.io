import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
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
            <body className="antialiased bg-[#0a0a0c] text-white">
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
