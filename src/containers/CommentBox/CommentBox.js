import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import autosize from 'autosize';
import styles from './CommentBox.scss';

@connect()

class CommentBox extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const commentbox = document.getElementById('commentbox');
    commentbox.style.resize = 'none';
    commentbox.style.padding = '10px';
    autosize(commentbox);
  }

  handleChange(e) {
    this.setState({
      comment: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch();
  }

  render() {
    const { comment } = this.state;
    return (
      <div className={styles.CommentBox}>
        <textarea
          name=""
          id="commentbox"
          rows="3"
          placeholder="Type your comment."
          onChange={this.handleChange}
          value={comment} />
        <div className={styles.submitButton}>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default CommentBox;
