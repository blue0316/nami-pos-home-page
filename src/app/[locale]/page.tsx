import Image from 'next/image';
import { unstable_setRequestLocale } from 'next-intl/server';
import LGHEROIMAGE from '@/assets/lgHeroSection.png';
import {
  AppleAndroidButton,
  Logo1,
  Logo10,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
} from '@/components/icons';
import { ThemeSwitcher } from '@/components/layouts/themeSwitcher';
import SponsorsScrollingBanner from '@/components/sponsors/SponsorsScrollingBanner';
import { TopHeadlineUpdates } from '@/components/Updates';

type Props = {
  params: { locale: string };
};

const logos = [
  {
    key: 'logo-1',
    logo: Logo1,
  },
  {
    key: 'logo-2',
    logo: Logo2,
  },
  {
    key: 'logo-3',
    logo: Logo3,
  },
  {
    key: 'logo-4',
    logo: Logo4,
  },
  {
    key: 'logo-5',
    logo: Logo5,
  },
  {
    key: 'logo-6',
    logo: Logo6,
  },
  {
    key: 'logo-7',
    logo: Logo7,
  },
  {
    key: 'logo-8',
    logo: Logo8,
  },
  {
    key: 'logo-9',
    logo: Logo9,
  },
  {
    key: 'logo-10',
    logo: Logo10,
  },
];
export default function Home({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main>
      <TopHeadlineUpdates />
      <div className="mx-auto max-w-screen-xl px-6">
        <p className="mt-20 text-center text-5xl font-black md:text-7xl lg:text-8xl">
          Refine Restaurant Efficiency Now.
        </p>
        <p className="mt-10 text-center text-lg font-normal md:text-2xl ">
          Effortless Table and Order Management, Secure Payments, and Intuitive Admin Controls – All
          in One Place.
          <ThemeSwitcher />
        </p>

        <AppleAndroidButton className="mt-10 flex justify-center gap-6" />
      </div>

      <div className="mx-auto mt-10 flex max-w-screen-xl justify-center px-3 py-1.5">
        <Image src={LGHEROIMAGE} alt={'heroSectionImage'} />
      </div>

      <section className="mx-auto w-full max-w-screen-2xl px-3 py-14 md:py-20">
        <p className="mb-10 text-center text-xl font-bold lg:mb-16  lg:text-2xl">
          Trusted by Innovational Industry Leaders
        </p>
        <SponsorsScrollingBanner shouldPauseOnHover gap="40px">
          {logos.map(({ key, logo }) => (
            <div key={key} className="flex items-center justify-center text-foreground">
              {logo}
            </div>
          ))}
        </SponsorsScrollingBanner>
      </section>
    </main>
  );
}
