import React from 'react';
import { PostsContainer } from 'containers';
import styles from './Home.scss';

class Home extends React.Component {

  render() {
    return (
      <div className={styles.Home}>
        <PostsContainer />
      </div>
    );
  }
}

export default Home;
