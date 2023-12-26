import React from 'react'
import Bg from './Bg'
import Trending from './Trending'
import Card from './Card'
const Main = () => {
  return (
    <div>
        <Bg/>
        <div className='lg:px-32 md:px-20 sm:px-10 p-5'>
        <Trending/>
        <Card/>
        </div>
  
    </div>
  )
}

export default Main