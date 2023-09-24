import { Span } from "./Span";

export function List({ watched, handleDell }) {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.poster} alt={`${movie.title} poster`} />
          <h3>{movie.title}</h3>
          <div>
            <Span moji="⭐" data={movie.imdbRating} />
            <Span moji="🌟" data={movie.userRating} />
            <Span moji="⌛" data={movie.runtime} />
          </div>
          <button
            className="btn-delete"
            onClick={() => handleDell(movie.imdbID)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
