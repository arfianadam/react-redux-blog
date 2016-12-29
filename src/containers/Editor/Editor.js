import React from 'react';
import { connect } from 'react-redux';
import { convertToRaw } from 'draft-js';
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

  onChange(editorState) {
    this.setState({ editorState });
    console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className={styles.Editor}>
        <input type="text" placeholder="Title" />
        <TextEditor
          editorState={editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Editor;
