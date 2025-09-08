import React, { useEffect, useState } from 'react'
import { assets} from '../assets/assets'
const Navbar = () => {
  const [showMenu , setShowMenu] = useState(false);
  useEffect(()=>{
  if(showMenu){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }
  return ()=>{
       document.body.style.overflow = 'auto'
  }
  }, [showMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>

        <div className="container mx-auto flex  justify-between items-center py-4 px-6 md:px-4 lg:px-16 bg-transparent">
            <img src={assets.logo} alt="" className='' />
            <ul className='hidden md:flex gap-10 md:gap-7 lg:gap-15 xl:gap-18 text-white '>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Header" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
<button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
<img src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' onClick={()=>setShowMenu(true)}/>
        </div>




     {/* ---------- mobile menu -------  */}
     <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'hidden'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
     
      <div className='flex justify-end p-6 cursor-pointer' onClick={()=>setShowMenu(false)}>

        <img src={assets.cross_icon} alt="" className='w-6' />
      </div>
      <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-xl font-medium'>
        <a href="#Header" className='px-4 py-2 rounded-full inline-block ' onClick={()=>setShowMenu(false)}>Home</a>
        <a href="#About" className='px-4 py-2 rounded-full inline-block ' onClick={()=>setShowMenu(false)}>About</a>
        <a href="#Projects" className='px-4 py-2 rounded-full inline-block ' onClick={()=>setShowMenu(false)}>Projects</a>
        <a href="#Testimonials" className='px-4 py-2 rounded-full inline-block ' onClick={()=>setShowMenu(false)}>Testimonials</a>
      </ul>
      
     </div>

    </div>
  )
}

export default Navbar