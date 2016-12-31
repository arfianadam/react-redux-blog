import React, { PropTypes } from 'react';
import Comment from 'components/Comment';
import styles from './CommentsList.scss';

class CommentsList extends React.Component {
  static propTypes = {
    data: PropTypes.array
  }

  render() {
    const { data } = this.props;
    function renderComments() {
      if (data) {
        if (data.length > 0) {
          const commentsList = data.map((comment, i) => <Comment key={i} data={comment} />);
          return commentsList;
        }
        return null;
      }
    }
    return (
      <div className={styles.CommentsList}>
        {renderComments()}
      </div>
    );
  }
}

export default CommentsList;
