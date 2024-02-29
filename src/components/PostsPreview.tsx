'use client';

import { QueryResponseInitial, useQuery } from '@sanity/react-loader';
import { SanityDocument } from 'next-sanity';
import Posts from './Posts';
import { POSTS_QUERY } from '@/sanity/lib/queries';

export default function PostsPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument[]>;
}) {
  const { data } = useQuery<SanityDocument[] | null>(POSTS_QUERY, {}, { initial });

  return data ? <Posts posts={data} /> : <div className="bg-red-100">No posts found</div>;
}
