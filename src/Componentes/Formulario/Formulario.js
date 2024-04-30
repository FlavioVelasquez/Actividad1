import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addGoal } from '../../reducers/goalsSlice';
import { addTask } from '../../reducers/tasksSlice';
import { useRef } from 'react';

function Formulario() {
  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();
  const option = useSelector(state => state.option.value);
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    const newItem = {
      'name': inputRefName.current.value,
      'description': inputRefDescription.current.value,
      'dueDate': inputRefDueDate.current.value
    };

    if (option === 'goals') {
      dispatch(addGoal(newItem));
    } else if (option === 'tasks') {
      dispatch(addTask(newItem));
    }

    inputRefName.current.value = '';
    inputRefDescription.current.value = '';
    inputRefDueDate.current.value = '';
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="controlName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" ref={inputRefName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="controlDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={5} ref={inputRefDescription} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="controlDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" ref={inputRefDueDate} />
      </Form.Group>

      <Button id="btn-form" variant="success" type="submit" onClick={addItem}>
        {option === 'goals' ? 'Add Goal' : 'Add Task'}
      </Button>
    </Form>
  );
}

export default Formulario;