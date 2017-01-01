import React from 'react';
import Helmet from 'react-helmet';
import Editor from '../Editor';
import styles from './New.scss';

class New extends React.Component {

  render() {
    return (
      <div className={styles.New}>
        <Helmet
          title="New post"
        />
        <Editor />
      </div>
    );
  }
}

export default New;
