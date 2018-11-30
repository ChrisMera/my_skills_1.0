import React from 'react';

import { Jumbotron, Container } from 'reactstrap';
import style from './Jumbotron.module.css';

const jumbotron = ( props ) => {
  return (
    <Container>
      <Jumbotron fluid className={style.Header}>
        <h1 className={style.HeaderTextStyle}>
          My <span className={style.HeaderTextStyle2}>Skills</span>
        </h1>
      </Jumbotron>
    </Container>
  );
};

export default jumbotron;