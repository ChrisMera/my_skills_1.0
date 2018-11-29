import React, { Component } from 'react';

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import InfoRow from '../../components/Elements/InfoRow/InfoRow';
import BenefitsRow from '../../components/Elements/BenefitsRow/BenefitsRow';
import GetStartedRow from '../../components/Elements/GetStartedRow/GetStartedRow';

class Splash extends Component {
  state = {
    isAuth: false
  }

  render () {
    return (
      <>
        <Jumbotron />
        <InfoRow />
        <BenefitsRow />
        <GetStartedRow />
      </>
    )
  }
}

export default Splash;
