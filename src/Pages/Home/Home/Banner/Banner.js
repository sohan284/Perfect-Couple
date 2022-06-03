import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/banner1.jpg';
import banner2 from '../../../../images/banner2.jpg';
import banner3 from '../../../../images/banner3.jpg';
import './banner.css'

const Banner = () => {
    return (
       <div className='container banner'>
                <Carousel>
  <Carousel.Item>
    <img height={500}
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Pre-Wedding</h3>
      <p>In pre wedding service you have to give us some advance cash for booking</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height={500}
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Post-Wedding</h3>
      <p>You have to confirm use before minimum 10 days.We will try to give best service</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height={500}
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Engagement</h3>
      <p>Advace booking will got some free service.This opportunity is only for advance booking</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </div>
    );
};

export default Banner;