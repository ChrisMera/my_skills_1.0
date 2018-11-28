import React, { Component } from 'react';

import Jumbotron from '../../components/Jumbotron/Jumbotron';

class Splash extends Component {
  state = {
    isAuth: false
  }

  render () {
    return (
      <>
        <Jumbotron />
      </>
    )
  }
}

export default Splash;
