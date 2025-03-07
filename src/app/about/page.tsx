import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import Image from 'next/image';
import { IoPlayOutline } from "react-icons/io5";



export default function Aboutus() {
  return (
     <>
    
    <Navbar />
         {/* // Main div  */}
            <div className='relative w-full 2xl:w-[1920px] text bg-white' >
         {/* 2nd div bg-Image */}
             <div className='w-full 2xl:w-[1920px] object-fit text-center'>
                 <Image 
                src='/bg-image.png'
                alt=''
                width={1920}
                height={410}
                layout='responsive'

              

                />
                <div className='w-full text-white absolute text-center top-1 md:top-5 lg:top-40 left-0 items-center'>
                    <h1 className='text-2xl md:text-3xllg:text-5xl font-bold'>About Us</h1>
                    <h5 className='py-3'>Home &gt;<span className='text-orange-400'>About</span></h5>
                </div>
            </div>

            
            
    


    <div>
      {/* Frist Section: Content and Buttons */}
      <section className="text-white body-font">
        <div className="container mx-auto md:flex px-5 py-24">
          <div className="lg:flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
            <Image
              className="object-cover object-center w-336px h-536px mt-530px ml-300px rounded-[6px]"
              alt="hero"
              src= "/about1.png" width={309} height={536}
            />
          </div>
          {/* Right Images */}
          <div className="lg:flex flex-col space-y-2 md:space-x-2 mt-2 ml-2">
            <Image
              className="object-cover object-center w-309px h-271px mt-584px ml-660px radius-6px"
              alt="image2"
              src="/about2.png"
              width={309} height={271} 
            />
            {/* Bottom Image */}
            <Image
              className="object-cover object-center w-309px h-382px mt-882px ml-660px radius-6px"
              alt="image3"
              src="/about3.png"
              width={309} height={382} 
            />
          </div>
          {/* Text Content and Buttons */}
          <div className="pl-3 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 lg:flex flex-col md:items-start md:text-left items-center ">
            <h1 className="text-sm pl-3 mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="w-[300px] pl-3 text-black title-font text-xl md:text-2xl lg:text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="w-[300px] pl-3 mb-8 leading-relaxed mt-8 text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex md:justify-center">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex text-black  border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 block" /> {/* Icon on the left */}
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="w-full text-white body-font">
        <div className="pl-9 container lg:mx-auto flex  py-24 items-center md:justify-center flex-col w-[300px] lg:w-[579px]">
            <h1 className="w-[300px] md:text-center text-black text-xl lg:text-3xl font-bold mt-3">Why Choose Us</h1>
            <p className="w-[300px] text-black md:text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
            pellentesque bibendum non dui volutpat fringilla bibendum.</p>
          <Image
            className="mb-10 object-cover object-center lg:w-[1320px] h-[386px] lg:h-[500px] lg:mt-1552px lg:ml-300px mt-10"
            alt="hero"
            src = "/about4.png"
            width={1320} height={386}
            
          />
        </div>
      </section>
      {/* Thrid section */}
      <section className="text-white body-font">
  <div className="container px-3 py-20 mx-auto">
    <div className="md:flex w-[300px] md:w-full flex-wrap m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full  flex justify-center items-center  flex-col border-2 rounded-lg overflow-hidden">
          <Image
        
            src="/about5.png"
            width={80} height={80}
            alt="blog"
            
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            BEST CHEF
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
            </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 flex justify-center items-center  flex-col rounded-lg overflow-hidden">
          <Image
            className=""
            src="/about6.png"
            width={80} height={80} 
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            120 Item food
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2  flex justify-center items-center  flex-col rounded-lg overflow-hidden">
          <Image
            className=" flex flex-col justify-center items-center"
            src="/about7.png"
            width={80} height={80}
            alt="blog"
            
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            Clean Environment
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div> 
</div>
  <Footer />
     </>
    
  )
  }
