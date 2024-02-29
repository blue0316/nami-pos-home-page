import { createClient } from '@sanity/client/stega';

import { apiVersion, dataset, projectId, useCdn } from './api';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  fetch: true,

  perspective: 'published',
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
});
