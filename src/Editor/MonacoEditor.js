import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { useState } from 'react';


const Editor = () => {
  const [value, setValue] = useState('// Select an algorithm below...');

  return (
    <MonacoEditor
      height="40vh"
      width="50vw"
      language="javascript"
      theme="vs-dark"
      value={value}
      options={{
        selectOnLineNumbers: true,
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
      }}
      onChange={(newValue, e) => {
        setValue(newValue);
      }}
    />
  );
}

export default Editor;