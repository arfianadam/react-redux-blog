import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Post } from 'components';
import styles from './PostsContainer.scss';

@connect(store => ({
  posts: store.posts.posts
}))

class PostsContainer extends React.Component {
  static propTypes = {
    posts: PropTypes.array
  }

  render() {
    const { posts } = this.props;
    const renderPosts = posts.map((post, i) =>
      <Post
        data={post}
        key={i}
      />
    );
    return (
      <div className={styles.PostsContainer}>
        {renderPosts}
      </div>
    );
  }
}

export default PostsContainer;
