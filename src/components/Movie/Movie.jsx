import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

function Movie() {
    let settings = {
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false,
        centerMode: true,
  centerPadding: '200px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]

};
const[topratedMovie,setTopratedMovie]=useState([])
    async function getTopRatedMovies(){
       let {data}=await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=d687519299d61c8a9d38cca590708195&language=en-US&page=1 `) 
       setTopratedMovie(data.results)
        console.log(data.results);}

        const[movie,setMovies]=useState([])
        const[movie2,setMovies2]=useState([])
        async function getMovies(){
           let {data}=await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50&page=1`) 
           setMovies(data.results)
    }
        async function getMovies2(){
           let {data}=await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50&page=2`) 
           setMovies2(data.results)
           console.log(search);
           
    }
const[searchResult,setSearchResult]=useState([])
    async function MovieSearch(movie){
      let response= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d687519299d61c8a9d38cca590708195&query=${movie}`)
      console.log(response.data.results);
      setSearchResult(response.data.results)
    }
const[searchValue,setSearchValue]=useState(null)
    function search(val) {
      setSearchValue(val.target.value);
      
    }




 



useEffect(()=>{
    getTopRatedMovies()
    getMovies()
    getMovies2()
  },[])


    return <>
    <div className="container mt-4  text-white">
        <h2 className=' h1 mb-4'>Top Rated Movies: </h2>
    <Slider {...settings}>
        {topratedMovie?.map((movie)=>
        <div key={movie.id} className=' text-white text-center'>
        <Link to={`/moviedetails/${movie.id}`}>  
        <img width={230} src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt="" />
        <p>{movie.title}</p>
        </Link> 
      </div>
        )}
      
    </Slider>
   
    </div>
    <section className=' mt-5'>
      <h1 className=' text-center text-white'>Movies</h1>
      <div className="searchContainer container mt-4"><input onChange={search} id='search' type="text" className=' search form-control rounded-5 w-50 m-auto ' placeholder=' Search' />
      <button onClick={ function(){MovieSearch(searchValue)}} className='search-btn'>search</button>
      </div>
      {searchValue?<div className="search-box container">
      <div className="row">
        {searchResult?.map((movie)=>
        <div className="col-md-3 mt-2">
        <img width={100} src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt="" />
        <p>{movie.title?.split(' ').slice(0,3).join(' ')}</p>
      </div>
        
        )}
        
      </div>
     </div>:null}
  
    <div className="container  d-flex text-white ">
    <div className=" trending d-flex flex-wrap  ps-4 pt-3">
        {movie.map((movie)=> <div key={movie.id} className=' m-3 text-center'> 
        <Link to={`/moviedetails/${movie.id}`}>  
        <img  width={120} src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt="" />
        <p className=' movieTitle'>{movie.title?.split(' ').slice(0,3).join(' ')}{movie.name}</p>
        </Link> 
        </div>
        )}
         {movie2.map((movie)=> <div key={movie.id} className=' m-3 text-center'> 
        <Link to={`/moviedetails/${movie.id}`}>  
        <img  width={120} src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt="" />
        <p className=' movieTitle'>{movie.title?.split(' ').slice(0,3).join(' ')}{movie.name}</p>
        </Link> 
        </div>
        )}
 
            
        </div>
       
    </div>
   

    </section>
    
    </>
}

export default Movie;