import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss'
import { removeGoal } from '../../reducers/goalsSlice';
import { removeTask } from '../../reducers/tasksSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function Item(props) {
  const option = useSelector(state => state.option.value);
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (option === 'goals') {
      dispatch(removeGoal(props.id));
    } else if (option === 'tasks') {
      dispatch(removeTask(props.id));
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='fw-bold'>
          {props.name}
        </Card.Text>
        <Card.Text className='fw-bold'> 
          Description
        </Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text className='fw-bold'> 
          Due Date
        </Card.Text>
        <Card.Text>
          {props.dueDate}
        </Card.Text>
        <Button variant="dark">Editar</Button>
        <Button variant="dark" onClick={handleDelete}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;