import { unstable_setRequestLocale } from 'next-intl/server';
import { FAQ } from '@/components/faq';
import { HowItWorks } from '@/components/howItWorks';
import { StarterPack } from '@/components/pricing/starterPack';
import { HeroScrollAnimation } from '@/components/ui/heroAnimation/HeroScrollAnimation';
import { TopHeadlineUpdates } from '@/components/Updates';
import ValueProposition from '@/components/valueProposition/ValueProposition';

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main>
      <TopHeadlineUpdates />
      <HeroScrollAnimation />
      <StarterPack />
      <ValueProposition />
      <HowItWorks />
      <FAQ />
    </main>
  );
}
