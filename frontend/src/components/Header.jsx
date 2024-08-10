import React from 'react'
import {Navbar, Container, Nav } from 'react-bootstrap';
import { FaShopify, FaUser} from 'react-icons/fa';
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" collapseOnSelect expand="md"  >
      <Container>
        <Navbar.Brand href="/" >
        <img src={logo} alt="proshop" /> 
        ProShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart"><FaShopify />Cart</Nav.Link>
            <Nav.Link href="/login"><FaUser/>Login</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
 
}

export default Header
