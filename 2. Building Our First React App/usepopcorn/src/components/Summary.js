export function Summary({ children }) {
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>{children}</div>
    </div>
  );
}
