import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ja'];

const i18n = {
  locales,
  defaultLocale: 'en',
};

export type I18nConfig = typeof i18n;

export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await (locale === 'en'
      ? // When using Turbopack, this will enable HMR for `en`
        import('../messages/en.json')
      : import(`../messages/${locale}.json`))
  ).default,
}));
