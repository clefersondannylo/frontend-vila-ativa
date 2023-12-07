export function authInRequest(email, password) {
  return {
    type: "@auth/AUTH_IN_REQUEST",
    payload: {
      email,
      password,
    },
  };
}

export function authInSuccess(token, user) {
  return {
    type: "@auth/AUTH_IN_SUCCESS",
    payload: {
      token,
      user,
    },
  };
}

export function authInFailure() {
  return {
    type: "@auth/AUTH_IN_FAILURE",
  };
}

export function exitIn() {
  return {
    type: "@auth/AUTH_IN_EXIT",
  };
}
