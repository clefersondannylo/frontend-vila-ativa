import { produce } from "immer";

const INITIAL_STATE = {
  signer: false,
  token: null,
  loading: false,
  error: false,
};

export function auth(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case "@auth/AUTH_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/AUTH_IN_SUCCESS": {
        draft.signed = true;
        draft.token = payload.token;
        draft.error = false;
        draft.loading = false;
        break;
      }
      case "@auth/AUTH_IN_FAILURE": {
        draft.loading = false;
        draft.error = true;
        break;
      }
      case "@auth/AUTH_IN_EXIT": {
        draft.loading = false;
        draft.token = null;
        draft.signed = false;
        draft.error = false;
        break;
      }
      default:
    }
  });
}
