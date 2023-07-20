export function Stats({ item }) {
  if (!item.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }

  const nItens = item.length;
  const nPackedItens = item.filter((item) => item.packed === true).length;
  const percentage = (nPackedItens / nItens).toFixed(2) * 100;
  console.log(nItens, nPackedItens, percentage);

  return (
    <footer className="stats">
      {percentage === 100
        ? "you got everything! you are ready to go!"
        : `you have ${nItens} on your List, and you already packed ${nPackedItens} (${percentage}%)`}
    </footer>
  );
}
