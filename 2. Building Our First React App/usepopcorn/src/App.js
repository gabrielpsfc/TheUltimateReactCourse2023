import { useState, useEffect } from "react";
import "./index.css";
import { List } from "./components/List";
import { Summary } from "./components/Summary";
import { Span } from "./components/Span";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";
import { NumResults } from "./components/NumResults";
import { Search } from "./components/Search";
import { Box } from "./components/Box";
import { SelectedMovie } from "./components/SelectedMovie";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loading } from "./components/Loading";
import { MainPage } from "./components/MainPage";
import { tempMovieData } from "./components/tempMovieData";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export const key = "71f7d718";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(tempMovieData);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [tilteLegend, setTitleLegend] = useState("usePopcorn");

  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched");

    // Verifique se há dados no localStorage e faça o parsing
    if (storedValue) {
      return JSON.parse(storedValue);
    } else {
      // Se não houver dados, retorne um valor padrão (por exemplo, uma matriz vazia)
      return [];
    }
  });

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  //const [watched, setWatched] = useState([]);

  useEffect(() => {
    console.log("After initial render"); /*Effects run after the browser paint*/
  }, []);

  useEffect(() => {
    console.log(
      "after every render"
    ); /** this effect is synchronized with everything */
  });

  useEffect(() => {
    console.log("D");
  }, [query]);

  console.log("during render"); /**render logic runs during render */

  function handleAddWatchedMovie(movie) {
    const id = watched.map((s) => s.imdbID);
    const movieIsWatched = id.includes(movie.imdbID);
    if (movieIsWatched) {
      alert("filme já incluido");
    } else {
      setWatched((s) => [...s, movie]);
      //localStorage.setItem("watched", JSON.stringify([...watched, movie]));
    }
  }

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  function handleTitle(movieTitle) {
    document.title = `${movieTitle}`;
  }

  function handleBackButton() {
    setSelectedId(null);
    setTitleLegend("usePopcorn");
  }

  useEffect(() => {
    if (!tilteLegend) return;
    document.title = `${tilteLegend}`;

    return function () {
      document.title = "usePopCorn!";
    };
  }, [tilteLegend]);

  function handleDell(id) {
    setWatched((s) => s.filter((s) => s.imdbID !== id));
  }

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("something went wrong with fetching movies");

          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");
          console.log(data.Search);
          setMovies(data.Search);
          setError("");
        } catch (err) {
          console.error(err.message);

          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (!query.length) {
        setMovies([]);
        setError("");
        return;
      }
      handleBackButton();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults moviesLength={movies.length} />
      </NavBar>

      <MainPage>
        <Box setIsOpen={setIsOpen1} isOpen={isOpen1}>
          {!query.length && <span> No query</span>}
          {isLoading && <Loading />}
          {!isLoading && !error && (
            <Main
              movies={movies}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
              handleTitle={handleTitle}
            />
          )}

          {error && <ErrorMessage message={error} />}
        </Box>
        <Box setIsOpen={setIsOpen2} isOpen={isOpen2}>
          {selectedId ? (
            <SelectedMovie
              id={selectedId}
              setSelectedId={setSelectedId}
              onAddWatched={handleAddWatchedMovie}
              watched={watched}
              setTitleLegend={setTitleLegend}
              handleBackButton={handleBackButton}
              selectedId={selectedId}
            ></SelectedMovie>
          ) : (
            <>
              <Summary>
                <Span moji="#️⃣" data={watched.length} msg={"movies"} />
                <Span moji="⭐" data={avgImdbRating} />
                <Span moji="🌟" data={avgUserRating} />
                <Span moji="⌛" data={avgRuntime} msg={"min"} />
              </Summary>
              <List watched={watched} handleDell={handleDell} />
            </>
          )}
        </Box>
      </MainPage>
    </>
  );
}
