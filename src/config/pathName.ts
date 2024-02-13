import { Pathnames } from 'next-intl/navigation';
import { locales } from '@/i18n';

export const pathnames = {
  '/': '/',
  '/ourProduct': {
    en: '/ourProduct',
    ja: '/およそ',
  },
  '/equipments': {
    en: '/equipments',
    ja: '/周辺機器',
  },
  '/pricing': {
    en: '/pricing',
    ja: '/料金プラン',
  },
  '/contactUs': {
    en: '/contactUs',
    ja: '/お問い合わせ',
  },
  '/storeLogin': {
    en: '/storeLogin',
    ja: '/店舗ログイン',
  },
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
