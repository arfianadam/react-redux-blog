import React from 'react';
import { Link } from 'react-router';
import styles from './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.container}>
          <div className={styles.title}>React Blog</div>
          <nav>
            <ul>
              <li><Link to="/new">New Post</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
