import {RootState} from '../index';
import {createSelector} from 'reselect';

class Selectors {
  private mainSelector = (state: RootState) => state.general;

  navigation = createSelector(this.mainSelector, state => state.navigation);
}

export default new Selectors();
