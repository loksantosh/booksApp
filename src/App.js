import { useState, useEffect } from "react";
import "./App.css";
import Moviecard from "./Moviecard";
import SearchIcon from "./search.svg";
//[] in useEffect hook is used to load it in the start

const App = () => {
  const [books, setbooks] = useState([]);

  const [searchBox, setSearchBox] = useState("");

  const searchBooks = async (search) => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBPCSuLhslvsmc8Jt7m_eckct4QyiVQINw`);

    console.log(response)
    const data = await response.json();
    setbooks(data.Search);
  };
  useEffect(() => {
    searchBooks("harry");
  }, []);
   
  return (
    <div className="App">
      <h1>Books Info</h1>
      <div className="search">
        <input
          type="text"
          placeholder="search Books here"
          value={searchBox}
          onChange={(e) => setSearchBox(e.target.value)}
        ></input>
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchBooks(searchBox)}
        />
      </div>

      {books?.length> 0 ? (
        <div className="container">
          {books.map((book) => (
            <Moviecard movie1={book} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No Books found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
