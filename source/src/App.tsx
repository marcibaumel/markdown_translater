import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import MDEditor from '@uiw/react-md-editor';

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
