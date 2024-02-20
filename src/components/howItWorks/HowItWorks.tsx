'use client';
import { Button, Card, CardBody, CardHeader, Chip, Spacer, Tab, Tabs } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { AppleAndroidButton, NamiManagerFullLogo, NamiPosFullLogo } from '../icons';
import MENUITEMS from '@/assets/addmenuItems.webp';
import MULTISTORE from '@/assets/chooseRestaurant.webp';

const TAB_KEYS = {
  MANAGER: 'namiPosManager',
  APP: 'namiPosApp',
} as const;

type TabKeyType = (typeof TAB_KEYS)[keyof typeof TAB_KEYS];

const TAB_COLORS: Record<TabKeyType, 'secondary' | 'primary'> = {
  namiPosManager: 'secondary',
  namiPosApp: 'primary',
};

export const HowItWorks: React.FC = () => {
  const [selected, setSelected] = useState<TabKeyType>(TAB_KEYS.MANAGER);

  const handleTabClick = (tabKey: TabKeyType) => {
    setSelected(tabKey);
  };

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center px-3 py-14">
      <motion.h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl">How it Works?</motion.h1>
      <Spacer y={14} />
      <Tabs
        classNames={{
          tab: 'data-[hover-unselected=true]:opacity-90',
        }}
        variant="bordered"
        color={TAB_COLORS[selected]}
        selectedKey={selected}
        size="lg"
      >
        <Tab
          key={TAB_KEYS.MANAGER}
          aria-label="pos manager"
          className=" flex flex-col items-center"
          title={
            <Chip variant="light" onClick={() => handleTabClick(TAB_KEYS.MANAGER)}>
              <NamiManagerFullLogo isWhite={selected === TAB_KEYS.MANAGER} />
            </Chip>
          }
        >
          <div className="my-8 flex flex-col gap-8 md:my-14 md:flex-row lg:gap-6">
            <Card className="max-w-[350px] p-4">
              <CardHeader className="flex h-40 justify-center">
                <Button variant="shadow" color="primary">
                  Get Started for Free
                </Button>
              </CardHeader>
              <CardBody>
                <h3 className="text-xs font-bold  text-opacity-40">STEP 1</h3>
                <h1 className="my-3 text-xl font-bold md:text-3xl">Get Started for Free</h1>
                <p className="text-sm font-normal leading-tight text-content4-foreground">
                  Sign Up for free using our call to action button or Logging in via our navbar.
                </p>
              </CardBody>
            </Card>
            <Card className="max-w-[350px] p-4">
              <CardHeader className="h-40">
                <Image
                  src={MULTISTORE}
                  width={256}
                  height={160}
                  className="mx-auto max-h-40"
                  alt="Multi-Store Convenience"
                  placeholder="blur"
                />
              </CardHeader>
              <CardBody>
                <h3 className="text-xs font-bold  text-opacity-40">STEP 2</h3>
                <h1 className="my-3 text-xl font-bold  md:text-3xl">Create Restaurant</h1>
                <p className="text-sm font-normal leading-tight text-content4-foreground">
                  After getting approved, create your restaurant and set it up so that you can use
                  it later for NamiPOS app.
                </p>
              </CardBody>
            </Card>
            <Card className="max-w-[350px] p-4">
              <CardHeader className="h-40">
                <Image
                  width={256}
                  height={160}
                  src={MENUITEMS}
                  className="mx-auto  max-h-40"
                  alt="Multi-Store Convenience"
                  placeholder="blur"
                />
              </CardHeader>
              <CardBody>
                <h3 className="text-xs font-bold text-opacity-40">STEP 3</h3>
                <h1 className="my-3 text-xl font-bold  md:text-3xl">Setup your Restaurant</h1>
                <p className="text-sm font-normal leading-tight text-content4-foreground">
                  Make staffs, create menus and many more using our Nami POS Manager WebApp.
                </p>
              </CardBody>
            </Card>
          </div>

          <Button variant="shadow" color="primary">
            Get Started for Free
          </Button>
        </Tab>
        <Tab
          key={TAB_KEYS.APP}
          aria-label="pos handy"
          className=" flex flex-col items-center"
          title={
            <Chip variant="light" onClick={() => handleTabClick(TAB_KEYS.APP)}>
              <NamiPosFullLogo isWhite={selected === TAB_KEYS.APP} />
            </Chip>
          }
        >
          <div className="my-8 flex flex-col gap-8 md:my-14 md:flex-row lg:gap-6">
            <Card className="max-w-[350px] p-4">
              <CardHeader className="flex h-40 justify-center">
                <AppleAndroidButton className="flex flex-col gap-5" />
              </CardHeader>
              <CardBody>
                <h3 className="text-xs font-bold text-opacity-40">STEP 1</h3>
                <h1 className="my-3 text-xl font-bold md:text-3xl">Download the App</h1>
                <p className="text-sm font-normal leading-tight text-content4-foreground">
                  Download Nami Pos App from Google PlayStore or Apple Play Store
                </p>
              </CardBody>
            </Card>
            <Card className="max-w-[350px] p-4">
              <CardHeader className="h-40">
                <Image
                  src={MULTISTORE}
                  width={256}
                  height={160}
                  className="mx-auto max-h-40"
                  alt="Multi-Store Convenience"
                  placeholder="blur"
                />
              </CardHeader>
              <CardBody>
                <h3 className="text-xs font-bold text-opacity-40">STEP 2</h3>
                <h1 className="my-3 text-xl font-bold  md:text-3xl">Log In</h1>
                <p className="text-sm font-normal leading-tight text-content4-foreground">
                  Log In using the email provided through Nami POS Manager. If you haven’t already
                  registered to sign up for NamiPOS Manager and set-up first.
                </p>
              </CardBody>
            </Card>
            <Card className="max-w-[350px] p-4">
              <CardHeader className="h-40">
                <Image
                  width={256}
                  height={160}
                  src={MENUITEMS}
                  className="mx-auto  max-h-40"
                  alt="Multi-Store Convenience"
                  placeholder="blur"
                />
              </CardHeader>
              <CardBody>
                <h3 className="text-xs font-bold text-opacity-40">STEP 3</h3>
                <h1 className="my-3 text-xl font-bold md:text-3xl">Start Using it!</h1>
                <p className="text-sm font-normal leading-tight text-content4-foreground">
                  Start using the Nami POS for your business and upgrade as necessary.
                </p>
              </CardBody>
            </Card>
          </div>
          <AppleAndroidButton className="flex gap-5" />
        </Tab>
      </Tabs>
    </div>
  );
};
