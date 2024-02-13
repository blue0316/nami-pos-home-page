import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

// ToDo:- #11 Switch-locale
/** 
function getLocale(request: NextRequest, i18nConfig: I18nConfig) {
  const { locales, defaultLocale } = i18nConfig;
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

  return match(languages, locales, defaultLocale);
}
*/

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  localePrefix: 'always',
  localeDetection: true,
});

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
