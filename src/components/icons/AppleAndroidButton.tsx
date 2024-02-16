'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, Link } from '@nextui-org/react';
import { motion, MotionStyle } from 'framer-motion';
import React from 'react';
import { PlayStoreLogo } from './PlayStoreLogo';

type Props = {
  className?: string;
  style?: MotionStyle;
};

export const AppleAndroidButton = ({ className, style }: Props) => {
  return (
    <motion.div style={style} className={className}>
      <Button
        href="https://www.apple.com/app-store/"
        isExternal
        startContent={<Icon icon="uil:apple" className="size-8" />}
        size="md"
        as={Link}
        variant="bordered"
        color="default"
      >
        App Store
      </Button>
      <Button
        href="https://play.google.com/store/games"
        isExternal
        startContent={<PlayStoreLogo size={28} />}
        size="md"
        as={Link}
        variant="bordered"
      >
        Google Play
      </Button>
    </motion.div>
  );
};
