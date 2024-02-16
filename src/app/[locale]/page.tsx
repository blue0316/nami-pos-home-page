import { unstable_setRequestLocale } from 'next-intl/server';
import { HeroScrollAnimation } from '@/components/ui/heroAnimation/HeroScrollAnimation';

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main>
      <HeroScrollAnimation />
    </main>
  );
}
