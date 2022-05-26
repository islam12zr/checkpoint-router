import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import  "./header.css"



function Header({setText,setRating}) {
   
  return (
    <div className='header'>
    
        
        <header style={{display:"flex", borderBottom:"1px solid gray" ,height:"80px" , }}>

        <div className='nav2' style={{}}>
     <Link style={{textDecoration:"none", color:"white"}} to="/"><span>Home</span></Link>
   <Link  style={{textDecoration:"none", color:"white"}}  to="/contact"><span>Contact</span></Link> 
    <Link  style={{textDecoration:"none", color:"white"}}  to="/about"><span>about</span></Link> 
      </div>

<div style={{display:"flex", justifyContent:"flex-end", width:"100%",height:"80px" }}>
        <ReactStars onChange={(newRating)=> setRating(newRating)}
    count={5}

    size={24}
    activeColor="#ffd700"

  />,
        <input  onChange={(e) =>{setText(e.target.value)}} placeholder='searsh for Movies' type="searsh" style={{borderRadius:"5px", height:"30px", width:"250px", margin:"10px"}}/>
        </div>
        </header>
        
        
        </div>
  )
}

export default Header