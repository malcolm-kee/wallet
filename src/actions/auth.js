import {
  auth,
  googleAuthProvider,
  facebookAuthProvider
} from "./../config/firebase";
import { listenForExpenses } from "./expense";

import {
  ATTEMPTING_LOGIN,
  SIGNED_IN,
  SIGN_IN_FAILED,
  SIGNED_OUT,
  SIGN_OUT_FAILED,
  ATTEMPTING_LOGOUT,
  SET_REDIRECT_URL,
  CLEAR_REDIRECT_URL
} from "../constants";

const signedIn = user => {
  const { email, displayName, photoURL, uid } = user;

  return {
    type: SIGNED_IN,
    payload: {
      uid,
      email,
      displayName,
      photoURL
    }
  };
};

const signInFail = error_code => ({
  type: SIGN_IN_FAILED,
  payload: error_code
});

const signedOut = () => ({
  type: SIGNED_OUT
});

const signOutFail = () => ({
  type: SIGN_OUT_FAILED
});

export const signIn = () => dispatch => {
  dispatch({
    type: ATTEMPTING_LOGIN
  });
  auth.signInWithRedirect(googleAuthProvider);
};

export const signInWithFacebook = () => dispatch => {
  dispatch({
    type: ATTEMPTING_LOGIN
  });
  auth.signInWithRedirect(facebookAuthProvider);
};

export const signOut = () => dispatch => {
  dispatch({
    type: ATTEMPTING_LOGOUT
  });

  auth
    .signOut()
    .then(() => {
      dispatch(signedOut());
    })
    .catch(() => {
      dispatch(signOutFail());
    });
};

export const getAuthInitialState = () => dispatch => {
  const currentUser = auth.currentUser;

  if (currentUser) {
    dispatch(signedIn());
  } else {
    dispatch(signedOut());
  }

  auth
    .getRedirectResult()
    .then(result => {
      const user = result.user;
      if (user) {
        dispatch(signedIn(user));
        dispatch(listenForExpenses(user.uid));
      }
    })
    .catch(err => {
      dispatch(signInFail(err.code));
    });
};

export const setRedirectUrl = url => ({
  type: SET_REDIRECT_URL,
  payload: url
});

export const clearRedirectUrl = () => ({
  type: CLEAR_REDIRECT_URL
});
