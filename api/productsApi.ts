import fetchApi from './fetchApi';
import {Product} from './types';
import {PRODUCTS} from './constants';

class ProductsApi {
  fetchApi: typeof fetchApi;
  constructor() {
    this.fetchApi = fetchApi;
  }

  async getProducts() {
    return await this.fetchApi.get<Product[]>(PRODUCTS);
  }

  async getProduct(id: string) {
    return await this.fetchApi.get<Product>(`${PRODUCTS}/${id}`);
  }
}

export default new ProductsApi();
