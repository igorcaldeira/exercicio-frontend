import headers from 'constants/headers';
import endpoints from 'constants/endpoints';
import * as actions from './profile.actions';

export const getProfile = () => (dispatch) => {
  dispatch(actions.getProfileStart());
  fetch(endpoints.profile, headers.get)
    .then(async (resp) => dispatch(actions.getProfileSuccess(await resp.json())))
    .catch((err) => dispatch(actions.getProfileError(err)));
};
