import React, {useState,useEffect} from 'react'
import { btn } from './Button';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Trending = () => {
  var settings = {
    dots: false,
    infinite: true,
    centerMode: true,
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
          dots: true
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
    const[ Trending,setTrending ] = useState([])
    const[ Button,setButton ] = useState("All")
    function getTrendingAll(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWRlMjA3YjI5ZmRhZjgwZjE4NzhkY2QyNWQ3NzUwYiIsInN1YiI6IjY0NmE1MmMxNTRhMDk4MDEzODY0NjRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEFYDwgwHfUYbjfRRmQj2HDvWrIpQMqSNkPhxL_vpTs'
            }
          };
          
          fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
            .then(response => response.json())
            .then(response =>setTrending(response.results))
            .catch(err => console.error(err));
    }
    function getTrendingMovie(){
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWRlMjA3YjI5ZmRhZjgwZjE4NzhkY2QyNWQ3NzUwYiIsInN1YiI6IjY0NmE1MmMxNTRhMDk4MDEzODY0NjRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEFYDwgwHfUYbjfRRmQj2HDvWrIpQMqSNkPhxL_vpTs'
        }
      };
      
      fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response => response.json())
        .then(response =>setTrending(response.results))
        .catch(err => console.error(err));
         
    }
    function getTrendingTv(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWRlMjA3YjI5ZmRhZjgwZjE4NzhkY2QyNWQ3NzUwYiIsInN1YiI6IjY0NmE1MmMxNTRhMDk4MDEzODY0NjRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEFYDwgwHfUYbjfRRmQj2HDvWrIpQMqSNkPhxL_vpTs'
            }
          };
          
          fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
            .then(response => response.json())
            .then(response =>setTrending(response.results))
            .catch(err => console.error(err));
    }

 
      useEffect(()=>{
        if(Button === "ALL"){
          getTrendingAll()
        }else if(Button === "Movie"){
          getTrendingMovie()
        }else{
          getTrendingTv()
        }
      },[Button])

    return <>
    <div className='Trending py-10 '>
        <div className='flex items-center gap-5 mb-5'>
            <p className='mr-5 text-2xl'>Tranding</p>
            <div className='btns  text-black'>
              {btn.map((ele)=>(
                <button key={ele.title}  onClick={()=>setButton(ele.title)}
                className={Button === ele.title ? "active" : ""}>
                  {ele.title}
                  </button> 
              ))}
            </div>
        </div>
      <div className='box'>
        <Slider  {...settings} >
            {Trending.map((rate)=>(
              <Link to={rate.media_type === "movie" ?  `/Movies/${rate.id}` :  `/Tv/${rate.id}`} key={rate.id} className='h-96 px-3 w-full relative' >
                <div className='h-full'>
                  <img className='h-full object-cover rounded-lg'  src={`https://image.tmdb.org/t/p/original${rate.backdrop_path}`} alt=''/>
                </div>
                <div className='text-black'>
                  {Button === "All" || "Tv"  ? <p>{rate.name}</p> : <p>{rate.title}</p>}
                  <p>{rate.release_date}</p>
                  <h2 className='flex items-center gap-1'>{Math.ceil(rate.vote_average)}<FaStar/><FaStar/><FaStar/></h2>
                </div>
              </Link>
            ))}
        </Slider>
      </div>
    </div>
    
    </>
}

export default Trending