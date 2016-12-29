import React from 'react';
import { Header } from 'containers';
import styles from './Home.scss';

class Home extends React.Component {

  render() {
    return (
      <div className={styles.Home}>
        <Header />
        <h1>Hello world!</h1>
      </div>
    );
  }
}

export default Home;
