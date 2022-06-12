import {Actions, InitialState, ProductsType} from './types';

const initialState: InitialState = {
  products: [],
  selectedProduct: undefined,
};

export default function Reducer(
  state = initialState,
  action: Actions,
): InitialState {
  switch (action.type) {
    case ProductsType.setProducts: {
      return {...state, products: action.payload};
    }
    case ProductsType.setProduct: {
      return {...state, selectedProduct: action.payload};
    }
    case ProductsType.cleanProduct: {
      return {...state, selectedProduct: undefined};
    }
    default: {
      return state;
    }
  }
}
