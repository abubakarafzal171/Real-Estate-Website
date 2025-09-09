import React   , {useRef} from 'react'
import { toast } from 'react-toastify';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
const [result, setResult] = React.useState("");
const containerRef = useRef(null)
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e3e19623-cd02-4b9a-8929-61af33da0b9c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
     toast.success('Form Submitted Successfully')
      event.target.reset();
    } else {
      console.log("Error", data);
    toast.error(data.message)
      setResult("");

    }
  };

 useGSAP(
    ()=>{

 gsap.from(containerRef.current , {
  x:-200,
  opacity: 0.5,
  duration: 1,
  ease: 'power1.out',
   scrollTrigger: {
        trigger: containerRef.current,
        start: "top 65%",
        scrub: 1.5,
      },
        stagger:{
    each: 0.2,
  }
  
 });

 }, 
  { scope: containerRef });



  return (
<div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact' ref={containerRef}>

 <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let’s Build Your Future Together</p>

<form className='max-w-2xl mx-auto text-gray-600 pt-8' onSubmit={onSubmit}>
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>Your Name
        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text"  placeholder='Your Name' name='Name' required />
         </div>

     <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text"  placeholder='Your Email' name='Email' required />
         </div>
    </div>

    <div className='my-6 text-left'>
        Message
        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Enter Your Message' required></textarea>
    </div>

    <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer'>{result ? result : 'Send Message'}</button>
</form>


    </div>
  )
}

export default Contact