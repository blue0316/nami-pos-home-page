import * as queryStore from '@sanity/react-loader';
import { client } from '@/sanity/lib/client';
import { token } from '@/sanity/lib/token';

const serverClient = client.withConfig({
  token,
});

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient);

export const { loadQuery } = queryStore;
