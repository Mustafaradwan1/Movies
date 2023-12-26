import React, {useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Bg = () => {
  let [Movies,setMovies] = useState([])
  function getMovies(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWRlMjA3YjI5ZmRhZjgwZjE4NzhkY2QyNWQ3NzUwYiIsInN1YiI6IjY0NmE1MmMxNTRhMDk4MDEzODY0NjRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEFYDwgwHfUYbjfRRmQj2HDvWrIpQMqSNkPhxL_vpTs'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));
}

useEffect(()=>{
    getMovies()
  },[])
console.log(Movies)
  return <>
    <div className='cards flex flex-wrap'>
      {Movies.map((movie)=>(
            <Link to={`/Movies/${movie.id}`} className=' card lg:w-1/4 md:w-1/3 sm:w-1/2  p-2' key={movie.id}>
                <div className='box cursor-pointer relative h-96'>
                  <div className='relative movie-img w-full h-full z-0'>
                    <img className='h-full object-cover w-full' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt=''/>
                  </div>
                  <div className='absolute card-text h-full  hidden text-white p-5  w-full z-10 top-0 flex-col justify-end'>
                    <h2 className=''>{movie.original_title}</h2>
                    <h2 className=''>{movie.release_date}</h2>
                    <h2 className='flex items-center gap-1'>{Math.ceil(movie.vote_average)}<FaStar/><FaStar/><FaStar/></h2>
                    <h2 className=''>{movie.overview.slice(0,50) + ". . ."}</h2>
                  </div>
                </div>
            </Link>
      ))}
     </div>
  </>
}

export default Bg