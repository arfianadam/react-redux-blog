import React from 'react';
import { connect } from 'react-redux';
import { convertToRaw } from 'draft-js';
import autosize from 'autosize';
import { Editor as TextEditor, createEditorState } from 'medium-draft';
import styles from './Editor.scss';

@connect()

class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editorState: createEditorState()
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const titleeditor = document.getElementById('titleeditor');
    titleeditor.style.resize = 'none';
    titleeditor.style.fontSize = '4rem';
    titleeditor.style.border = 'none';
    titleeditor.style.padding = '0';
    titleeditor.style.margin = '30px 30px 0 30px';
    autosize(titleeditor);
    this.titleInput.focus();
  }

  onChange(editorState) {
    this.setState({ editorState });
    console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className={styles.Editor}>
        <textarea
          placeholder="Title"
          rows="1"
          id="titleeditor"
          ref={(input) => { this.titleInput = input; }}>
        </textarea>
        <TextEditor
          editorState={editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Editor;
