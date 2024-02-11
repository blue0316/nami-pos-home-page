'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

export function RootProvider({ children }: { children: ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
