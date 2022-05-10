import { Col } from 'react-bootstrap';

import { ButtonWhite } from './Button';

export type freebookCardProps = {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  downloadUrl: string;
};

export const FreebookCard = ({
  title,
  author,
  description,
  imageUrl,
  imageAlt,
  downloadUrl,
}: freebookCardProps) => {
  return (
    <Col md={6} className="py-sm-4">
      <Col md={12} className="freebook-card ">
        <img src={imageUrl} alt={imageAlt} className="freebook-image d-block mx-auto" />
        <p className="freebook-title color-white">{title}</p>
        <p className="freebook-author color-white">{author}</p>
        <p className="freebook-description color-white">{description}</p>
        <a href={downloadUrl} className="d-flex justify-content-center">
          <ButtonWhite text="Download PDF"></ButtonWhite>
        </a>
      </Col>
    </Col>
  );
};
