function Editor({ value, onChange }) {
  return (
    <div className="editor-container">
      <textarea
        className="editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write Markdown here... (e.g. # Heading)"
      />
    </div>
  );
}

export default Editor;
