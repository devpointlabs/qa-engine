import React, { Component } from 'react';
import { Container } from "semantic-ui-react";
import { Editor, editorState } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const EditorComponent = () =>
<Container>
<Editor
 wrapperClassName="wrapper-class"
 editorClassName="editor-class"
 toolbarClassName="toolbar-class"
 wrapperStyle={<wrapperStyleObject />}
 editorStyle={<editorStyleObject />}
 toolbarStyle={<toolbarStyleObject />}
/>
</Container>

export default EditorComponent;

