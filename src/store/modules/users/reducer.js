import { produce } from "immer";

const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false,
};

export function users(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case "@users/USERS_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@users/USERS_IN_SUCCESS": {
        draft.error = false;
        draft.data = payload.users;
        draft.loading = false;
        break;
      }
      case "@users/USERS_IN_ERROR": {
        draft.error = true;
        draft.loading = false;
        break;
      }
    }
  });
}
