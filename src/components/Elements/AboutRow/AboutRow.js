import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import style from './AboutRow.module.css';

const AboutRow = (props) => {
  return (
    <Container>
      <Row>
        <Col xs='12' md='2'className={style.Box}>
          
        </Col>
        <Col xs='12' md='2'className={style.Box}>
        </Col>
        <Col xs='12' md='2'className={style.Box}>
          <h6>COMPANY</h6>
        </Col>
        <Col xs='12' md='2'className={style.Box}>
          <h6>PRODUCT</h6>
        </Col>
        <Col xs='12' md='2'className={style.Box}>
          <h6>RESOURCES</h6>
        </Col>
        <Col xs='12' md='2'className={style.Box}>
          <h6>EXTRAS</h6>
        </Col>
      </Row>
    </Container>
  )
};

export default AboutRow;