import {bindActionCreators} from 'redux';
import actions from '../store/actions';
import {useDispatch} from 'react-redux';

export default function useActionCreator() {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
