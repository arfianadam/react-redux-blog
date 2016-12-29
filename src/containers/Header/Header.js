import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from './Header.scss';

@connect(store => ({
  path: store.routing.locationBeforeTransitions.pathname
}))

class Header extends React.Component {
  static propTypes = {
    path: PropTypes.string
  }

  render() {
    const { path } = this.props;
    function subtitle() {
      if (path === '/new') {
        return '- New Post';
      }
    }
    function nav() {
      if (path === '/new') {
        return (
          <ul>
            <li><Link to="/">Post</Link></li>
            <li><Link to="/">Cancel</Link></li>
          </ul>
        );
      }

      return (
        <ul>
          <li><Link to="/new">New Post</Link></li>
        </ul>
      );
    }
    return (
      <div className={styles.Header}>
        <div className={styles.container}>
          <div className={styles.title}>
            React Blog <span>{ subtitle() }</span>
          </div>
          <nav>
            { nav() }
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
