import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import { AiOutlineCloudDownload } from 'react-icons/ai';

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
     <div className="Banner-Social mt-10">
      <ul class="wrapper flex gap-8 justify-center items-center">
       <li class="icon relative LinkedIn">
        <span class="tooltip absolute top-0 -left-[15px] text-sm bg-white text-black rounded-sm py-1 px-3 opacity-0">LinkedIn</span>
        <a href="#" className='text-xl h-12 w-12 bg-white text-black rounded-full flex items-center justify-center relative z-20'>
         <FaLinkedinIn />
        </a>
       </li>
       <li class="icon Mail relative">
        <span class="tooltip absolute top-0 -left-[2px] text-sm bg-white text-black rounded-sm py-1 px-3 opacity-0">Mail</span>
        <a href="#" className='text-xl h-12 w-12 bg-white text-black rounded-full flex items-center justify-center relative z-20'>
         <LuMail />
        </a>
       </li>
       <li class="icon relative Github">
        <span class="tooltip absolute top-0 -left-[8px] text-sm bg-white text-black rounded-sm py-1 px-3 opacity-0">Github</span>
        <a href="#" className='text-xl h-12 w-12 bg-white text-black rounded-full flex items-center justify-center relative z-20'>
         <FaGithub />
        </a>
       </li>
       <li class="icon relative Download">
        <span class="tooltip absolute top-0 -left-[14px] text-sm bg-white text-black rounded-sm py-1 px-3 opacity-0">Resume</span>
        <button href="#" className='text-xl h-12 w-12 bg-white text-black rounded-full flex items-center justify-center relative z-20 cursor-pointer'>
         <AiOutlineCloudDownload />
        </button>
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