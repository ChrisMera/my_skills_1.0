import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import style from './BenefitsRow.module.css';

const BenefitsRow = (props) => {
  return (
    <Container>
      <Row>
        <Col xs='12' md='4' className={style.Box}>
          <i className="far fa-grin fa-3x"></i>
          <h4 className={style.h4TextStyle}>Easy To Use</h4>
          <p className={style.pTextStyle}>Add your past job experiences and references and we do the rest. Plus, we save it all for you for future resume's!</p>
        </Col>
        <Col xs='12' md='4' className={style.Box}>
          <i className="far fa-check-circle fa-3x"></i>
          <h4 className={style.h4TextStyle}>Fast</h4>
          <p className={style.pTextStyle}>Choose which job experiences and skills you want to include in your resume and we will make a resume for you!</p>
        </Col>
        <Col xs='12' md='4' className={style.Box}>
          <i className="far fa-money-bill-alt fa-3x"></i>
          <h4 className={style.h4TextStyle}>Free</h4>
          <p className={style.pTextStyle}>Absolutely no cost or fees required to sign up and use our resume builder!</p>
        </Col>
      </Row>
    </Container>
  )
};

export default BenefitsRow;