import React, { ChangeEvent, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Editor } from './components/Editor';
import MDEditor from '@uiw/react-md-editor';

function App() {
  const [value, setValue] = useState("");

const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
  console.log((e.target as HTMLInputElement).value);
  setValue((e.target as HTMLInputElement).value);
}

  return (
    <div className="container">
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
