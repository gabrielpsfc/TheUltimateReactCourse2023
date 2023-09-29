import { useEffect, useRef } from "react";

export function Search({ query, setQuery }) {
  /*
  
    useEffect(() => {
    const el = document.querySelector(".search");
    console.log(el);
    el.focus();
  }, []);

  */

  const inputEL = useRef(null);

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEL.current) return;

        if (e.code === "Enter") {
          inputEL.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);

      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <input
      type="text"
      className="search"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEL}
    />
  );
}
