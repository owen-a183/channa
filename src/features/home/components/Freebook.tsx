import { Col, Container, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { FreebookCard, SectionTitle } from '@/components/Elements';

import { useFreebooks } from '../apis/getFreebooks';

export const Freebook = () => {
  const perPage = 2;
  const freebookQuery = useFreebooks({ perPage });

  const data = freebookQuery.data;

  if (!data) {
    return (
      <>
        <h2>No Data</h2>
      </>
    );
  }

  return (
    <section className="section background-primary">
      <Container>
        <SectionTitle title="Freebook Terbaru" isPrimaryColor={false} />
        <Row>
          {data.map((freebook) => (
            <FreebookCard
              key={freebook.id}
              title={freebook.title}
              author={freebook.author}
              description={freebook.description}
              imageUrl={freebook.imageUrl}
              imageAlt={freebook.imageAlt}
              downloadUrl={freebook.downloadUrl}
            />
          ))}
        </Row>
        <Row>
          <Col md={12} className="freebook-more">
            <LinkContainer to="/freebook">
              <a className="color-white float-end">Lihat freebook lainnya &gt;&gt;</a>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
