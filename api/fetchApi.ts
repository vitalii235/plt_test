import {BASE_URL} from './constants';

type Headers = Record<string, string>;

class FetchApi {
  constructor(readonly baseUrl: string) {}
  async get<T>(url: string, headers?: Headers): Promise<T | undefined> {
    try {
      const data = await fetch(`${this.baseUrl}/${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });
      return await data.json();
    } catch (e) {
      console.error(e);
    }
  }
  async post<T>(
    url: string,
    body: Record<string, string>,
    headers?: Headers,
  ): Promise<T | undefined> {
    try {
      const data = await fetch(`${this.baseUrl}/${url}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      });
      return await data.json();
    } catch (e) {
      console.error(e);
    }
  }
}

export default new FetchApi(BASE_URL);
