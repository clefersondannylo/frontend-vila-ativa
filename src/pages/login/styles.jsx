import { styled } from "styled-components";
import BgLogin from "../../assets/bg-login.png";

export const BodyImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${BgLogin});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const BodyForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  padding: 20%;
`;

export const Title = styled.p`
  font-size: 29px;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  margin-bottom: 40px;
`;
export const ForgotPassword = styled.p`
  text-align: right;
  padding: 15px 0;
  cursor: pointer;
`;


