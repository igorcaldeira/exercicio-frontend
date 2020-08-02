import * as actionTypes from './profile.actionTypes';

export const getProfileStart = () => ({
  type: actionTypes.GET_PROFILE_START,
});

export const getProfileSuccess = (content) => ({
  type: actionTypes.GET_PROFILE_SUCCESS,
  content,
});

export const getProfileError = (error) => ({
  type: actionTypes.GET_PROFILE_ERROR,
  error,
});
