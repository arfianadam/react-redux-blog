import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import autosize from 'autosize';
import { Editor as TextEditor, createEditorState } from 'medium-draft';
import { typePost } from 'redux/modules/posts';
import styles from './Editor.scss';

@connect(store => ({
  title: store.posts.editor.title,
  editorState: store.posts.editor.content
}))

class Editor extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    title: PropTypes.string
    // editorState: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      editorState: createEditorState(),
      title: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  componentDidMount() {
    const titleeditor = document.getElementById('titleeditor');
    titleeditor.style.resize = 'none';
    titleeditor.style.fontSize = '4rem';
    titleeditor.style.border = 'none';
    titleeditor.style.padding = '0 30px';
    titleeditor.style.margin = '0';
    autosize(titleeditor);
    this.titleInput.focus();
  }

  onChange(editorState) {
    this.props.dispatch(typePost(stateToHTML(editorState.getCurrentContent()), 'content'));
    this.setState({
      editorState
    });
  }

  onTitleChange(event) {
    this.props.dispatch(typePost(event.target.value, 'title'));
  }

  render() {
    const { title } = this.props;
    const { editorState } = this.state;
    return (
      <div className={styles.Editor}>
        <textarea
          placeholder="Title"
          rows="1"
          id="titleeditor"
          ref={(input) => { this.titleInput = input; }}
          onChange={this.onTitleChange}
          value={title} />
        <TextEditor
          editorState={editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Editor;
