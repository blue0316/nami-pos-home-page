'use client';

import { Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// ToDo-:- 5 theme-switcher
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center text-danger">
      <Button color="secondary" variant="shadow" onClick={() => setTheme('light')}>
        Light Mode
      </Button>
      <Button color="primary" variant="shadow" onClick={() => setTheme('dark')}>
        Dark Mode
      </Button>
    </div>
  );
}
