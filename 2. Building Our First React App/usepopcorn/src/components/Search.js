import { useEffect, useRef } from "react";
import { useKey } from "../customHooks/useKey";

export function Search({ query, setQuery }) {
  const inputEL = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEL.current) return;
    inputEL.current.focus();
    setQuery("");
  });

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

/**
   * 
   * 
   * 
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

     /*
  
    useEffect(() => {
    const el = document.querySelector(".search");
    console.log(el);
    el.focus();
  }, []);

  */
