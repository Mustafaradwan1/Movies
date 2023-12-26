import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SingleMovie = () => {
    const {id} = useParams()
    const [Loading,setLoading] = useState(true)
    const [Single,setSingle] = useState([])
    function SingleData(){
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWRlMjA3YjI5ZmRhZjgwZjE4NzhkY2QyNWQ3NzUwYiIsInN1YiI6IjY0NmE1MmMxNTRhMDk4MDEzODY0NjRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEFYDwgwHfUYbjfRRmQj2HDvWrIpQMqSNkPhxL_vpTs'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => setSingle(response))
            .catch(err => console.error(err));
    }
    useEffect(()=>{
        SingleData()
        setTimeout(()=>{
            setLoading(false)
        },1500)
    })
  return <>
  <div className='SingleMovie'>
    <div className='flex lg:flex-row-reverse flex-wrap lg:px-32 md:px-20 sm:px-10 px-5 py-10 relative z-10'>
        <div className='flex lg:flex-row-reverse flex-wrap lg:flex-1 w-full md:px-5'>
        {Loading ?
        <div className='image sm:h-96 h-96 m-auto mb-10 w-2/3 md:w-1/3'>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton duration={2}className="h-full" />
            </SkeletonTheme>
        </div> 
        : 
            <div className='image  sm:h-96 h-96 m-auto mb-10 w-2/3 md:w-1/3'>
                <img className='w-full h-full rounded-lg' src={`https://image.tmdb.org/t/p/original${Single.poster_path}`} alt='' />
            </div>
        }
        <div className='SingleText px-5  sm:flex-1 w-full text-white'>
            <h2 className='text-xl mb-10'>{Single.title}</h2>
            <p className='text-xl mb-5'>overview : <span className='text-sm text-slate-400'>{Single.overview}</span></p>
            <div className='flex flex-wrap'>
                <button className= 'mt-4 bg-red-500 mr-2 py-2 px-5 rounded-lg text-sm  '>genre</button>
            {Single.genres?.map((btn)=>(
                <button className= 'mt-4 bg-black mr-2 py-2 px-5 rounded-lg text-sm  hover:text-slate-400' key={btn.id}>{btn.name}</button>
                ))}
            </div>
            <p>{Single.release_date}</p>
            <p>{Math.round(Single.vote_average)}</p>
        </div>

        </div>
        <div className='btns lg:w-44 sm:w-1/2 w-full mt-10  text-white'>
            <button className='flex justify-center font-bold rounded-lg text-lg flex-col items-center w-full h-28 mb-5 bg-red-500'>
                <FaRegCirclePlay/>
                مشاهدة الان
            </button>
            <button className='flex justify-center font-bold rounded-lg text-lg flex-col items-center w-full h-28 bg-green-500'>
                <IoMdCloudDownload  />
                تحميل الان
            </button>
        </div>
    </div>
  </div>
  
  </>
}

export default SingleMovie