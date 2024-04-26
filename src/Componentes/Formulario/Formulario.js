import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss'

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="controlName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder=""  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="controlDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Button variant="success" type="submit">
        Add Goal
      </Button>
    </Form>
  );
}

export default Formulario;