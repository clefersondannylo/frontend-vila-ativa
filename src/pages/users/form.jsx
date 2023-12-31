import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Button, Card, Columns } from "react-bulma-components";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";

import { Input } from "../../components";
import { createUser, getById, updateUser } from "./requests";
import { Flex, Spacing } from "./styles";

export function FormUser() {
  const isAdmin = useSelector((state) => state?.user?.data?.isAdmin);
  const { state } = useLocation();
  useEffect(() => {
    console.log(isAdmin);
  }, [isAdmin]);

  const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Digite um e-mail válido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Senha precisa ter no mínimo 6 caracteres"),
  });
  const schemaUpdate = yup.object({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .required("Campo obrigatório")
      .email("Digite um e-mail válido"),
    password: yup.string().min(6, "Senha precisa ter no mínimo 6 caracteres"),
  });

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(state?.id ? schemaUpdate : schema),
  });
  function save(data) {
    if (!state?.id) {
      createUser(data, navigate);
    } else {
      updateUser(state.id, data, navigate);
    }
  }
  useEffect(() => {
    if (state?.id) {
      // eslint-disable-next-line no-inner-declarations
      async function getUser() {
        const response = await getById(state.id);
        console.log(response);
        setValue("address", response.address);
        setValue("name", response.name);
        setValue("email", response.email);
        setValue("zip", response.cep);
        setValue("number", response.number);
        setValue("city", response.city);
        setValue("state", response.state);
        setValue("work", response.work);
        setValue("phone", response.phone);
        setValue("cpf", response.cpf);
        setValue("rg", response.rg);
        setValue("birthday", response.birthday);
        setValue("spouse", response.spouse);
        setValue("terrain", response.terrain);
        setValue("street", response.street);
        setValue("situation", response.situation);
        // setValue("cpf", response.cpf);
      }
      getUser();
    }
  }, []);

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit(save)}>
          <Card.Header>
            <Card.Header.Title>
              {state?.id ? "Editar Usuário" : "Adicionar Usuário"}
            </Card.Header.Title>
          </Card.Header>
          <Card.Content>
            <Columns>
              <Columns.Column>
                <Controller
                  name="name"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Nome"
                      placeholder="Digite o nome"
                      icon="fa-solid fa-user"
                      typeError="danger"
                      color={errors.name && "danger"}
                      error={errors.name && errors.name.message}
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="E-mail"
                      placeholder="Digite o e-mail"
                      icon="fa-solid fa-envelope"
                      typeError="danger"
                      color={errors.email && "danger"}
                      error={errors.email && errors.email.message}
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Senha"
                      placeholder="Digite a senha"
                      icon="fa-solid fa-lock"
                      typeError="danger"
                      color={errors.password && "danger"}
                      error={errors.password && errors.password.message}
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column>
                <Controller
                  name="rg"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="RG"
                      placeholder="Digite o RG"
                      icon="fa-solid fa-id-badge"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="cpf"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="CPF"
                      placeholder="Digite o número do CPF"
                      icon="fa-solid fa-id-card"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="birthday"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Data de Nascimento"
                      placeholder="Digite a data de nascimento"
                      icon="fa-solid fa-cake-candles"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Telefone"
                      placeholder="Digite o número de telefone"
                      icon="fa-solid fa-phone"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="spouse"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Cônjuge"
                      placeholder="Digite o nome do Cônjuge"
                      icon="fa-solid fa-people-roof"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
            </Columns>
            <Columns>
              <Columns.Column>
                <Controller
                  name="work"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Emprego"
                      placeholder="Digite o emprego"
                      icon="fa-solid fa-user-doctor"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="address"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Endereço de onde reside"
                      placeholder="Digite o endereço"
                      icon="fa-solid fa-road"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="terrain"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Tipo de lote"
                      placeholder="Digite o status do lote"
                      icon="fa-solid fa-1"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="street"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Nome da rua"
                      placeholder="Digite a rua"
                      icon="fa-solid fa-1"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                      siz
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="number"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="lote/quadra"
                      placeholder="Digite o lote e a quadra"
                      icon="fa-solid fa-1"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                      siz
                    />
                  )}
                />
              </Columns.Column>
            </Columns>
            <Columns>
              {/* <Columns.Column>
                <Controller
                  name="city"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Cidade"
                      placeholder="Digite uma senha"
                      icon="fa-solid fa-map-pin"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column> */}
              <Columns.Column>
                <Controller
                  name="city"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Cidade"
                      placeholder="Digite uma senha"
                      icon="fa-solid fa-map-pin"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="state"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Estado"
                      placeholder="Digite seu número de CPF"
                      icon="fa-solid fa-map"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="zip"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="CEP"
                      placeholder="Digite o CEP"
                      icon="fa-solid fa-location-crosshairs"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
              <Columns.Column>
                <Controller
                  name="situation"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Situação"
                      placeholder="Digite a situação"
                      icon="fa-solid fa-map-pin"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </Columns.Column>
            </Columns>
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Item
              style={{ padding: "1.5rem" }}
              justifyContent="flex-end"
            >
              <Flex>
                <Button
                  onClick={() => {
                    navigate("/associados");
                  }}
                  color="danger"
                  type="button"
                >
                  Voltar
                </Button>
                <Spacing />
                <Button color="success" type="submit">
                  Salvar
                </Button>
              </Flex>
            </Card.Footer.Item>
          </Card.Footer>
        </form>
      </Card>
    </>
  );
}
