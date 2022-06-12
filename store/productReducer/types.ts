import {Product} from '../../api/types';

export enum ProductsType {
  setProducts = 'product/SET_PRODUCTS',
  setProduct = 'product/SET_PRODUCT',
  cleanProduct = 'product/CLEAN_PRODUCT',
}

export type InitialState = {
  products: Product[];
  selectedProduct?: Product;
};

export type SetProducts = {
  type: ProductsType.setProducts;
  payload: Product[];
};

export type SetProduct = {
  type: ProductsType.setProduct;
  payload?: Product;
};

export type CleanProduct = {
  type: ProductsType.cleanProduct;
};

export type Actions = SetProducts | SetProduct | CleanProduct;
