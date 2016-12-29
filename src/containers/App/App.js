import React, { PropTypes } from 'react';
import Header from '../Header';
import styles from './App.scss';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className={styles.App}>
        <Header />
        {children}
      </div>
    );
  }
}

export default App;
