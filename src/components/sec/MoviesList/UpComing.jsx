import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const UpComing = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    let [Rated,setRated] = useState([])
    function getRated(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWRlMjA3YjI5ZmRhZjgwZjE4NzhkY2QyNWQ3NzUwYiIsInN1YiI6IjY0NmE1MmMxNTRhMDk4MDEzODY0NjRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEFYDwgwHfUYbjfRRmQj2HDvWrIpQMqSNkPhxL_vpTs'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setRated(response.results))
            .catch(err => console.error(err));
  }
  useEffect(()=>{
    getRated()
  },[])
  return<>
    <div className='my-10'>
        <p className='text-2xl mb-4'>UpComing</p>
        <Slider  {...settings}>
            {Rated.map((Movie)=> 
                <Link to={`/Movies/${Movie.id}`} key={Movie.id} className='h-96 px-2'>
                    <div className='h-full'>
                        <img className='h-full object-cover rounded-lg'  src={`https://image.tmdb.org/t/p/original${Movie.backdrop_path}`} alt=''/>
                    </div>
                    <div>
                        <p>{Movie.title}</p>
                    </div>
                </Link>
            )}
        </Slider>
    </div>
  </>
}

export default UpComing