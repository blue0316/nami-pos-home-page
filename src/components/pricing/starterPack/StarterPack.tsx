'use client';

import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React, { useRef } from 'react';
import { NamiManagerFullLogo, NamiPosFullLogo, Xicon } from '@/components/icons';
import { Link } from '@/navigation';

export const StarterPack = () => {
  const t = useTranslations('StarterPack');
  const containerRef = useRef(null);

  const view = useInView(containerRef);

  return (
    <motion.div ref={containerRef} className="mx-auto bg-default-100 px-3 py-14">
      <motion.h1
        style={{
          opacity: view ? 1 : 0,
          transition: 'opacity 3s ease-in-out 0.2s',
        }}
        className="flex flex-col justify-center text-center text-4xl font-bold sm:flex-row sm:text-6xl lg:text-7xl"
      >
        Nami Basic
        <span className="text-primary">{t('monthlyFree')}</span>
      </motion.h1>

      <motion.div
        animate={{
          scale: view ? 1 : 0,
        }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: 'easeIn',
        }}
        className="my-14 flex items-center justify-center gap-8"
      >
        <NamiPosFullLogo className="sm:h-7 sm:w-40" />
        <Xicon className="size-4 sm:size-5" />
        <NamiManagerFullLogo className="sm:h-7 sm:w-40" />
      </motion.div>

      <div className="flex justify-center gap-4">
        <Card className="max-w-[552px]" fullWidth>
          <CardHeader className="justify-center">
            <p className="text-lg font-bold text-default-500 sm:text-2xl"> {t('initialCost')}</p>
          </CardHeader>
          <CardBody className="flex-row items-baseline justify-center gap-2 overflow-hidden">
            <h2 className="text-xl font-bold text-content4 sm:text-3xl">¥</h2>
            <h1 className="text-5xl sm:text-8xl">0</h1>
          </CardBody>
        </Card>
        <Card className="max-w-[552px]" fullWidth>
          <CardHeader className="justify-center">
            <p className="text-lg font-bold text-default-500 sm:text-2xl"> {t('monthlyCost')}</p>
          </CardHeader>
          <CardBody className="flex-row items-baseline justify-center gap-2 overflow-hidden">
            <h2 className="text-xl font-bold text-content4 sm:text-3xl">¥</h2>
            <h1 className="text-5xl sm:text-8xl">0</h1>
          </CardBody>
        </Card>
      </div>

      {/* to do path to some page */}
      <div className="mt-12 flex justify-center">
        <Button as={Link} href="/" size="lg" variant="shadow" color="primary">
          {t('startForFree')}
        </Button>
      </div>
    </motion.div>
  );
};
