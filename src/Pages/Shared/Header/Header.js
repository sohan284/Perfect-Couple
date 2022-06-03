import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/logo-.jpg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user] = useAuthState(auth)
  const handleLogout =() =>{
    signOut(auth);
  }
    return (
        <div>
            <Navbar fixed='top' expand="lg" className='bg-gray'>
  <Container>
    <div>

        <img className='logo' width={90} height={50} src={logo} alt="" />
    <Navbar.Brand as={Link} to="/home"><span className='title'>Perfect Couple</span></Navbar.Brand>
    </div>
    <div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="home">Home</Nav.Link>
        <Nav.Link as={Link} to="checkout">Checkout</Nav.Link>
        <Nav.Link as={Link} to="blog">Blog</Nav.Link>
        <Nav.Link as={Link} to="about">About</Nav.Link>
      {
        user ?
        <button className='logoutbtn' onClick={handleLogout}>Log out</button>
        :
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      </Nav>
    </Navbar.Collapse>
    </div>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;