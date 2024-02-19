'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import MENUITEMS from '@/assets/addmenuItems.webp';
import MULTISTORE from '@/assets/chooseRestaurant.webp';
import PAYMENT from '@/assets/payment.webp';

const whyUsData = [
  {
    title: 'Intuitive for Waiters',
    description:
      'Nami POS simplifies order-taking for waiters, ensuring quick and accurate service.',
    image: MENUITEMS,
  },
  {
    title: 'Multi-Store Convenience',
    description:
      'Ideal for restaurant owners with multiple locations, Nami POS Manager streamlines management across different establishments.',
    image: MULTISTORE,
  },
  {
    title: 'Seamless Transactions',
    description:
      'Multiple payment options and the ability to split checks make transactions smooth and customer-friendly.',
    image: PAYMENT,
  },
  {
    title: 'Admin Empowerment',
    description:
      'Nami POS Manager puts administrative controls at your fingertips, from staff management to discount creation.',
    image: MENUITEMS,
  },
] as const;

const ValueProposition = () => {
  const containerRef = useRef(null);

  const view = useInView(containerRef);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={containerRef}
      className="mx-auto my-14 max-w-screen-xl px-3"
      variants={containerVariants}
      initial="hidden"
      animate={view ? 'visible' : 'hidden'}
    >
      <motion.h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl" variants={itemVariants}>
        Why Us?
      </motion.h1>

      {whyUsData.map((data, index) => (
        <motion.div
          className={`my-14 flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:gap-[120px] ${
            index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
          }`}
          key={data.title}
          variants={itemVariants}
        >
          <div className="max-w-[456px]">
            <motion.h2
              className="text-3xl font-bold sm:text-4xl lg:text-5xl"
              variants={itemVariants}
            >
              {data.title}
            </motion.h2>
            <motion.p
              className="mb-8 mt-3 text-sm font-normal sm:text-base "
              variants={itemVariants}
            >
              {data.description}
            </motion.p>
          </div>
          <motion.div variants={itemVariants}>
            <Image
              className="h-[220px] w-[303.88px] md:h-[440px] md:w-[607.24px]"
              src={data.image}
              alt={data.title}
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default ValueProposition;
