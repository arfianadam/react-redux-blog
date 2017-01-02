import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Post from 'components/Post';
import CommentsContainer from 'containers/CommentsContainer';
import Metabuttons from 'containers/Metabuttons';
import styles from './Single.scss';

@connect(store => ({
  posts: store.posts.posts
}))

class Single extends React.Component {
  static propTypes = {
    posts: PropTypes.array,
    params: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  render() {
    const { posts, params } = this.props;
    const post = posts[params.id];
    function renderPost() {
      if (post) {
        return (
          <div className={styles.Single}>
            <Helmet
              title={post.title}
            />
            <Post data={post} single />
            <Metabuttons id={post.id} />
            <CommentsContainer id={post.id} data={post.comments} />
          </div>
        );
      }
      return null;
    }
    return renderPost();
  }
}

export default Single;
