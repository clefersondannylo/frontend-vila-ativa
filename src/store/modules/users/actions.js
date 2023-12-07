export function userInRequest(skip, limit, search) {
  return {
    type: "@users/USERS_IN_REQUEST",
    payload: { skip, limit, search },
  };
}
export function userInSuccess(users) {
  return {
    type: "@users/USERS_IN_SUCCESS",
    payload: { users },
  };
}
export function userInError() {
  return {
    type: "@users/USERS_IN_ERROR",
  };
}
