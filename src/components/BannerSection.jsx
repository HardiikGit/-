import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';

function BannerSection() {
 return (
  <div className="mainBanner" id='Banner'>
   <div className="container mx-auto px-3">
    <div className="Banner-Content w-full h-screen flex flex-col gap-5 justify-center items-center lg:justify-center lg:text-left">
     <div className="BannerHeading text-center mb-5">
      <h1 className="text-3xl font-bold md:text-6xl ">Hey!<span className="block">
       I am Hardik - curious <br /> Web Desinger and Developer.
      </span></h1>
     </div>
     <div className="Banner-Social">
      <ul className="flex items-center gap-5">
       <li>
        <a href="#" className='text-xl h-12 w-12 rounded-full border-2 flex items-center justify-center shadow shadow-amber-50'>
         <FaLinkedinIn />
        </a>
       </li>
       <li>
        <a href="#" className='text-xl h-12 w-12 rounded-full border-2 flex items-center justify-center shadow shadow-amber-50'>
         <FaGithub />
        </a>
       </li>
       <li>
        <a href="#" className='text-xl h-12 w-12 rounded-full border-2 flex items-center justify-center shadow shadow-amber-50'>
         <LuMail />
        </a>
       </li>
      </ul>
     </div>
    </div>
   </div>
  </div>
 )
}

export default BannerSection;

// Default CSS < 640px
// sm: 640px --> 767px
// md: 768px --> 1023px
// lg: 1024px --> 1279px
// xl: 1280px --> 1535px
// 2xl: 1536px -- Max Screen