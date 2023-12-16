import axios from "axios";

import { BACKEND_URL_DEV, BACKEND_URL_PROD } from "../config";

export const api = axios.create({
  baseURL: BACKEND_URL_DEV,
});
