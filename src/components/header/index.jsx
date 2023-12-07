import { Card, Columns } from "react-bulma-components";
import { useNavigate } from "react-router-dom";

import Input from "../input";
import { Flex, SessionInput, Title } from "./styles";

export function HeaderComponent({
  title,
  placeholder,
  value,
  onChange,
  route,
}) {
  const navigate = useNavigate();
  return (
    <Columns>
      <Columns.Column>
        <Card>
          <Card.Content>
            <Flex>
              <Title>{title}</Title>
              <SessionInput>
                <Input
                  placeholder={placeholder}
                  icon="fa-solid fa-magnifying-glass"
                  value={value}
                  onChange={onChange}
                  className="search-input"
                />
                <button
                  className="button is-link btn-add"
                  onClick={() => navigate(route)}
                >
                  <span className="icon is-small">
                    <i className="fas fa-plus" />
                  </span>
                  Adicionar
                </button>
              </SessionInput>
            </Flex>
          </Card.Content>
        </Card>
      </Columns.Column>
    </Columns>
  );
}
