import React from 'react';
import Editor from '../Editor';
import styles from './New.scss';

class New extends React.Component {

  render() {
    return (
      <div className={styles.New}>
        <Editor />
      </div>
    );
  }
}

export default New;
