import React, { PropTypes } from 'react';
import CommentBox from 'containers/CommentBox';
import CommentsList from 'components/CommentsList';
import styles from './CommentsContainer.scss';

class CommentsContainer extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    data: PropTypes.array
  }

  render() {
    const { id, data } = this.props;
    function commentsNumber() {
      if (data) {
        if (data.length === 0) {
          return <p className={styles.info}>No comments at the moment.</p>;
        }
        return <p className={styles.info}>{data.length} Comment{data.length > 1 ? 's' : null}</p>;
      }
    }
    return (
      <div className={styles.CommentsContainer}>
        <h3>Discussion</h3>
        {commentsNumber()}
        <CommentsList data={data} />
        <hr />
        <h5 className={styles.writeLabel}>Write your comment</h5>
        <CommentBox id={id} />
      </div>
    );
  }
}

export default CommentsContainer;
