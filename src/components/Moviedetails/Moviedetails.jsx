import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Moviedetails() {
    let params=useParams()
    const[movieDetails,setMovieDetails]=useState([])
    async function getMovies(id){
       let {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`) 
       setMovieDetails(data)
        console.log(data);}
const[cast,setCast]=useState([])
    async function getcast(id){
       let results=await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=d687519299d61c8a9d38cca590708195&language&language=en-US`) 
       setCast(results.data.cast)
        console.log(results.data.cast);         }
const[similar,setSimilar]=useState([])
async function getSimilar(id){
   let {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=d687519299d61c8a9d38cca590708195&language=en-US&page=1`) 
   setSimilar(data.results)
   console.log(data.results);}
let settings = {
    speed: 300,
    slidesToScroll: 1, 
    arrows:false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3}
useEffect(()=>{
    getMovies(params.id)
    getSimilar(params.id)
    getcast(params.id)
  },[])
    return <>
 <div className="container   mt-5 p-4 text-white">
<div className="row">
<div className="col-md-3">
        <img width={250}  src={`https://image.tmdb.org/t/p/w500`+movieDetails.poster_path}alt="" />
        {movieDetails?.homepage?<button className='btn btn-warning w-100 mt-3'><a href={movieDetails.homepage} target="_blank">Movie page</a></button>:null}
        <hr />
    </div>
    <div className="col-md-9">
        <div className='MovieDetailsTitle p-3'>
            <h2>{movieDetails.title}</h2>
            <p className=' text-muted'>{movieDetails.tagline}</p>
        </div>
        <div className='MovieDetailsDetails p-3 d-flex justify-content-between'>
          <div>
          <h2>Details</h2>
            <ul>
          <div className=' mb-2 d-flex'>
          <li className='h5'>Geners:</li>
            {movieDetails.genres?.map((gener)=><><p className='m-2 mt-0 mb-0 text-muted'>{gener.name}</p><span className=' text-muted'>,</span></> )}
          </div>
        <div className='d-flex mb-2'>
        <li className='h5'>Language:</li>
         
    <div className=' lang mb-2'>
         <p className=' m-2 mt-0 mb-0 text-muted' >{movieDetails.original_language}</p>
    </div>
           
         
        
        </div>
        <div className=' d-flex mb-2'>
        <li className='h5'>Status:</li>
          <p className='m-2 mt-0 mb-0 text-muted'>{movieDetails.status}</p>
        </div>
        <div className=' d-flex mb-2'>
        <li className='h5'>Rating:</li>
        <p><span className=' m-2 mt-0 mb-0 text-muted'>{movieDetails.vote_average}</span></p>
        </div>
            </ul>
          </div>
          <div className=' cast '>
            <h2>Cast</h2>
            {cast.map((item)=>
            <div className=' d-flex align-items-center'>
            <img width={50} height={50} className=' rounded-circle m-2' src={`https://image.tmdb.org/t/p/w500`+item.profile_path} alt="" />
            <p className='ms-2 mt-2'>{item.name}</p>
        </div>
            )}
          </div>
        </div>
        <div className='MovieDetailsDetails p-3'>
          <h2>Overview</h2>
          <p>"{movieDetails.overview}"</p>
        </div>
        <div className=' p-3'>
            <h2>Similar Movies</h2>
           <div className="container mt-2">
           <Slider {...settings} className=' p-4'>
            {similar.map((movie)=>
            <Link to={`/moviedetails/${movie.id}`}>
             <div className=' text-center'>
            {movie?.poster_path?<img width={170}   src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt="" />:null}
            {movie?.poster_path? <p>{movie.title}</p>:null}
           </div>
           </Link>
            )}
    </Slider>
           </div>
        </div>
    </div>
</div>
 </div>
    </>
}

export default Moviedetails;