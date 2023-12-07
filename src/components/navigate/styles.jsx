import { styled } from "styled-components";

export const Menu = styled.div`
  background-color: #223333;
  width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  @media (max-width: 720px) {
    display: none;
  }
`;
export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85px;
  padding: 20px;
  gap: 10px;
`;
export const Logo = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  background-color: #fff;
  border-radius: 50%;
`;
export const LogoName = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  text-align: center;
  line-height: normal;
`;
export const Option = styled.div`
  display: flex;
  width: 80%;
  height: 60px;
  border-radius: 10px;
  margin: 0 auto;
  justify-content: left;
  gap: 1rem;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
  padding: 15px;
  margin-bottom: 1rem;
  font-size: 16px;
  font-weight: 600;
  color: #223333;

  &:hover {
    background-color: #c0c0c0;
    color: #000;
  }
`;
export const Header = styled.div`
  background-color: #223333;
  position: fixed;
  top: 0;
  right: 0;
  left: 300px;
  height: 85px;
  display: flex;
  align-items: center;
  z-index: 10;
  justify-content: flex-end;
  padding-right: 20px;

  @media (max-width: 720px) {
    left: 0;
  }
`;
export const Content = styled.div`
  margin: 105px 20px 0 320px;
`;
