import { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import './App.css';
import { SearchBar } from './SearchBar';
import Header from './components/Header';
import AddToFavourite from './components/AddToFavourite';


function App() {
  const [movies, updateMovies] = useState([])
  const [searchQuery, updateSearchQuery] = useState('')

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
            

            
            
            console.log(resJson)
            

            
          } catch (error) {
            console.log(error)
          }
        
        }

        useEffect(() => {
          getMovies(searchQuery)
          //eslint-disable-next-line
        }, [searchQuery])
  return (
    <div className='container movie__app'>
      <div className="header__row">
        <Header header='Movies' />
        <SearchBar updateSearchQuery={updateSearchQuery} searchQuery={searchQuery} />

      </div>
      
      <div className='row'>

         <MovieList movies={movies} AddFavourite = {AddToFavourite}/>


        
      </div>
      
     

      
    </div>
  );
}

export default App;
