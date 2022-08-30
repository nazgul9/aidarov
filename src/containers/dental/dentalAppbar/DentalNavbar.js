import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Appbar.scss'

function DentalNavbar(props) {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">О Клинике</Nav.Link>
                            <Nav.Link href="/Chec_Up">Чекап</Nav.Link>
                            <Nav.Link href="/Brekety">Брекеты</Nav.Link> <Nav.Link href="/whiting">Отбеливание</Nav.Link>
                            <Nav.Link href="/Vinery">Винеры</Nav.Link>
                            <Nav.Link href="/Iplant">Имплантация</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default DentalNavbar;