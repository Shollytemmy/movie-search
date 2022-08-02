import React from 'react'
//https://cdn-icons-png.flaticon.com/512/1179/1179235.png
//BsHeartFill import react-icons/bs
const MovieList = ({movies, AddFavourite}) => {
  return (
    <>
        {
            movies.map((movie) =>{
                
                return(
                    <div key={movie.imdbID} className='list__movie image__container'>
                        <img src={movie.Poster === "N/A" ? "https://cdn-icons-png.flaticon.com/512/1179/1179235.png" : movie.Poster } alt={movie.Title} />
                        <div className="overlay">
                            <AddFavourite />
                        </div>
                    </div>
                    
                )
            })
        }
    </>
  )
}

export default MovieList