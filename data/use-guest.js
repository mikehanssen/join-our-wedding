import useSWR from 'swr';
import { fetchGuest } from '../libs/api-guest';

export default function useGuest(rsvpCode) {
  const { data, error } = useSWR(rsvpCode, fetchGuest);

  return {
    guest: data,
    isLoading: !error && !data,
    isError: error,
  };
}
