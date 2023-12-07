import { toast } from "react-hot-toast";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { api } from "../../../services/api";
import { userInError, userInSuccess } from "./actions";

function* getUsers({ payload }) {
  const { skip, limit, search } = payload;

  try {
    const response = yield call(
      api.get,
      `/user?skip=${skip}&limit=${limit}&search=${search}`
    );
    const users = response.data;
    yield put(userInSuccess(users));
  } catch (error) {
    yield put(userInError());
    toast.error(
      "Não foi possível carregar os usuários, tente novamente mais tarde"
    );
  }
}

export default all([takeLatest("@users/USERS_IN_REQUEST", getUsers)]);
