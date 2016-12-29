import React from 'react';
import { Header, PostsContainer } from 'containers';
import styles from './Home.scss';

class Home extends React.Component {

  render() {
    return (
      <div className={styles.Home}>
        <Header />
        <PostsContainer />
      </div>
    );
  }
}

export default Home;
