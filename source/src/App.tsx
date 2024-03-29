import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { motion } from 'framer-motion';
import MDEditor from '@uiw/react-md-editor';

function App() {
  const [value, setValue] = useState("");

  const onChange = (e: any): void => {
    console.log(e);
    setValue(e);
  }

  return (
    <div className="background">
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="container mt-5"
      data-color-mode="dark">
      <MDEditor
        height={500}
        value={value}
        onChange={onChange}
      />
    </motion.div>
    </div>
  );
}

export default App;
