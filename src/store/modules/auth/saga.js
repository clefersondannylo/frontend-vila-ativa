import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { api } from "../../../services/api";
import { authInFailure, authInSuccess, exitIn } from "./actions";

function* authIn({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield call(api.post, "/login", { email, password });

    try {
      const validate = yield call(api.post, "/validate", {
        token: response.data.token,
      });

      const user = validate.data;

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
      yield put(authInSuccess(response.data.token, user));
    } catch (error) {
      toast.error("Usuário e/ou senha incorretos");
      yield put(authInFailure(error));
    }
  } catch (error) {
    toast.error("Usuário e/ou senha incorretos");
    yield put(authInFailure(error));
  }
}

function* setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    const { exp: tokenExpiration } = jwtDecode(token);
    if (tokenExpiration <= Math.floor(Date.now() / 1000)) {
      return yield put(exitIn());
    }
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("@auth/AUTH_IN_REQUEST", authIn),
  takeLatest("persist/REHYDRATE", setToken),
]);
