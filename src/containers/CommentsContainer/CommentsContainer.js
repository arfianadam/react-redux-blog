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
    return (
      <div className={styles.CommentsContainer}>
        <h3>Discussion</h3>
        <p className={styles.info}>No comments at the moment.</p>
        <CommentsList data={data} />
        <CommentBox id={id} />
      </div>
    );
  }
}

export default CommentsContainer;
