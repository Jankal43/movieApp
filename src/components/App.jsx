import { useState } from "react";
import React, {useEffect} from 'react';
import searchIcon from './search.svg'
import Container from "./Container";
import env from "dotenv"

env.config();

const API_URL = process.env.API_URL



function App()
{
    const [searchValue, setSearchValue] = useState("")
    const [movies, setMovies] = useState([]);


    function handleChange(event) {
        console.log(searchValue)
        const newValue = event.target.value;
        setSearchValue(newValue);
        
      }


    
    
    const serachMovies= async(title) =>
    {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        //console.log(data.Search);
        if (data && data.Search) {
            setMovies(data.Search);
        }
    }
    
    useEffect(()=>{

       serachMovies('')

    },[])
    
    
    
    return <div className="app">
        <h1>Movies</h1>
        <div className='search'>
            <input 
            name="Movie search"
            placeholder='Search for movies'
            value = {searchValue}
            onChange={handleChange}

            
            />

        <img 
            src={searchIcon}
            alt="search"
            onClick={()=> {serachMovies(searchValue)}}
         /> 
        </div>

        {movies.length > 0 
        ? movies.map((movies, index) => (
                <Container movies={movies} key={index} />
            ))
        : <h2>No movies found</h2> }
        
        

    </div>


}

export default App;