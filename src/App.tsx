import React, { useState, ChangeEvent } from "react";
import marked from "marked";
import DOMPurify from "dompurify";
import { Input } from "antd";

import { defaultText } from "./data/defaultText";
import "./App.css";

const App: React.FC = () => {
  const [text, setText] = useState<string>(defaultText);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };

  marked.setOptions({ breaks: true });

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <Input.TextArea
        rows={8}
        id="editor"
        value={text}
        onChange={handleChange}
      />

      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(text)) }}
      ></div>
    </div>
  );
};

export default App;
