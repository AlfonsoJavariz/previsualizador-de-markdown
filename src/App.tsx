import React, { useState, ChangeEvent } from "react";
import marked from "marked";

const App = () => {
  const [text, setText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.currentTarget.value);
  };

  marked.setOptions({ breaks: true });

  return (
    <div>
      <h1>Markdown Previewer</h1>
      <textarea id="editor" value={text} onChange={handleChange} />

      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
};

export default App;
