import { ClassNames } from '@emotion/react'
import { Carousel } from 'react-bootstrap'
import React from 'react'
import LandingNav from '../components/LandingNav'
import './Home.css'

function Home() {
  return (
    // TODO: Make Homepage
    <>
      <h1 className="test">Register Above and get access to news and forums</h1>
      {/* <LandingNav /> */}
      <div className="home-body">
        {/* <img src="https://i.pinimg.com/originals/1d/65/f0/1d65f0e3d26176ce06025426082485f9.gif"></img> */}
        {/* <img src="https://c.tenor.com/cdBr2mPvHcwAAAAd/mizzou-football.gif"></img> */}
      </div>
      <Carousel fade controls={false} pause={false} indicators={false} interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c.tenor.com/F4-i1leMvrUAAAAd/dunk-slam-dunk.gif"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/1d/65/f0/1d65f0e3d26176ce06025426082485f9.gif"
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media4.giphy.com/media/SxMF64Np2fUCMlcUdE/giphy-downsized-large.gif"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media1.giphy.com/media/CxeRpYtRgC836X95ru/giphy.gif"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="https://c.tenor.com/142oibHgfWwAAAAC/atlanta-united-goal.gif"
            src="https://wallpapercave.com/wp/wp6819375.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home
