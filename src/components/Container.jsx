import { useState } from "react";


function Container(props)
{
    return  <div className="container">
    <div className="movie">
        <div>
            <p>{props.movies.Year} </p>
        </div>

        <div>
            <img src={props.movies.Poster !== 'N/A' ? props.movies.Poster : 'https://via.placeholder.com/400'}></img>
        </div>


        <div> 
            <span>{props.movies.Type}</span>
            <h3>{props.movies.Title}</h3>
        </div>
    </div>
</div>
}


export default Container;