import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navigation = () => {
    const [user, loading] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Weeding-Photographer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/aboutme">About me</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        {user ?
                            <Nav.Link onClick={handleLogOut} as={Link} to="/login">
                                log out
                            </Nav.Link>
                            :
                            <Nav.Link as={Link} to ="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;