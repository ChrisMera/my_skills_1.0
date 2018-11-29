import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import style from './Jumbotron.module.css';

const jumbotron = ( props ) => {
  return (
    <Container className={style.Box}>
      <Row>
        <Col xs='12' md='3' className={style.Box2}>
          <h1 className={style.HeaderTextStyle}>
            My <span className={style.HeaderTextStyle2}>Skills</span>
          </h1>
        </Col>
        <Col xs='12' md='9' className={style.Box3}>
          <header className={style.Header}></header>
        </Col>
      </Row>
    </Container>
  )
};

export default jumbotron;