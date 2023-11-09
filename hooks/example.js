/**
 * EXAMPLE HOOK WITH OUTSIDE DATA, LOADING, AND ERROR STATES
 * import useSWR from 'swr'
 * export default function useData(
 *      endpoint,
 *          options = {
 *          revalidateIfStale: false,
 *          revalidateOnFocus: false,
 *          revalidateOnReconnect: false,
 *      }
 * ) {
 *      const { data, mutate, error } = useSWR(endpoint, fetcherFunction, options)
 *
 *      return {
 *          data,
 *          mutate,
 *          isLoading: !error && !data,
 *          isError: error,
 *      }
 * }
 */
