import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/indexCartWidget';
// import CartWidget from '../CartWidget/indexCartWidget';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Incio</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing"><CartWidget /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;