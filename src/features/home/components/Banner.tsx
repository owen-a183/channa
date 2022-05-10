import { Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import HomeBanner from '@/assets/home-banner.jpg';

export const Banner = () => {
  return (
    <section
      className="banner-area d-flex text-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${HomeBanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 0px',
      }}
    >
      <Container className="align-self-center">
        <Row>
          <Col md={12}>
            <div className="banner-content">
              <h5 className="banner-content-h5">VIHĀRA VIDYĀLOKA</h5>
              <h1 className="banner-content-h1">VIDYĀSENĀ</h1>
              <p className="banner-content-description px-md-14">
                Organisasi sosial pemuda Buddha yang bermarkas di Vihara Vidyaloka Yogyakarta.
                Didirikan pada tanggal 1 Februari 1987, telah menjadi salah satu organisasi pemuda
                Buddhis utama di bawah bimbingan Sangha Theravada Indonesia (STI).
              </p>
              <LinkContainer to="/tentang-kami">
                <Button className="btn-banner">Baca Selengkapnya</Button>
              </LinkContainer>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
