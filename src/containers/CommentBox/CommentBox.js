import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import autosize from 'autosize';
import { newComment } from 'redux/modules/posts';
import styles from './CommentBox.scss';

@connect()

class CommentBox extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    id: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
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

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id } = this.props;
    const { name, comment } = this.state;
    this.props.dispatch(newComment(id, comment, name));
    this.setState({
      comment: '',
      name: ''
    });
  }

  render() {
    const { name, comment } = this.state;
    return (
      <div className={styles.CommentBox}>
        <input
          type="text"
          placeholder="Type your name."
          value={name}
          onChange={this.handleChangeName}
        />
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
