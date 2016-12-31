import React, { PropTypes } from 'react';
import CommentBox from 'containers/CommentBox';
import styles from './CommentsContainer.scss';

class CommentsContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  static propTypes = {
    id: PropTypes.string
  }

  render() {
    const { id } = this.props;
    return (
      <div className={styles.CommentsContainer}>
        <h3>Discussion</h3>
        <p className={styles.info}>No comments at the moment.</p>
        <CommentBox id={id} />
      </div>
    );
  }
}

export default CommentsContainer;
