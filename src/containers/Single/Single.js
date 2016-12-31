import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Post from 'components/Post';
import CommentsContainer from 'containers/CommentsContainer';
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
    this.onMount = this.onMount.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.params;
    this.onMount(id);
  }

  onMount(id) {
    this.setState({
      post: this.props.posts[id]
    });
  }

  render() {
    const { post } = this.state;
    return (
      <div className={styles.Single}>
        <Post data={post} single />
        <CommentsContainer id={post.id} />
      </div>
    );
  }
}

export default Single;
