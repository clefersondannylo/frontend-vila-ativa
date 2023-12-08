import { Button, Modal } from "react-bulma-components";

// eslint-disable-next-line react/prop-types
export function ModalDelete({ open, close, title, text, confirm }) {
  return (
    <Modal show={open} onClose={close}>
      <Modal.Card>
        <Modal.Card.Header>
          <Modal.Card.Title>{title}</Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body>
          <p>{text}</p>
        </Modal.Card.Body>
        <Modal.Card.Footer justifyContent="flex-end">
          <div style={{ display: "flex" }}>
            <Button color={"link"} onClick={close}>
              Cancelar
            </Button>
            <Button color={"danger"} onClick={() => confirm()}>
              Remover
            </Button>
          </div>
        </Modal.Card.Footer>
      </Modal.Card>
    </Modal>
  );
}
