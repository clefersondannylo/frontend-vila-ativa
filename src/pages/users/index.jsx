import { useEffect, useState } from "react";
import { Card, Columns, Form, Pagination, Table } from "react-bulma-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { HeaderComponent } from "../../components";
import { userInRequest } from "../../store/modules/users/actions";
import { Flex, Spacing } from "./styles";

export function Users() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(userInRequest(skip, limit, search));
    console.log(search);
  }, [search, dispatch, limit, skip]);

  // useEffect(() => {
  //   if (state.loading) {
  //     console.log(state.loading, "Carregando");
  //   }
  // }, [state]);
  // useEffect(() => {
  //   if (!state.loading) {
  //     console.log(state.loading, "Carregou");
  //   }
  // }, [state]);

  function alterPage(page) {
    return page;
  }

  return (
    <>
      <Columns>
        <Columns.Column>
          <HeaderComponent
            title={"Associados"}
            placeholder="Digite o nome que deseja buscar"
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
            route="/associados/formulario"
          />
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column>
          <Card>
            <Card.Content>
              <Table striped>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Administrador</th>
                    <th>Status</th>
                    <th>Emprego</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {state?.data?.users?.length && !state.loading
                    ? state.data.users.map((data, i) => (
                        <tr key={i}>
                          <th>{data.id}</th>
                          <th className="align-left">{data.name}</th>
                          <th className="align-left">
                            {data.email ? data.email : "__"}
                          </th>
                          <th>{data.phone ? data.phone : "__"}</th>
                          <th>
                            <Form.Field>
                              <Form.Control>
                                <Form.Checkbox checked={data.isAdmin}>
                                  Admin
                                </Form.Checkbox>
                              </Form.Control>
                            </Form.Field>
                          </th>
                          <th>
                            <Form.Field>
                              <Form.Control>
                                <Form.Checkbox checked={data.status}>
                                  Ativo
                                </Form.Checkbox>
                              </Form.Control>
                            </Form.Field>
                          </th>
                          <th>{data.work ? data.work : "__"}</th>
                          <th>
                            <Flex>
                              <i
                                onClick={() =>
                                  navigate("/associados/formulario", {
                                    state: { id: data.id },
                                  })
                                }
                                className="fa-solid fa-pen has-text-success icon-click"
                              />
                              <Spacing />
                              <i
                                onClick={() => console.log("deletar")}
                                className="fa-solid fa-trash has-text-danger icon-click"
                              />
                            </Flex>
                          </th>
                        </tr>
                      ))
                    : null}
                </tbody>
              </Table>
              <Pagination
                current={page}
                showFirstLast
                showPrevNext={false}
                align="right"
                total={state?.data?.totalPage}
                onChange={(page) => alterPage(page)}
              />
            </Card.Content>
          </Card>
        </Columns.Column>
      </Columns>
    </>
  );
}
