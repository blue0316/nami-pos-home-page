import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { ThemeSwitcher } from '@/components/layouts/themeSwitcher';
import { Link } from '@/navigation';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className=" flex h-screen flex-col items-center justify-center">
      <ThemeSwitcher />
      <Button color="primary">Button</Button>
      <div className="m-9 flex">
        <Link href="/" locale="en">
          In english
        </Link>
        |
        <Link href="/" locale="ja">
          In Japanese
        </Link>
      </div>
      <p className="w-96">{t('desc')}</p>
    </main>
  );
}
