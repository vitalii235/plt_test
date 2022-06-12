import fetchApi from './fetchApi';
import {Nav} from './types';

class GeneralApi {
  fetchApi: typeof fetchApi;
  constructor() {
    this.fetchApi = fetchApi;
  }

  getNavigation() {
    return this.fetchApi.get<Nav[]>('nav');
  }
}

export default new GeneralApi();
