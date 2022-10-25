import { useState, useEffect } from "react";
import "./App.css";
import Moviecard from "./Moviecard";
import SearchIcon from "./search.svg";

//[] in useEffect hook is used to load it in the start

const Api_url = " https://www.omdbapi.com/?i=tt3896198&apikey=29ee9fab";

const App = () => {
  const [movies, setmovies] = useState([]);

  const [searchBox, setSearchBox] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${Api_url}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  };
  useEffect(() => {
    searchMovies("avengers");
  }, []);

  return (
    <div className="App">
      <h1>MoviePlex</h1>
      <div className="search">
        <input
          type="text"
          placeholder="search movie here"
          value={searchBox}
          onChange={(e) => setSearchBox(e.target.value)}
        ></input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchBox)}
        />
      </div>

      {movies?.length> 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Moviecard movie1={movie} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
