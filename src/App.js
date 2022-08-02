import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import './App.css';
import { SearchBar } from './SearchBar';
import Header from './components/Header';
import AddToFavourite from './components/AddToFavourite';
import RemoveFavorite from './components/RemoveFavorite';


function App() {
  const [movies, updateMovies] = useState([])
  const [searchQuery, updateSearchQuery] = useState('')
  const [favourites, updateFavourites] = useState([])
  // console.log('Array',favourite)

        // const base_Url = "http://www.omdbapi.com"
        

        //http://www.omdbapi.com/?s=star war&apikey=20c77665


        const getMovies = async (searchQuery) => {
          const url = `http://www.omdbapi.com/?s=${searchQuery}&apikey=20c77665`
          try {
            const response =  await fetch(url)
            const resJson = await response.json()
            if(resJson.Search){
              updateMovies(resJson.Search)

            }
         
          } catch (error) {
            console.log(error)
          }
        
        }

        useEffect(() => {
          getMovies(searchQuery)
          //eslint-disable-next-line
        }, [searchQuery])


        useEffect(() => {
          const  retrieveFavourite = JSON.parse(localStorage.getItem(('favourite-lists')));

          updateFavourites(retrieveFavourite)
        }, [])

        const addToLocalStorage = (item) => {
          localStorage.setItem('favourite-lists', JSON.stringify(item))
        }

        const addFavourite = (movie) => {
          const movieToAdd = [...favourites, movie]
          updateFavourites(movieToAdd)
          addToLocalStorage(movieToAdd)
         

        }

        const removeFavourite = (movie) => {
          const filtered = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID)

          updateFavourites(filtered)
          addToLocalStorage(filtered)
          
        }
  return (
    <div className='container movie__app'>
      <div className="header__row">
        <Header header='Movies' />
        <SearchBar updateSearchQuery={updateSearchQuery} searchQuery={searchQuery} />

      </div>
      
      <div className='row'>

         <MovieList
          movies={movies} 
          AddFavourite = {AddToFavourite}
          handleFavourite = {addFavourite}
          /> 
      </div>

      <div className="header__row">
        <Header header='Favourites' />
        </div>

         <div className='row'>

         <MovieList
          movies={favourites} 
          AddFavourite = {RemoveFavorite}
          handleFavourite = {removeFavourite}
          /> 
      </div>
      
     

      
    </div>
  );
}

export default App;
