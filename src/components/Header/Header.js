import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import './Header.css';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand>
                    <NavLink className="logo" to="/">
                        <img src={logo}></img>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>
                            <NavLink className="nav-text" to="/">Home</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className="nav-text" to="/about-us">About Us</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className="nav-text" to="/courses">Courses</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className="nav-text" to="/teachers">Teachers</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className="nav-text" to="/contact-us">Contact Us</NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;