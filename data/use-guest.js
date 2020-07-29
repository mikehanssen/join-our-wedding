import useSWR from 'swr';
import { fetchGuest } from '../libs/api-guest';

export default function useGuest(rsvpCode) {
  const { data, mutate, error } = useSWR(rsvpCode, fetchGuest);

  return {
    guest: data,
    isLoading: !error && !data && rsvpCode !== '',
    isError: error,
    mutate,
  };
}
