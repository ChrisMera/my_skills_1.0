import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import style from './InfoRow.module.css';

const InfoRow = (props) => {
  return (
    <Container>
      <Row>
        <Col xs='12' md={{ size: 8, offset: 2 }} className={style.Box}>
          <h2 className={style.h2TextStyle}>The place to build your tailored resume</h2>
          <p className={style.pTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Col>
      </Row>
    </Container>
  )
};

export default InfoRow;