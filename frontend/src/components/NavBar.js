import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button, Spinner } from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider';
import NavbarDropdownButton from './NavBarDropdownButton';

const NavBar = () => {
    const { user, loading, handleLoginWithGoogle, handleLogout } = useContext(AuthContext);

    return (
        <Navbar bg="light" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="/">Chatroom App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        {loading ? (
                            <Spinner animation="border" role="status" size="sm">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : user ? (
                            <NavbarDropdownButton user={user} handleLogout={handleLogout} />
                        ) : (
                            <Button variant="primary" onClick={handleLoginWithGoogle}>
                                Login with Google
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;