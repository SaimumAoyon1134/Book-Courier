import React from 'react'
import ContinuousSwiper from '../Shared/Swiper'
import Latest from './Latest'
import Coverage from './Coverage'
import Why from './Why'
import More from './More'

const Home = () => {
   
  return (
    <div>
        <ContinuousSwiper/>
        <Latest/>
        <Coverage/>
        <Why/>
        <More/>
    </div>
  )
}

export default Home