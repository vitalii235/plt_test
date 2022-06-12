import {Product} from '../../api/types';
import productsApi from '../../api/productsApi';
import {Dispatch} from 'redux';
import {CleanProduct, ProductsType, SetProduct, SetProducts} from './types';

class ProductActions {
  private updateProducts = (payload: Product[]): SetProducts => ({
    type: ProductsType.setProducts,
    payload,
  });

  private updateProduct = (payload?: Product): SetProduct => ({
    type: ProductsType.setProduct,
    payload,
  });

  getProducts = () => async (dispatch: Dispatch) => {
    const res = await productsApi.getProducts();
    dispatch(this.updateProducts(res || []));
  };

  getProduct = (id: string) => async (dispatch: Dispatch) => {
    const res = await productsApi.getProduct(id);
    dispatch(this.updateProduct(res));
  };

  cleanProduct = (): CleanProduct => ({
    type: ProductsType.cleanProduct,
  });
}

export default new ProductActions();
