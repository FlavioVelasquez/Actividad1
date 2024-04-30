import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Menu.scss'
import { useDispatch } from 'react-redux';
import { changeOption } from '../../reducers/optionSlice';
import { useSelector } from 'react-redux';

function Menu() {
  const dispatch = useDispatch();
  const option = useSelector(state => state.option.value);
  
  const changeOptionFunc = (option)=> {
    dispatch(changeOption(option));

  }
  return (
    <Navbar expand="lg" className="bnavbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav>
            <Nav.Link href="#home" onClick={() => changeOptionFunc('tasks')} >Tasks</Nav.Link>
            <Nav.Link href="#link" onClick={() => changeOptionFunc('goals')}>Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;