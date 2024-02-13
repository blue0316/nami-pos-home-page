import { unstable_setRequestLocale } from 'next-intl/server';
import { ThemeSwitcher } from '@/components/layouts/themeSwitcher';

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main className=" flex h-screen flex-col items-center justify-center">
      <ThemeSwitcher />
      <h1>Home Page</h1>
    </main>
  );
}
