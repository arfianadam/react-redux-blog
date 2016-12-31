import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { newPost } from 'redux/modules/posts';
import styles from './Header.scss';

@connect(store => ({
  path: store.routing.locationBeforeTransitions.pathname
}))

class Header extends React.Component {
  static propTypes = {
    path: PropTypes.string,
    dispatch: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.dispatch(newPost());
    browserHistory.push('/');
  }

  render() {
    const self = this;
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
            <li><a href="" onClick={self.handleClick}>Post</a></li>
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
            <Link to="/">React Blog</Link> <span>{ subtitle() }</span>
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
