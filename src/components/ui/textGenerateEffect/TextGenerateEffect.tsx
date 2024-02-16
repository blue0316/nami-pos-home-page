'use client';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [scope, animate] = useAnimate();
  console.log(words);
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.split('').map((word, idx) => {
          return (
            <motion.span className="opacity-0" key={word + idx}>
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return <div className={className}>{renderWords()}</div>;
};
