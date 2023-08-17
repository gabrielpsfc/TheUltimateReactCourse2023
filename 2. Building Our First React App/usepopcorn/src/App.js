import { useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

function Search({ query, setQuery }) {
  return (
    <input
      type="text"
      className="search"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResults({ moviesLength }) {
  return (
    <p className="num-results">
      Found <strong>{moviesLength}</strong> results
    </p>
  );
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopCorn</h1>
      </div>
      {children}
    </nav>
  );
}

function Main({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <li key={movie.imdbID}>
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

function Span({ moji, data }) {
  return (
    <p>
      <span>{moji}</span>
      <span>{data} movies</span>
    </p>
  );
}

function Summary({ children }) {
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>{children}</div>
    </div>
  );
}

function List({ watched }) {
  return (
    <ul className="list">
      {watched?.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <Span moji="⭐" data={movie.imdbRating} />
            <Span moji="🌟" data={movie.userRating} />
            <Span moji="⌛" data={movie.runtime} />
          </div>
        </li>
      ))}
    </ul>
  );
}

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults moviesLength={movies.length} />
      </NavBar>

      <MainPage>
        <Box setIsOpen={setIsOpen1} isOpen={isOpen1}>
          <Main movies={movies} />
        </Box>
        <Box setIsOpen={setIsOpen2} isOpen={isOpen2}>
          <Summary>
            <Span moji="#️⃣" data={watched.length} />
            <Span moji="⭐" data={avgImdbRating} />
            <Span moji="🌟" data={avgUserRating} />
            <Span moji="⌛" data={avgRuntime} />
          </Summary>
          <List watched={watched} />
        </Box>
      </MainPage>
    </>
  );
}

function Box({ setIsOpen, isOpen, children }) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((s) => !s)}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function MainPage({ children }) {
  return <main className="main">{children}</main>;
}

export default App;
