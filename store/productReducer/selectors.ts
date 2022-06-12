import {RootState} from '../index';
import {createSelector} from 'reselect';

class Selectors {
  private mainSelector = (state: RootState) => state.products;

  products = createSelector(this.mainSelector, state => state.products);

  product = createSelector(this.mainSelector, state => state.selectedProduct);
}

export default new Selectors();
