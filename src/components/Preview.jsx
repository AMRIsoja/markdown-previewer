import { marked } from "marked";
import DOMPurify from "dompurify";

function Preview({ markdown }) {
  if (!markdown || markdown.trim() === "") {
    return (
      <div className="preview empty">
        <h2>No content yet</h2>
        <p>Start typing markdown in the editor to see preview here.</p>
      </div>
    );
  }

  const rawHtml = marked(markdown);
  const cleanHtml = DOMPurify.sanitize(rawHtml);

  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}

export default Preview;
