//import React from "react"

const Moviecard=({movie1})=>{ //here we are destructuring to that we don't need to repeat same prop
return (
<div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster!=="N/A"?movie1.Poster:"https://via.placeholder.com/404"} alt={movie1.Title} />
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
)

}

export default Moviecard