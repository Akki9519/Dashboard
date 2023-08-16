import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Features from './Features'
import Product from './Product'
import Content from './Content'
import { CarouselDefault } from './Carousel'

const Dashboard = () => {
  return (
    <div>
    <Navbar/>
    <CarouselDefault/>
    <div className="text-2xl font-bold italic text-center">Product & Services</div>
    <Product/>
    <Content/>
    <div className="text-2xl font-bold italic text-center">Customer Review</div>
    <Features/>
    <Footer/>
    </div>
  )
}

export default Dashboard