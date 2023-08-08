export function SelectPercentage({ percen, setPercen, children }) {
  return (
    <div>
      <label>{children} </label>
      <select
        value={percen}
        onChange={(e) => setPercen(Number(e.target.value))}
      >
        <option value="0">Dissatisfied</option>
        <option value="5">It was okay</option>
        <option value="10">It was good</option>
        <option value="20">Abssolutely amazing</option>
      </select>
    </div>
  );
}
