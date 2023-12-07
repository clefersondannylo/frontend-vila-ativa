import { produce } from "immer";

const INITIAL_STATE = {
  data: null,
};

export function user(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case "@auth/AUTH_IN_SUCCESS": {
        draft.data = payload.user;
        break;
      }
      case "@auth/AUTH_IN_EXIT": {
        draft.data = null;
        break;
      }
      default:
    }
  });
}
