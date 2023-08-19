


import React from 'react'
import team from './../../assests/21.jpg'
 import team1 from './../../assests/team1.jpg'
 import code from './../../assests/22.jpg'
const Carousel = () => {
  return (
    <>
<div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
        {/* <ListIcon onClick={()=>{setShow(!show)}}/> */}
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block"
              src={team}
              alt="First slide"
              style={{ height: "660px", width: "1600px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              src={team1}
              alt="Second slide"
              style={{ height: "660px", width: "1600px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block"
              src={code}
              alt="Third slide"
              style={{ height: "660px", width: "1600px" }}
            />
          </div>
        </div>
        <a
          className="carousel-control-prev  "
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          style={{ paddingBottom: "100px" }}
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="sr-only ">Previous</span>
        </a>
        <a
          className="carousel-control-next "
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          style={{ paddingBottom: "100px" }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  )
}

export default Carousel
