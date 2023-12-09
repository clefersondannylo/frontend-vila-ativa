import toast from "react-hot-toast";

import { api } from "../../services/api.js";
import { userInRequest } from "../../store/modules/users/actions.js";

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

export async function updateUser(id, data, navigate) {
  toast.loading("Salvando usuário");
  try {
    await api.put(`/user/${id}`, data);
    toast.dismiss();
    toast.success("Usuário editado com sucesso");
    navigate("/associados");
  } catch (error) {
    toast.dismiss();
    toast.error("Não foi possível editar o usuário");
    navigate("/associados");
  }
}

export async function removeUser(id, setRemove, dispatch, skip, limit, search) {
  toast.loading("Removendo usuário");

  try {
    await api.delete(`user/${id}`);
    toast.dismiss();
    setRemove(false);
    toast.success("Usuário removido com sucesso");
    dispatch(userInRequest(skip, limit, search));
    const response = await api.get("/user");
    // troquei o take por limit
    return response;
  } catch (error) {
    toast.dismiss();
    toast.error("Não foi possível remover o usuário");
  }
}

export async function alterStatusAndAdmin(
  id,
  data,
  dispatch,
  skip,
  take,
  search
) {
  toast.loading("Salvando usuário");
  try {
    await api.put(`/user/${id}`, data);
    toast.dismiss();
    toast.success("Usuário editado com sucesso");
    dispatch(userInRequest(skip, take, search));
  } catch (error) {
    toast.dismiss();
    toast.error("Não foi possível editar o usuário");
  }
}
