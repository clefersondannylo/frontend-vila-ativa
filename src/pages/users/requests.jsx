import toast from "react-hot-toast";

import { api } from "../../services/api.js";

export async function createUser(data, navigate) {
  toast.loading("Salvando o usuário...");
  try {
    await api.post("/user", data);
    toast.dismiss();
    toast.success("Usuário Salvo com sucesso");
    navigate("/associados");
  } catch (error) {
    toast.dismiss();
    toast.error(
      "Não foi possível cadastrar o usuário. Tente novamente mais tarde."
    );
  }
}

export async function getById(id) {
  toast.loading("Carregando informações do usuário");

  try {
    const response = await api.get(`/user/${id}`);
    toast.dismiss();
    return response?.data;
  } catch (error) {
    toast.dismiss();
    toast.error("Não foi possível realizar a operação");
  }
}
