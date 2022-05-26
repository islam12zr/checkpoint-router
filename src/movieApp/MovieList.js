import React from 'react'
import MovieCard from './MovieCard'
import MovieAdd from './MovieAdd'


function MovieList({Movies,text,rating,setMovie}) {


  return (

    <div>
      <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
     <MovieAdd Movies ={Movies} setMovie={setMovie}/>
     </div>
    <div style={{display:"flex" ,flexWrap:"wrap", justifyContent:"center"}}>
  
  {Movies.filter((el)=>el.title.toLowerCase().includes(text.toLowerCase() )&& el.rate>=rating)
        
.map((el) =><MovieCard MovieElemet={el}/>)
.reverse()}

    </div>
    </div>
  )
}

export default MovieList