import { useState, useEffect } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa';
import { FaFolder } from 'react-icons/fa';

function ScrollNav() {

 const [isSticky, setIsSticky] = useState(false)

 useEffect(() => {
  const handleScroll = () => {
   if (window.scrollY > 70) setIsSticky(true)
   else setIsSticky(false)
  };

  window.addEventListener("scroll", handleScroll)
  return () =>
   window.removeEventListener("scroll", handleScroll)
 }, []);

 return (
  <div className="container mx-auto px-3">
   <div className={`Navigation2 w-3/4 mx-auto border-1 rounded-[50px] p-5 fixed right-0 left-0 bg-black z-50 transition-all duration-500 lg:hidden
    ${isSticky ? 'top-5' : '-top-80'}`}>
    <ul className='flex items-center justify-evenly'>
     <li>
      <a href="#Banner" className='text-xl'>
       <AiOutlineHome />
      </a>
     </li>
     <li>
      <a href="#about" className='text-xl'>
       <FaRegUser />
      </a>
     </li>
     <li>
      <a href="#" className='text-xl'>
       <FaCode />
      </a>
     </li>
     <li>
      <a href="#" className='text-xl'>
       <FaFolder />
      </a>
     </li>
    </ul>
   </div>
  </div>
 )
}

export default ScrollNav;