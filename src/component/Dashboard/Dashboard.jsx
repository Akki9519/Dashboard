import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Features from './Features'
import Product from './Product'
import Content from './Content'
import { Carousel } from "@material-tailwind/react";

const Dashboard = () => {
  return (
    <div>
    <Navbar/>
    
    <div className="rounded-xl w-full pl-32 flex flex-row">
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-96 w-96  rounded-lg m-5"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-96 w-96   m-5 rounded-lg"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-96 w-96   m-5 rounded-lg"
      />
    </div>
  
    <div className="text-2xl font-bold italic text-center">Product & Services</div>
    <div className="grid grid-cols-1 sm:grid-cols-3">
    <Product/>
    <Product/>
    <Product/>
    </div>
    <Content/>
    <div className="text-2xl font-bold italic text-center">Customer Review</div>
    <Features/>
    <Footer/>
    </div>
  )
}

export default Dashboard