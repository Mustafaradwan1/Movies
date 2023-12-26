import React from 'react'
import Bg from './Bg'
import TopRated from './TopRated'
import Popular from './Popular'
import OnTheAir from './OnTheAir'
const Main = () => {
  return (
    <div>
        <Bg/>
        <div className='lg:px-32 md:px-20 sm:px-10 p-5'>
          <TopRated/>
          <OnTheAir/>
          <Popular/>
        </div>
  
    </div>
  )
}

export default Main