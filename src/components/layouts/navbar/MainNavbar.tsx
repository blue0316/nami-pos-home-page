'use client';

import { Icon } from '@iconify/react';
import type { NavbarProps } from '@nextui-org/react';
import {
  Button,
  Divider,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import React from 'react';
import { IconLogo } from '@/components/icons';
import { LocaleSwitcher } from '@/components/layouts/localeSwitcher';
import { cn } from '@/lib/utils';
import { Link, usePathname } from '@/navigation';

export const MainNavbar = (props: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const currentPathName = usePathname();
  const t = useTranslations('Navigation');

  return (
    <Navbar
      {...props}
      classNames={{
        base: cn('border-default-100 ', {
          'bg-default-200/50 dark:bg-default-100/50 ': isMenuOpen,
        }),
        wrapper: 'w-full justify-center',
        item: 'hidden md:flex',
      }}
      height="72px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
    >
      <NavbarMenuToggle className="md:hidden" />

      {/* Left Content */}
      <NavbarBrand className="cursor-pointer">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <IconLogo />
        </Link>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent justify="center">
        <NavbarItem isActive={currentPathName === '/ourProduct'}>
          <Link className="text-default-600" href="/ourProduct">
            {t('ourProduct')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPathName === '/equipments'}>
          <Link className="text-default-600" href="/equipments">
            {t('equipments')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPathName === '/pricing'}>
          <Link className="text-default-600" href="/pricing">
            {t('pricing')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPathName === '/contactUs'}>
          <Link className="text-default-600" href="/contactUs">
            {t('contactUs')}
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent justify="end">
        <NavbarItem className="ml-2 !flex gap-2">
          <LocaleSwitcher />
          <Button
            variant="bordered"
            startContent={<Icon icon="solar:login-linear" className="size-6" />}
            size="md"
          >
            {t('storeLogin')}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className=" h-screen bg-default-200/50 py-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: 'easeInOut',
            duration: 0.2,
          },
        }}
      >
        <NavbarMenuItem isActive={currentPathName === '/ourProduct'}>
          <Link
            className="text-default-600"
            href="/ourProduct"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('ourProduct')}
          </Link>
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem isActive={currentPathName === '/equipments'}>
          <Link
            className="text-default-600"
            href="/equipments"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('equipments')}
          </Link>
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem isActive={currentPathName === '/pricing'}>
          <Link className="text-default-600" href="/pricing" onClick={() => setIsMenuOpen(false)}>
            {t('pricing')}
          </Link>
        </NavbarMenuItem>
        <Divider />

        <NavbarMenuItem isActive={currentPathName === '/contactUs'}>
          <Link className="text-default-600" href="/contactUs" onClick={() => setIsMenuOpen(false)}>
            {t('contactUs')}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
