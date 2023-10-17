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
import { useMovies } from "./customHooks/useMovies";
import { useLocalStorageState } from "./customHooks/useLocalStorageState";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export const key = "71f7d718";

export default function App() {
  const [query, setQuery] = useState("");
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [tilteLegend, setTitleLegend] = useState("usePopcorn");
  const { movies, isLoading, error } = useMovies(query, handleBackButton);
  const [watched, setWatched] = useLocalStorageState([], "watched");

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
