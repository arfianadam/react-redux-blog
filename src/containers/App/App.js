import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchData } from 'redux/modules/posts';
import Header from '../Header';
import styles from './App.scss';

@connect()

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    dispatch: PropTypes.func
  };

  componentDidMount() {
    this.props.dispatch(fetchData());
  }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.App}>
        <Helmet
          titleTemplate="%s - React Blog"
          defaultTitle="React Blog"
        />
        <Header />
        <div className={styles.container}>
          {children}
        </div>
      </div>
    );
  }
}

export default App;
