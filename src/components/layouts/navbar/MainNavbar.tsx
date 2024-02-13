'use client';

import { Icon } from '@iconify/react';
import type { NavbarProps } from '@nextui-org/react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
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
import { cn } from '@/lib/utils';
import { usePathname } from '@/navigation';

const items = [
  {
    key: 'en',
    label: 'english',
  },
  {
    key: 'ja',
    label: 'japanese',
  },
  {
    key: 'ch',
    label: 'chinese',
  },
  {
    key: 'ko',
    label: 'korean',
  },
];

export const MainNavbar = (props: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const currentPathName = usePathname();
  const t = useTranslations('Navigation');

  return (
    <Navbar
      {...props}
      classNames={{
        base: cn('border-default-100', {
          'bg-default-200/50 dark:bg-default-100/50': isMenuOpen,
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
          <Link className="text-default-600" href="/ourProduct" size="sm">
            {t('ourProduct')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPathName === '/equipments'}>
          <Link className="text-default-600" href="/equipments" size="sm">
            {t('equipments')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPathName === '/pricing'}>
          <Link className="text-default-600" href="/pricing" size="sm">
            {t('pricing')}
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPathName === '/contactUs'}>
          <Link className="text-default-600" href="/contactUs" size="sm">
            {t('contactUs')}
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent justify="end">
        <NavbarItem className="ml-2 !flex gap-2">
          {/*ToDo:- add-Icons Translate dropdown */}
          <Dropdown backdrop="blur" placement="bottom-start">
            <DropdownTrigger>
              <Button
                isIconOnly
                startContent={<Icon icon="material-symbols:translate" className="size-6" />}
                className="bg-default-100 p-0"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="language-selection" items={items}>
              {(item) => (
                <DropdownItem
                  key={item.key}
                  color={item.key === 'delete' ? 'danger' : 'default'}
                  className={item.key === 'delete' ? 'text-danger' : ''}
                >
                  {item.label}
                </DropdownItem>
              )}
            </DropdownMenu>
          </Dropdown>
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
        className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 py-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
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
            size="sm"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('ourProduct')}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem isActive={currentPathName === '/equipments'}>
          <Link
            className="text-default-600"
            href="/equipments"
            size="sm"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('equipments')}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem isActive={currentPathName === '/pricing'}>
          <Link
            className="text-default-600"
            href="/pricing"
            size="sm"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('pricing')}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem isActive={currentPathName === '/contactUs'}>
          <Link
            className="text-default-600"
            href="/contactUs"
            size="sm"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('contactUs')}
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
