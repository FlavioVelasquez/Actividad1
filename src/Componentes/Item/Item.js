import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='fw-bold'>
          Name
        </Card.Text>
        <Card.Text>Realizar Proyecto</Card.Text>
        <Card.Text className='fw-bold'> 
          Description
        </Card.Text>
        <Card.Text>
          Elaborar Proyecto del Curso.
        </Card.Text>
        <Button variant="dark">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;