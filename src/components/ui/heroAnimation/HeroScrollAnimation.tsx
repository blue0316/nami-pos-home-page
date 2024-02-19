'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { TextGenerateEffect } from '../textGenerateEffect';
import LGHEROIMAGE from '@/assets/lgHeroSection.png';
import {
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
import { AppleAndroidButton } from '@/components/icons';
import { ThemeSwitcher } from '@/components/layouts/themeSwitcher';
import SponsorsScrollingBanner from '@/components/sponsors/SponsorsScrollingBanner';

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

export const HeroScrollAnimation = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const isInView = useInView(containerRef, { once: true });

  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 0]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -80]);
  return (
    <main ref={containerRef}>
      <motion.div
        style={{
          translateY: translate,
        }}
        className="mx-auto max-w-screen-xl px-6"
      >
        {/* <p className="mt-20 text-center text-5xl font-black md:text-7xl lg:text-8xl">
          Refine Restaurant Efficiency Now.
        </p> */}

        <TextGenerateEffect
          className="mt-20 text-center text-5xl font-black md:text-7xl lg:text-8xl"
          words={'Refine Restaurant Efficiency Now.'}
        />
        <motion.p
          style={{
            opacity: isInView ? 1 : 0,
            transition: 'opacity 3s ease-in-out 0.7s',
          }}
          className="mt-10 text-center text-lg font-normal md:text-2xl "
        >
          Effortless Table and Order Management, Secure Payments, and Intuitive Admin Controls – All
          in One Place.
          <ThemeSwitcher />
        </motion.p>

        <AppleAndroidButton
          style={{
            opacity: isInView ? 1 : 0,
            transition: 'opacity 3s ease-in-out 1s',
          }}
          className="mt-10 flex justify-center gap-6"
        />
      </motion.div>
      <motion.div
        style={{
          rotateX: rotate,
        }}
        className="mx-auto flex max-w-screen-xl justify-center px-3 py-1.5"
      >
        <Image src={LGHEROIMAGE} alt={'heroSectionImage'} />
      </motion.div>

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
};
