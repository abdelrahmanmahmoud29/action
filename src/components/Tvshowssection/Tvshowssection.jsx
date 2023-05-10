import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Tvshowssection() {
const[tvShow,setTvShow]=useState([])
    async function getMovies(){
       let {data}=await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=f1aca93e54807386df3f6972a5c33b50 `) 
       let response=await data.results
        const slicedArray = await response.slice(0, 12);
        setTvShow(slicedArray)
}
  useEffect(()=>{
    getMovies()
  },[])
  
    return <>
   <div className="container  d-flex text-white ">
    <div className=" trending d-flex flex-wrap mt-5 ps-4 pt-5">
        <div className="trending-Movies  mt-5">
            <h2 className='trending-Movies-h2 text-white'>trending <br/>Tv-Shows<br/>Right Now</h2>
            <p className='text-muted'>Top ternding Tv-Show by Week</p>
        </div>
        {tvShow.map((tvShow)=> <div key={tvShow.id} className=' m-3 text-center'> 
        <Link to={`/tvdetails/${tvShow.id}`}>  
        <img className='sec-card'  width={120} src={`https://image.tmdb.org/t/p/w500`+tvShow.poster_path} alt="" />
        <p className=' movieTitle'>{tvShow.title?.split(' ').slice(0,3).join(' ')}{tvShow.name}</p>
        </Link> 
        </div>
        )}
 
            
        </div>
       
    </div>
    
 <Link to={'tvshow'}><button className='continuobtn' ><p className=' m-2'>See more</p><i class="fa-solid fa-arrow-right"></i></button></Link> 
    </>
}
export default Tvshowssection;