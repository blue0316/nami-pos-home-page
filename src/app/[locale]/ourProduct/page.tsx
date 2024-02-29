import { Button } from '@nextui-org/react';
import { draftMode } from 'next/headers';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { SanityDocument } from 'next-sanity';
import { ThemeSwitcher } from '@/components/layouts/themeSwitcher';
import Posts from '@/components/Posts';
import PostsPreview from '@/components/PostsPreview';
import { Link } from '@/navigation';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { loadQuery } from '@/sanity/loader/loadQuery';

type Props = {
  params: { locale: string };
};

// https://www.sanity.io/guides/nextjs-app-router-live-preview

export default async function OurProduct({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Home');

  const initial = await loadQuery<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
    }
  );

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

      {draftMode().isEnabled ? <PostsPreview initial={initial} /> : <Posts posts={initial.data} />}
    </main>
  );
}
