import { NavLink, Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Link className="navbar-brand" to="/">Application name</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                    </li>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}