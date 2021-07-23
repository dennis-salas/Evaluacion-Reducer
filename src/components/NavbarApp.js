import React from 'react'
import { Navbar, Container, Button, Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarApp = () => {
    return (
        <div>
            <Navbar className="bg-dark">
                <Container>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Link className="nav-link" to="/">NavBar</Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Link className="nav-link" to="/Register">
                            <Button>Registrar</Button>
                        </Link>
                        <Link className="nav-link" to="/Login">
                            <Button>Inicio Sesión</Button>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarApp
