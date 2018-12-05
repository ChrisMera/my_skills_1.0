import React, { Component } from 'react';

import styles from './Footer.module.css';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <>
        <footer className={styles.Footer}>
          <p>©2018 Chris Mera | <a className={styles.GithubLink} href="https://github.com/ChrisMera/my_skills_1.0" target="_blank" rel="noopener noreferrer">Github
          Repo</a></p>
        </footer>
      </>
    );
  }
}

export default Footer;