import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home" className='me-5'>
                        <img
                            alt="logo"
                            src="https://i.ibb.co/SXTGCLJ/icon-logo.webp"
                            width="40"
                            height="34"
                            className="d-inline-block align-top me-3"
                        />
                        Press Start
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Incio</Nav.Link>
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#conocenos">Conócenos</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>

            </Navbar>
        </div>
    )
}

export default NavBar;