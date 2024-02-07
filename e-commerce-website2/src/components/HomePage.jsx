import React from 'react'
import TopCarousel from './TopCarousel'
import Sidebar from './Sidebar'
import SalesSection from './SalesSection'
import Category from './Category'
import BestSelling from './BestSelling'
import Frame from './Frame'
import OurProducts from './OurProducts'
import FastDelivery from './FastDelivery'
import Navbar from './Navbar'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
      <TopCarousel/>
      <Sidebar/>
      <SalesSection/>
      <Category/>
      <BestSelling/>
      <OurProducts/>
      <FastDelivery/>
    </div>
  )
}

export default HomePage