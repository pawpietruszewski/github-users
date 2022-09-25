import useSWR from 'swr';
import axios from 'axios';

import { HookResponse, GithubReposAPIResponse } from 'src/types/hooks';

async function fetcher(url: string): Promise<GithubReposAPIResponse[] | null> {
  if (!url) {
    return null;
  }
  const response = await axios.get(url).then((resp) => resp.data);
  return response;
}

export function useRepos(url: string | null): HookResponse<GithubReposAPIResponse[]> {
  const { data, error } = useSWR(() => [url, 'fetch-repos'], fetcher, {
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

export default useRepos;
