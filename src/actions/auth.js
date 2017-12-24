import { auth, googleAuthProvider } from "./../config/firebase";
import { listenForExpenses, stoplistenForExpenses } from "./expense";

import {
  ATTEMPTING_LOGIN,
  SIGNED_IN,
  SIGN_IN_FAILED,
  SIGNED_OUT,
  SIGN_OUT_FAILED,
  ATTEMPTING_LOGOUT
} from "../constants";

export const signIn = () => dispatch => {
  dispatch({
    type: ATTEMPTING_LOGIN
  });
  auth.signInWithPopup(googleAuthProvider).catch(() => {
    dispatch(signInFail());
  });
};

export const signOut = () => dispatch => {
  dispatch({
    type: ATTEMPTING_LOGOUT
  });

  auth.signOut().catch(() => {
    dispatch(signOutFail());
  });
};

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

const signInFail = () => ({
  type: SIGN_IN_FAILED
});

const signedOut = () => ({
  type: SIGNED_OUT
});

const signOutFail = () => ({
  type: SIGN_OUT_FAILED
});

export const listenToAuthChanges = () => dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch(signedIn(user));
      dispatch(listenForExpenses(user.uid));
    } else {
      dispatch(signedOut());
      dispatch(stoplistenForExpenses());
    }
  });
};
