import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import '../styles/telugu-font.css';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  return (
    <BootstrapNavbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={handleToggle}
    >
      <Container className="d-flex align-items-center">
        <BootstrapNavbar.Brand as={NavLink} to="/" className="d-flex align-items-center flex-column" onClick={handleClose}>
          <div style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: "'Noto Serif Telugu', serif", color: '#ffd700', lineHeight: '1.1' }}>
            పొట్ట పల్గ
          </div>
          <div style={{ fontSize: '0.85rem', fontStyle: 'italic', fontFamily: "'Noto Sans Telugu', sans-serif", color: '#ffa500' }}>
            మెక్కి పొండి రా బాబు
          </div>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onClick={handleClose}>
            {user && user.role === 'staff' ? (
              <>
                <Nav.Link as={NavLink} to="/reservationmanagement">
                  Reservation Management
                </Nav.Link>
                <Nav.Link as={NavLink} to="/tables">
                  Table Management
                </Nav.Link>
                <Nav.Link as={NavLink} to="/guestmanagement">
                  Guest Management
                </Nav.Link>
                <Nav.Link as={NavLink} to="/increasecontrol">
                  Increase Control
                </Nav.Link>
                <Nav.Link as={NavLink} to="/stats">
                  Reports
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/" end>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/menu">
                  Menu
                </Nav.Link>
                <Nav.Link as={NavLink} to="/reservation">
                  Reservation
                </Nav.Link>
                <Nav.Link as={NavLink} to="/orderonline">
                  Order Online
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact">
                  Contact
                </Nav.Link>
                <Nav.Link as={NavLink} to="/stats">
                  Stats
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav onClick={handleClose}>
            {user ? (
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
            ) : (
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
