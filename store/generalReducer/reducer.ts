import {Actions, GeneralType, InitialState} from './types';

const initialState: InitialState = {
  navigation: [],
};

export default function Reducer(
  state = initialState,
  action: Actions,
): InitialState {
  switch (action.type) {
    case GeneralType.setNav: {
      return {...state, navigation: action.payload};
    }
    default: {
      return state;
    }
  }
}
