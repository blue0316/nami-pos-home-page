'use client';

import { Icon } from '@iconify/react';
import type { NavbarProps } from '@nextui-org/react';
import {
  Button,
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import React from 'react';
import { IconLogo } from '@/components/icons';
import { cn } from '@/lib/utils';
import { usePathname } from '@/navigation';

const menuItems = [
  'About',
  'Blog',
  'Customers',
  'Pricing',
  'Enterprise',
  'Changelog',
  'Documentation',
  'Contact Us',
];

export const MainNavbar = (props: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const currentPathName = usePathname();

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
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle className="text-foreground" />
      </NavbarContent>

      {/* Left Content */}
      <NavbarBrand className="cursor-pointer">
        <Link href="/">
          <IconLogo />
        </Link>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent justify="center">
        <NavbarItem isActive={currentPathName === '/'}>
          <Link className="text-default-500" href="/" size="sm">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="/home" size="sm">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="#" size="sm">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent justify="end">
        <NavbarItem className="ml-2 !flex gap-2">
          <Button className="text-default-500" variant="solid">
            en
          </Button>
          <Button
            color="primary"
            endContent={<Icon icon="solar:alt-arrow-right-linear" />}
            radius="full"
            variant="solid"
            size="md"
          >
            Store Login
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
        <NavbarMenuItem>
          <Button fullWidth as={Link} href="/#" variant="faded">
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button fullWidth as={Link} className="bg-foreground text-background" href="/#">
            Get Started
          </Button>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="mb-2 w-full text-default-500" href="#" size="md">
              {item}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
