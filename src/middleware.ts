import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
    locales,
    defaultLocale: 'ko'
});

export const config = {
    matcher: ['/', '/(ko|en)/:path*']
};
