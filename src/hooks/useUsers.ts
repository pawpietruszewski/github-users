import useSWR from 'swr';
import axios from 'axios';

import { HookResponse, GithubUsersAPIResponse } from 'src/types/hooks';

const URL = 'https://api.github.com/search/users';

async function fetcher(q: string): Promise<GithubUsersAPIResponse | null> {
  if (!q) {
    return null;
  }
  const response = await axios.get(URL, { params: { q, per_page: 5 } }).then((resp) => resp.data);
  return response;
}

export function useUsers(q?: string): HookResponse<GithubUsersAPIResponse> {
  const { data, error } = useSWR(() => [q, 'fetch-users'], fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
  });

  return {
    data,
    error,
    isError: !!error,
    isLoading: !error && typeof data === 'undefined',
  };
}

export default useUsers;
