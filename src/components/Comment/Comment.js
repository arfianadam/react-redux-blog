import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from 'redux/modules/posts';
import styles from './Comment.scss';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

@connect()

class Comment extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    id: PropTypes.string,
    index: PropTypes.number,
    data: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this comment?')) {
      const { dispatch, id, index } = this.props;
      dispatch(deleteComment(id, index));
    }
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
        <a href="" onClick={this.handleDelete}>Delete</a>
      </div>
    );
  }
}

export default Comment;
