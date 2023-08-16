import React from "react";
import ig1 from './../../assests/1.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import team from './../../assests/21.jpg'
import team1 from './../../assests/team1.jpg'
import code from './../../assests/22.jpg'


export function CarouselDefault() {
  return (
    <>
      <Carousel showArrows={true} >
        <div>
          <img src={team} alt="logo"/>
        </div>
        <div>
          <img src={code} alt="logo"/>
        </div>
        <div>
          <img src={team1} alt="logo"/>
        </div>
      </Carousel>

    </>

  );
}