import { combineReducers } from 'redux';
import profile from './profile/profile.reducer';

const reducer = combineReducers({
  profile,
});

export default reducer;
