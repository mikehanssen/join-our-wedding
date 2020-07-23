import useSWR from 'swr';
import guestFetcher from '../libs/api-guest';

export default function useGuest(rsvpCode) {
  const { data, error } = useSWR(rsvpCode, guestFetcher);

  return {
    guest: data,
    isLoading: !error && !data,
    isError: error,
  };
}
