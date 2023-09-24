export function Main({ movies, setSelectedId, selectedId }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <li
          key={movie.imdbID}
          onClick={() =>
            selectedId !== movie.imdbID
              ? setSelectedId(movie.imdbID)
              : setSelectedId(null)
          }
        >
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>📅</span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
