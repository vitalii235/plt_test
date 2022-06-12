import {GeneralType, SetNav} from './types';
import {Nav} from '../../api/types';
import generalApi from '../../api/generalApi';
import { Dispatch } from "redux";

class GeneralActions {
  updateNav = (payload: Nav[]): SetNav => {
    return {
      type: GeneralType.setNav,
      payload,
    };
  };

  getNavigation = () => async (dispatch: Dispatch) => {
    const res = await generalApi.getNavigation();
    dispatch(this.updateNav(res || []));
  };
}

export default new GeneralActions();
