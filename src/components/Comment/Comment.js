import React, { PropTypes } from 'react';
import styles from './Comment.scss';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

class Comment extends React.Component {
  static propTypes = {
    data: PropTypes.object
  }

  renderDate(date) {
    return monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getHours() + ':' + date.getMinutes();
  }

  render() {
    const { data } = this.props;
    const date = new Date(data.time);
    return (
      <div className={styles.Comment}>
        <h5>{data.name} <span>at {this.renderDate(date)}</span></h5>
        <p>{data.content}</p>
      </div>
    );
  }
}

export default Comment;
