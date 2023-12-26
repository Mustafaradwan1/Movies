import React, { useEffect, useState } from 'react'
import { MdMovieFilter } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const Navbar = () => {
  const [Loading,setLoading] = useState(true)
  const [Active,setActive] = useState(false)
  const [Data,setData] = useState("")
  const [Movies,setMovies] = useState([])
  function Searchapi(){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWRlMjA3YjI5ZmRhZjgwZjE4NzhkY2QyNWQ3NzUwYiIsInN1YiI6IjY0NmE1MmMxNTRhMDk4MDEzODY0NjRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEFYDwgwHfUYbjfRRmQj2HDvWrIpQMqSNkPhxL_vpTs'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/search/movie?query=${Data}&include_adult=false&language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }
  useEffect(()=>{
    Searchapi()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[Data, Movies])
  return <>
    <div className='navbar flex justify-between items-center px-5 w-full h-16'>
      <Link to="/" className='flex items-center gap-1 text-white'>
        <div className='icon rounded-full p-2 bg-gradient-to-r from-purple-500 to-pink-500'><MdMovieFilter/></div>
        <h2 className='text-rose-500 font-bold text-xl'>movix</h2>
      </Link>
      <div className='flex items-center gap-5 font-bold'>
      <Link to="/Movies" className='flex items-center gap-1 text-white'>
        <h2 className='text-md'>Movies</h2>
      </Link>
      <Link to="/Tv" className='flex items-center gap-1 text-white'>
        <h2 className='text-md'>Tv</h2>
      </Link>
      <div className='flex relative items-center cursor-pointer text-lg'>
        {Active ? <input type='search' className=' rounded-full mr-3 py-1 px-5  outline-none text-rose-500'
        onChange={(e)=>{
          setData(e.target.value)
        }} placeholder='search here' />
        :
        <input type='search' className=' w-0' placeholder='search here' />
        }
        <IoSearchOutline className='text-white text-2xl' onClick={()=>setActive(!Active)} />
        {Data ? <div className='absolute top-10 z-40 bg-black '>
          {Movies.map((ele)=>(
           <Link to={`/Movies/${ele.id}`} key={ele.id} className='mb-5 px-5 py-3 SearchCard flex gap-3 items-center'>
            <div className='image h-14 w-16'>
                <img className='w-full rounded-md h-full object-cover' src={`https://image.tmdb.org/t/p/original${ele.backdrop_path}`} alt=''/>
              </div> 
             <p className='text-white text-sm'>{ele.title.slice(0,30)+". . ."}</p>
           </Link>
          ))}
        </div> : ""}
      </div>
      </div>
    </div>
  </>
}

export default Navbar