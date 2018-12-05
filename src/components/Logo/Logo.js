import React from 'react';

import brandLogo from '../../assets/images/favicon-64.png';

import styles from './Logo.module.css';

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={brandLogo} alt='MySkills' />
  </div>
);
  
export default logo;