import React from 'react';

import style from './Jumbotron.module.css';

const jumbotron = ( props ) => {
  return (
    <>
      <header className={style.Header}>
        <h1 className={style.HeaderText}>
          My Skills Tailored <br />
          Resume Builder
        </h1>
      </header>
    </>
  )
};

export default jumbotron;