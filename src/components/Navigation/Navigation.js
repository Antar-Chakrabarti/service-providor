import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Navigation = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">Weeding-Photographer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        {user?
                            <Nav.Link href="/login">Login</Nav.Link>
                            :
                        <Nav.Link eventKey={2} href="/signup">
                            Sign up
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;