import React, { Component } from 'react';

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import InfoRow from '../../components/Elements/InfoRow/InfoRow';

class Splash extends Component {
  state = {
    isAuth: false
  }

  render () {
    return (
      <>
        <Jumbotron />
        <InfoRow />
      </>
    )
  }
}

export default Splash;
