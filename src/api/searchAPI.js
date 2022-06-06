import { fetcher } from './fetcher';

export const searchAPI = {
  search: (URL) => {
    const response = fetcher(URL, 'GET');
    return response;
  },
};
