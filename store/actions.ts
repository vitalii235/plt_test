import generalActions from './generalReducer/actions';
import productsActions from './productReducer/actions';

export default {
  ...generalActions,
  ...productsActions,
}
