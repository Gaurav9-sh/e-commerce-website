import React from 'react'
import TopCarousel from './TopCarousel'
import Sidebar from './Sidebar'
import SalesSection from './SalesSection'
import Category from './Category'
import BestSelling from './BestSelling'
import Frame from './Frame'
import OurProducts from './OurProducts'
import FastDelivery from './FastDelivery'

const HomePage = () => {
  return (
    <div>
      <TopCarousel/>
      <Sidebar/>
      <SalesSection/>
      <Category/>
      <BestSelling/>
      <Frame/>
      <OurProducts/>
      <FastDelivery/>
    </div>
  )
}

export default HomePage