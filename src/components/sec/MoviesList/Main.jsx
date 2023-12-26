import React from 'react'
import Bg from './Bg'
import TopRated from './TopRated'
import UpComing from './UpComing'
import Popular from './Popular'

const Main = () => {
  return (
    <div>
        <Bg/>
        <div className='lg:px-32 md:px-20 sm:px-10 p-5'>
          <TopRated/>
          <UpComing/>
          <Popular/>
        </div>
  
    </div>
  )
}

export default Main