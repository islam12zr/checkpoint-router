import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router'

function Trailer({Movies}) {
  const params=useParams();
const mov= Movies.filter((el)=>el.id==params.id)[0];

  return (

    <div>
      <img src={mov.posterUrl}/>
      <h1>{mov.title}</h1>
      <h1>{mov.description}</h1>
      <ReactStars
    count={5}
  value={mov.rate}
    size={24}
    activeColor="#ffd700"
  edit={false}
  />,

    </div>
  )
}

export default Trailer