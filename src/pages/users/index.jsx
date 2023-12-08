import { useEffect, useState } from "react";
import { Card, Columns, Form, Pagination, Table } from "react-bulma-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { HeaderComponent, ModalDelete } from "../../components";
import { userInRequest } from "../../store/modules/users/actions";
import { removeUser, updateUser } from "./requests";
import { Flex, Spacing } from "./styles";

export function Users() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [id, setId] = useState(null);
  const [remove, setRemove] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);

  useEffect(() => {
    console.log(state);
    dispatch(userInRequest(skip, limit, search));
    // conferir a questão se uso o limite ou o take
  }, [search, dispatch, limit, skip]);

  function alterPage(page) {
    return page;
  }

  function clickRemove(id) {
    setRemove(true);
    setId(id);
  }

  function alterStatus(id, value) {
    const data = { status: value };
    updateUser(id, data, navigate);
  }
  function alterAdmin(id, value) {
    const data = { isAdmin: value };
    updateUser(id, data, navigate);
  }

  function deleteUser() {
    removeUser(id, setRemove, dispatch, skip, search);
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
                                <Form.Checkbox
                                  checked={data.isAdmin}
                                  onClick={(ev) =>
                                    alterAdmin(data.id, ev.target.checked)
                                  }
                                >
                                  Admin
                                </Form.Checkbox>
                              </Form.Control>
                            </Form.Field>
                          </th>
                          <th>
                            <Form.Field>
                              <Form.Control>
                                <Form.Checkbox
                                  checked={data.status}
                                  onClick={(ev) =>
                                    alterStatus(data.id, ev.target.checked)
                                  }
                                >
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
                                onClick={() => clickRemove(data.id)}
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
      {remove && (
        <ModalDelete
          open={remove}
          close={() => setRemove(false)}
          title="Remover Usuário"
          text={"Tem certeza que deseja remover esse usuário"}
          confirm={deleteUser}
        />
      )}
    </>
  );
}
