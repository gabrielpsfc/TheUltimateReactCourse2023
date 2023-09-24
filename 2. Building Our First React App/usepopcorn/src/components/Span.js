export function Span({ moji, data, msg = "" }) {
  return (
    <p>
      <span>{`${moji} ${data} ${msg}`}</span>
    </p>
  );
}
