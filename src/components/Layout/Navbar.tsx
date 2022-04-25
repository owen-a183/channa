import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand href="/">
          <Row>
            <Col lg={3}>
              <img
                src="https://pbs.twimg.com/profile_images/248185979/logo_Vidyasena.bmp"
                alt="logo vidyasena"
                className="header-logo"
              />
            </Col>
            <Col className="d-none d-lg-block d-xl-block d-xxl-block" md="auto">
              <Row className="header-logo-text">Vidyāsenā </Row>
              <Row className="header-logo-text">Vihāra Vidyāloka</Row>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggle-menu" aria-controls="navigationBar">
          <FontAwesomeIcon icon={faBars} className="fa-xl menu-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navigationBar">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className="navbar-link">Beranda</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tentang-kami">
              <Nav.Link className="navbar-link">Tentang Kami</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/acara">
              <Nav.Link className="navbar-link">Acara</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/artikel">
              <Nav.Link className="navbar-link">Artikel</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/insight">
              <Nav.Link className="navbar-link">Insight</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/kontak">
              <Nav.Link className="navbar-link">Kontak</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
