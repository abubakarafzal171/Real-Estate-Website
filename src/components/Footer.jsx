import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
    const containerRef = useRef(null)

          useGSAP(
    ()=>{

 gsap.from(containerRef.current , {
    y:100,
  opacity: 0,
  duration: 1,
  ease: 'power1.out',
   scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%",
      },
    stagger:{
    each: 0.2,
  }
 });

 }, 
  { scope: containerRef });



  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'  ref={containerRef}>
            <div className='w-full md:w-1/3 mb-8 md:mb-0 '>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>


            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                    <a href="#About" className='hover:text-white'>About Us</a>
                    <a href="#Contact" className='hover:text-white'>Contact Us</a>
                    <a href="#Projects" className='hover:text-white'>Projects</a>
                </ul>

            </div>


            <div className='w-full md:w-1/3 '>
 <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
 <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
 <div className='flex-col md:flex-row space-x-2 space-y-2'>
    <input type="email" placeholder='Enter Your Email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
    <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
 </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'> 
            Copyright 2025 &copy; Abubakar. All Right Reserved.
        </div>
    </div>
  )
}

export default Footer