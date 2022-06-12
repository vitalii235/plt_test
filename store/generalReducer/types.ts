import {Nav} from '../../api/types';

export enum GeneralType {
  setNav = 'general/SET_NAV',
}

export type InitialState = {
  navigation: Nav[];
};

export type SetNav = {
  type: GeneralType.setNav;
  payload: Nav[];
};


export type Actions = SetNav;
