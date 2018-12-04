import React, { Component } from 'react';

import Nav from '../../components/Nav/Nav';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import InfoRow from '../../components/Elements/InfoRow/InfoRow';
import BenefitsRow from '../../components/Elements/BenefitsRow/BenefitsRow';
import GetStartedRow from '../../components/Elements/GetStartedRow/GetStartedRow';
import AboutRow from '../../components/Elements/AboutRow/AboutRow';
import Footer from '../../components/Footer/Footer';

class Splash extends Component {
  state = {
    isAuth: false
  }

  render () {
    return (
      <>
        <Nav />
        <Jumbotron />
        <InfoRow />
        <BenefitsRow />
        <GetStartedRow />
        <AboutRow />
        <Footer />
      </>
    )
  }
}

export default Splash;
