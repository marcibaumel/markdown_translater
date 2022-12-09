import React, { ChangeEvent, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Editor } from './components/Editor';
import MDEditor, { MDEditorProps } from '@uiw/react-md-editor';

function App() {
  const [value, setValue] = useState("**Hello world!!!**");

  const onChange = (e: any): void => {
    console.log(e);
    setValue(e);
  }

  return (
    <div className="container mt-5" data-color-mode="light">
      <MDEditor
        height={500}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
