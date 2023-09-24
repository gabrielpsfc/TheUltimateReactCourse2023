import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import { key } from "../App";

export function SelectedMovie({
  id,
  setSelectedId,
  onAddWatched,
  watched,
  setTitleLegend,
  handleBackButton,
  selectedId,
}) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const isWatched = watched.map((s) => s.imdbID).includes(movie.imdbID);
  const isWatchedRating = watched.filter((s) => s.imdbID === movie.imdbID);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  setTitleLegend(`Movie | ${title}`);

  function HandleNewMovie() {
    const newWatchedMovie = {
      imdbID: id,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddWatched(newWatchedMovie);
  }

  useEffect(() => {
    if (selectedId) {
      function callback(e) {
        if (e.code === "Escape") {
          console.log("closing inside");
          handleBackButton();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    }
  }, [selectedId, handleBackButton]);
  useEffect(
    function () {
      setLoading(true);
      async function getMovieDetails() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&i=${id}`
        );

        const data = await res.json();
        setMovie(data);
        setLoading(false);
      }
      getMovieDetails();
    },
    [id]
  );

  return (
    <div className="details">
      {loading ? (
        "loading"
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={() => handleBackButton()}>
              &larr;
            </button>
            <img src={poster} alt={`poster of the ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating}, imdbRating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {isWatched ? (
                `you rated this movie ${isWatchedRating[0].userRating} ⭐ `
              ) : (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    setMovieRating={setUserRating}
                  ></StarRating>
                  {userRating}
                  {userRating && (
                    <button
                      className="btn-add"
                      onClick={() => HandleNewMovie()}
                    >
                      + add to List
                    </button>
                  )}
                </>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
          </section>
        </>
      )}
    </div>
  );
}
