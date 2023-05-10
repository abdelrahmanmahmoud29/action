import axios from 'axios';
import React, { useEffect, useState } from 'react';
function People() {

        const[movie,setMovies]=useState([])
        const[movie2,setMovies2]=useState([])
        async function getMovies(){
           let {data}=await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=f1aca93e54807386df3f6972a5c33b50&page=1`) 
           setMovies(data.results)
    }
        async function getMovies2(){
           let {data}=await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=f1aca93e54807386df3f6972a5c33b50&page=2`) 
           setMovies2(data.results)
           console.log(search);
           
    }
const[searchResult,setSearchResult]=useState([])
    async function MovieSearch(movie){
      let response= await axios.get(`https://api.themoviedb.org/3/search/person?api_key=d687519299d61c8a9d38cca590708195&query=${movie}`)
      console.log(response.data.results);
      setSearchResult(response.data.results)
    }
const[searchValue,setSearchValue]=useState(null)
    function search(val) {
      setSearchValue(val.target.value);
      
    }




 



useEffect(()=>{
    getMovies()
    getMovies2()
  },[])


    return <>
    <section className=' mt-5'>
      <h1 className=' text-center text-white'>People</h1>
      <div className="searchContainer container mt-4"><input onChange={search} id='search' type="text" className=' search form-control rounded-5 w-50 m-auto ' placeholder=' Search' />
      <button onClick={ function(){MovieSearch(searchValue)}} className='search-btn'>search</button>
      </div>
      {searchValue?<div className="search-box container text-white">
      <div className="row">
        {searchResult?.map((movie)=>
        <div className="col-md-3 mt-2">
        <img width={100} src={`https://image.tmdb.org/t/p/w500`+movie.profile_path} alt="" />
        <p>{movie.original_name?.split(' ').slice(0,3).join(' ')}</p>
      </div>
        
        )}
        
      </div>
     </div>:null}
  
    <div className="container  d-flex text-white ">
    <div className=" trending d-flex flex-wrap  ps-4 pt-3">
        {movie.map((movie)=> <div key={movie.id} className=' m-3 text-center'> 
        <img  width={120} src={`https://image.tmdb.org/t/p/w500`+movie.profile_path} alt="" />
        <p className=' movieTitle'>{movie.title?.split(' ').slice(0,3).join(' ')}{movie.name}</p> 
        </div>
        )}
         {movie2.map((movie)=> <div key={movie.id} className=' m-3 text-center'> 
         
        <img  width={120} src={`https://image.tmdb.org/t/p/w500`+movie.profile_path} alt="" />
        <p className=' movieTitle'>{movie.title?.split(' ').slice(0,3).join(' ')}{movie.name}</p>
        
        </div>
        )}
 
            
        </div>
       
    </div>
   

    </section>
    
    </>
}

export default People;