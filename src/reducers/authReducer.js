import {
  ANONYMOUS,
  ATTEMPTING_LOGIN,
  ATTEMPTING_LOGOUT,
  AWAITING_AUTH_RESPONSE,
  CLEAR_REDIRECT_URL,
  SET_REDIRECT_URL,
  SIGN_IN_FAILED,
  SIGN_OUT_FAILED,
  SIGNED_IN,
  SIGNED_OUT
} from "./../constants";

const DEFAULT_STATE = {
  status: AWAITING_AUTH_RESPONSE,
  uid: "",
  displayName: "",
  photoURL: "",
  email: "",
  redirectUrl: ""
};

const attemptAuth = state => ({
  ...state,
  status: AWAITING_AUTH_RESPONSE
});

const signedIn = (state, action) => {
  const { uid, displayName, photoURL, email } = action.payload;

  return {
    ...state,
    status: SIGNED_IN,
    uid,
    displayName,
    photoURL,
    email
  };
};

const signInFail = state => ({
  ...state,
  status: ANONYMOUS
});

const signedOut = () => ({
  ...DEFAULT_STATE,
  status: ANONYMOUS
});

const signOutFail = state => ({
  ...state,
  status: SIGNED_IN
});

const setRedirectUrl = (state, action) => ({
  ...state,
  redirectUrl: action.payload
});

const clearRedirectUrl = state => ({
  ...state,
  redirectUrl: ""
});

const authReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ATTEMPTING_LOGIN:
      return attemptAuth(state);

    case ATTEMPTING_LOGOUT:
      return attemptAuth(state);

    case SIGN_IN_FAILED:
      return signInFail(state);

    case SIGN_OUT_FAILED:
      return signOutFail(state);

    case SIGNED_IN:
      return signedIn(state, action);

    case SIGNED_OUT:
      return signedOut();

    case SET_REDIRECT_URL:
      return setRedirectUrl(state, action);

    case CLEAR_REDIRECT_URL:
      return clearRedirectUrl(state);

    default:
      return state;
  }
};

export default authReducer;
