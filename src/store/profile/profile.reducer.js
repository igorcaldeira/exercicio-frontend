import * as types from './profile.actionTypes';

const initialState = {
  getProfile: {
    loading: false,
    error: null,
    content: null,
  },
};

const getProfileStart = (state) =>
  Object.assign({}, state, {
    getProfile: {
      ...state.getProfile,
      loading: true,
    },
  });

const getProfileSuccess = (state, action) =>
  Object.assign({}, state, {
    getProfile: {
      ...state.getProfile,
      loading: false,
      error: null,
      content: action.content,
    },
  });

const getProfileError = (state, action) =>
  Object.assign({}, state, {
    getProfile: {
      ...state.getProfile,
      loading: false,
      error: action.error,
      content: null,
    },
  });

const usersReducer = (state = initialState, action = '') => {
  switch (action.type) {
    case types.GET_PROFILE_START:
      return getProfileStart(state);
    case types.GET_PROFILE_SUCCESS:
      return getProfileSuccess(state, action);
    case types.GET_PROFILE_ERROR:
      return getProfileError(state, action);
    default:
      return state;
  }
};

export default usersReducer;
