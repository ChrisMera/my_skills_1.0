import React, { Component } from 'react';

import { 
  Container, 
  Row, 
  Col } from 'reactstrap';

// import Nav from '../../components/Nav/Nav';
// import Footer from '../../components/Footer/Footer';

import styles from './Dashboard.module.css';

class Dashboard extends Component {
  render() {
    return (
      <>
        {/* <Nav /> */}
          <Container>
            <Row>
              <Col xs='12' md='3' className={styles.Box}></Col>
              <Col xs='12' md='9' className={styles.Box2}></Col>
            </Row>
          </Container>
        {/* <Footer /> */}
      </>
    )
  }
}

export default Dashboard;