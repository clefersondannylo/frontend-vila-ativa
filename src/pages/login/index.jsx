import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Button, Columns } from "react-bulma-components";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { Input } from "../../components";
import { authInRequest } from "../../store/modules/auth/actions";
import {
  BodyForm,
  BodyImage,
  Content,
  ForgotPassword,
  SubTitle,
  Title,
} from "./styles";

export function Login() {
  const schema = yup.object({
    email: yup
      .string()
      .required("Por favor, preencha esse campo")
      .email("Digite um e-mail válido"),
    password: yup
      .string()
      .required("Por favor, preencha esse campo")
      .min(6, "Mínimo de 6 caracteres"),
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const store = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (store?.signed) navigate("/");
    console.log(store);
  }, [store]);
  const login = (data) => {
    const { email, password } = data;
    dispatch(authInRequest(email, password));
  };
  return (
    <>
      <Columns>
        <Columns.Column>
          <BodyImage />
        </Columns.Column>
        <Columns.Column>
          <BodyForm>
            <Content>
              <form onSubmit={handleSubmit(login)}>
                <Title>Seja Bem vindo(a)</Title>
                <SubTitle>Faça o login para continuar</SubTitle>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Email"
                      placeholder="Digite seu email"
                      icon="fa-solid fa-envelope"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                      color={errors.email && "danger"}
                      error={errors.email && errors.email.message}
                    />
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <Input
                      label="Senha"
                      placeholder="Digite a senha"
                      icon="fa-solid fa-lock"
                      typeError="danger"
                      ref={ref}
                      onChange={onChange}
                      value={value}
                      color={errors.password && "danger"}
                      error={errors.password && errors.password.message}
                      type="password"
                    />
                  )}
                />
                <ForgotPassword>Esqueceu a senha ?</ForgotPassword>
                <Button
                  color="link"
                  type="submit"
                  className={store?.loading && "is-loading"}
                >
                  Entrar
                </Button>
              </form>
            </Content>
          </BodyForm>
        </Columns.Column>
      </Columns>
    </>
  );
}
