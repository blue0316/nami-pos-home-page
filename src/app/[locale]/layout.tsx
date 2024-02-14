import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Noto_Sans_JP } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import React, { ReactNode, Suspense } from 'react';
import Loading from '@/app/[locale]/loading';
import { MainNavbar } from '@/components/layouts';
import { locales } from '@/i18n';
import { cn } from '@/lib/utils';
import { RootProvider } from '@/provider/RootProvider';

const notoJp = Noto_Sans_JP({
  subsets: ['latin'],
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Site' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);
  const message = useMessages();
  return (
    // change the default theme option
    <html lang={locale}>
      <body className={cn(notoJp.className)}>
        <RootProvider>
          <NextIntlClientProvider messages={message}>
            <Suspense fallback={<Loading />}>
              <MainNavbar />
              {children}
            </Suspense>
          </NextIntlClientProvider>
        </RootProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
