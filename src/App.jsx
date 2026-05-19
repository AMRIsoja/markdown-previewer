import { useState, useEffect } from "react";
import defaultMarkdown from "./utils/defaultMarkdown";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("markdown");

    if (saved) {
      setMarkdown(saved);
    } else {
      setMarkdown(defaultMarkdown);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("markdown", markdown);
  }, [markdown]);

  return (
    <div className="app">
      <div className="pane">
        <div className="pane-header">Editor</div>
        <Editor value={markdown} onChange={setMarkdown} />
      </div>

      <div className="pane">
        <div className="pane-header">Preview</div>
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
