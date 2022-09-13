import React from 'react';
import { useState,useEffect } from 'react';
import Carousel from "framer-motion-carousel";
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import './Styles/Home.css'
import imagefire from '../Images/imagefire.png'

const colors = ['container','container22'];



function Home (){
const [carousel, setCarousel] =useState('')

 setTimeout(()=>{
setCarousel('')
  },3500)
    return ( 
    <>
        <Navbar/>
    <div data-interval='3000' className='home-container'> 
           <Carousel>
{colors.map((item) => (
        <div className='carousel-width' >{carousel}
        <div className="carousel-slide"> 
          <div className='container'>
	          <div className='carousel-container' data-scrollax-parent="true">
		          <div className='home-main-text'>
		          	<div className='home'>
		          		<span className='text-hello'>Hello!</span>
			            <h1 className='text-name'>I'm <span>Gregory Gregory</span></h1>
			            <h2 className='text-skill'>A Freelance Web Developer</h2>
			            <p><a href="#contact-section" className='link1'>Hire me</a> <a href="#projects-section" className='link2'>My works</a></p>
		            </div>
		          </div>
                  <div className='image-container'>
                    <img className='imagefire' src={imagefire} alt="my pic" />
                  </div>
	      	</div>
	        </div>
           <div className='container22'>
	          <div className='carousel-container' data-scrollax-parent="true">
		          <div className='home-main-text'>
		          	<div className='home'>
		          		<span className='text-hello'>Hello!</span>
			            <h1 className='text-name'>I'm <span>Gregory Gregory</span></h1>
			            <h2 className='text-skill'>Developer</h2>
			            <p><a href="#contact-section" className='link1'>Hire me</a> <a href="#projects-section" className='link2'>My works</a></p>
		            </div>
		          </div>
                  <div className='image-container'>
                    <img className='imagefire' src={imagefire} alt="my pic" />
                  </div>
	      	</div>
          </div>
	        </div>
             <h1>hello world</h1>
        </div>
      ))}
    </Carousel>
    </div>
  </>
     );
}
 
export default Home;