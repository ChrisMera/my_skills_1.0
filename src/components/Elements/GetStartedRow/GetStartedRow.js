import React from 'react';

import { Container, Row, Col, Button } from 'reactstrap';
import style from './GetStartedRow.module.css';

const GetStartedRow = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col xs='12' className={style.Box}>
        <h2 className={style.h2TextStyle}>Try My Skills tailored resume builder today</h2>
        
        <Button className={style.ButtonStyle}>GET STARTED</Button>
        </Col>
      </Row>
    </Container>
  )
};

export default GetStartedRow;