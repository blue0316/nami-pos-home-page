'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState, useTransition } from 'react';
import { usePathname, useRouter } from '@/navigation';

export const LocaleSwitcher = () => {
  const locale = useLocale();
  const [selectedLocale, setSelectedLocale] = useState(locale);
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('LocaleOptions');
  const router = useRouter();
  const pathname = usePathname();

  function handleLocaleChange(nextLocale: string) {
    setSelectedLocale(nextLocale);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  const languageOptions = [
    { key: 'en', label: t('en'), icon: 'emojione-v1:flag-for-united-states' },
    { key: 'ja', label: t('ja'), icon: 'emojione-v1:flag-for-japan' },
  ];

  return (
    <Dropdown backdrop="blur" placement="bottom-start" isDisabled={isPending} closeOnSelect>
      <DropdownTrigger>
        <Button
          aria-label="languageTranslate"
          name="languageTranslate"
          variant="shadow"
          isIconOnly
          className="bg-default-100 p-0"
        >
          <Icon icon="material-symbols:translate" className="size-6" />
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="language-selection"
        disallowEmptySelection
        disabledKeys={[selectedLocale]}
        variant="shadow"
      >
        {languageOptions.map((option) => (
          <DropdownItem
            key={option.key}
            startContent={<Icon icon={option.icon} />}
            onClick={() => handleLocaleChange(option.key)}
            className="capitalize"
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
