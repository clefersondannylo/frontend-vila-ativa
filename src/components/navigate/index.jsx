import { useEffect } from "react";
import { Dropdown, Icon } from "react-bulma-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogoImg from "../../assets/logo.png";
import { exitIn } from "../../store/modules/auth/actions";
import { Content, Header, Logo, LogoName, Menu, Option, WrapperLogo } from "./styles";

// eslint-disable-next-line react/prop-types
export function NavigateComponent({ children }) {
  const state = useSelector((state) => state?.user?.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(state, "state");
  }, []);

  function handleDropdown(value) {
    if (value === "logout") {
      dispatch(exitIn());
    }
    if (value === "change-data") {
      console.log("clicou");
      navigate("/associados/formulario", {
        state: {
          id: state.id,
        },
      });
    }
  }
  return (
    <>
      <Menu>
        <WrapperLogo>
          <Logo src={LogoImg} />
          <LogoName>Sistema Vila Ativa</LogoName>
        </WrapperLogo>
        <Option onClick={() => navigate("/")}>
          <i className="fa-solid fa-home " />
          Home
        </Option>
        <Option onClick={() => navigate("/associados")}>
          <i className="fa-solid fa-users " />
          Associados
        </Option>
        <Option onClick={() => navigate("/relatorios")}>
          <i className="fa-solid fa-chart-line " />
          Relatórios
        </Option>
        <Option onClick={() => navigate("/situacao-financeira")}>
          <i className="fa-solid fa-wallet " />
          Situação Financeira
        </Option>
        <Option onClick={() => navigate("/declaracao-associado")}>
          <i className="fa-solid fa-file-contract " />
          Declaração de Associado
        </Option>
        <Option onClick={() => navigate("/caixa")}>
          <i className="fa-solid fa-money-bill-trend-up " />
          Caixa
        </Option>
      </Menu>
      <Header>
        <Dropdown
          label="Minha conta"
          closeOnSelect={true}
          onChange={(value) => handleDropdown(value)}
          hoverable={true}
          icon={
            <Icon>
              <i className="fa-solid fa-angle-down" />
            </Icon>
          }
        >
          <Dropdown.Item style={{ cursor: "pointer" }} value="change-data">
            Alterar Dados
          </Dropdown.Item>
          <Dropdown.Item style={{ cursor: "pointer" }} value="logout">
            Sair
          </Dropdown.Item>
        </Dropdown>
      </Header>
      <Content>{children}</Content>
    </>
  );
}
