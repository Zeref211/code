import React, { useEffect } from 'react'
import Header from './Header'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Gioithieu from './Gioithieu';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
 
}

function Home() {

  


  return (
    <div>
        <>
        <Header/>
<Carousel>
      <Carousel.Item>
      <img src="https://gshock.casio.com/content/casio/locales/vn/vi/brands/gshock/_jcr_content/root/responsivegrid/container/carousel/image_1367458301.casiocoreimg.jpeg/1677718041578/hero-pc.jpeg" alt="Third slide" />

        {/* <ExampleCarouselImage text="First slide" /> */}
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://gshock.casio.com/content/casio/locales/vn/vi/brands/gshock/_jcr_content/root/responsivegrid/container/carousel/image_1367458301_cop.casiocoreimg.jpeg/1699336402915/kv-1920x816.jpeg" alt="Second slide" />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="https://gshock.casio.com/content/casio/locales/vn/vi/brands/gshock/_jcr_content/root/responsivegrid/container/carousel/image.casiocoreimg.jpeg/1662438481640/%E7%B7%B4%E7%BF%92%E7%94%A8-pc-b2100-pc-%E5%A4%89%E6%8F%9B.jpeg" alt="First slide" />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    {/* hết banner */}

  {/* Services*/}
  <section className="page-section" id="services">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Sản phẩm</h2>
       
      </div>
      <Gioithieu/>
      {/* <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">E-Commerce</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-laptop fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">Responsive Design</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-lock fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">Web Security</h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
      </div> */}
    </div>
  </section>
 
</>


    </div>
  )
}

export default Home