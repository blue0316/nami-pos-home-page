import { unstable_setRequestLocale } from 'next-intl/server';
import { ThemeSwitcher } from '@/components/layouts/themeSwitcher';
import { TopHeadlineUpdates } from '@/components/Updates';

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main>
      <TopHeadlineUpdates />
      <div className="mx-auto max-w-screen-xl px-6">
        <p className="w-[1128px] text-center text-8xl font-black leading-[96px]">
          Refine Restaurant Efficiency Now.
        </p>
        <ThemeSwitcher />
      </div>
    </main>
  );
}
