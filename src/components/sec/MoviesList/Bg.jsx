import React, {useEffect, useState } from 'react'
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
const Bg = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
  };
  let [Movies,setMovies] = useState([])
  function getMovies(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWRlMjA3YjI5ZmRhZjgwZjE4NzhkY2QyNWQ3NzUwYiIsInN1YiI6IjY0NmE1MmMxNTRhMDk4MDEzODY0NjRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEFYDwgwHfUYbjfRRmQj2HDvWrIpQMqSNkPhxL_vpTs'
        }
      };
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.error(err));

}
useEffect(()=>{
    getMovies()
  },[])

  return <>
    
    <div className='bg-carousel w-full overflow-x-hidden'>
    <Slider  {...settings}>
            {Movies.map((Movie)=> 
                <div key={Movie.id} className='relative h-[calc(100vh-64px)] w-full'>
                    <div className='h-full'>
                        <img className='h-full w-full object-cover'  src={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`} alt=''/>
                    </div>
                    <div className='absolute text-white px-5  w-full sm:w-3/4 bottom-10 left-2  sm:bottom-20 sm:left-20  z-10'>
                    <h2>{Movie.original_title}</h2>
                    <h2>{Movie.release_date}</h2>
                    <h2 className='flex items-center gap-1'>{Math.ceil(Movie.vote_average)}<FaStar/><FaStar/><FaStar/></h2>
                    <h2>{Movie.overview}</h2>
                  </div>
                </div>
            )}
        </Slider>
     </div>
  </>
}

export default Bg