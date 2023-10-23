export function SpanText({ content, children }) {
  const stl = {
    color: content ? "" : "red",
  };
  return <span style={stl}>{content ? content : children}</span>;
}
