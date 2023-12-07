import axios from "axios";

export const api = axios.create({
  baseURL: "https://sistema-vila-ativa.onrender.com/v1",
});
