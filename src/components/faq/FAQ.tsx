'use client';

import { Icon } from '@iconify/react';
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import React from 'react';
import { FAQS } from './data';

export const FAQ = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-3 py-14">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <h2 className="mx-auto text-4xl font-bold md:text-6xl lg:text-7xl">FAQs</h2>
        <Accordion
          fullWidth
          keepContentMounted
          className="my-14 gap-3 md:my-8 lg:my-24"
          itemClasses={{
            base: 'px-6 bg-background hover:!bg-background/50',
            title: 'font-medium',
            trigger: 'py-6 flex-row-reverse',
            content: 'pt-0 pb-6 text-base text-default-500',
          }}
          items={FAQS}
          selectionMode="multiple"
          variant="splitted"
        >
          {FAQS.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={<Icon icon="lucide:plus" width={24} />}
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="mx-auto flex flex-col items-center">
        <h2 className="text-center">Have any other questions? See more or contact us.</h2>
        <div className="mt-3 flex gap-2 md:mt-6">
          <Button size="lg" variant="light" color="primary">
            see more
          </Button>
          <Button size="lg" variant="bordered" color="primary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
