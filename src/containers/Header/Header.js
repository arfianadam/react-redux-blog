import React from 'react';
import styles from './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.container}>
          <div className={styles.title}>React Blog</div>
          <nav>
            <ul>
              <li><a href="">New Post</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
