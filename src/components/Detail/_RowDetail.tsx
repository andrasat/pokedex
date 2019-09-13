import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface IProps {
  title: string;
  children?: React.ReactNode;
}

function RowDetail({ title, children }: IProps): React.ReactElement {
  return (
    <Row style={{ marginBottom: '1rem' }}>
      <Col xs={4} className="text-right">
        <span>{title} </span>
      </Col>
      <Col xs={8}>{children}</Col>
    </Row>
  );
}

export default RowDetail;
