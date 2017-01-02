import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { deletePost } from 'redux/modules/posts';
import styles from './Metabuttons.scss';

@connect()

class Metabuttons extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    id: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this post? This cannot be undone.')) {
      const { dispatch, id } = this.props;
      dispatch(deletePost(id));
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <div className={styles.Metabuttons}>
        <a href="" onClick={this.handleDelete}>Delete</a>
        <hr />
      </div>
    );
  }
}

export default Metabuttons;
