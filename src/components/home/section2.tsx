import Image from 'next/image';
import { TiTick } from "react-icons/ti";

export default function Section2(){
    return(
        <>
        {/* body section 2 */}
<div className='w-full 2xl:w-[1920px] bg-[#0D0D0D]  text-white h-auto'>

{/* parent section 2 */}
 <div className='w-full lg:flex 2xl:w-[1320px] h-[700px] md:mx-[50px] pt-0 2xl:mx-[300px] xl:pt-[130px]'>

 
 {/* left side */}

 <div className='mx-5 w-[150px] flex-cols-1 h-30 xl:w-[562px] xl:h-[562px] '>
      <h1 className='w-[300px] h-[50px] text-3xl md:text-3xl xl:text-5xl font-bold xl:w-[446px] xl:h-[110px]'><span className='text-[#FF9F0D]'>We</span> Create the best foody product</h1>
     <p className='mt-10 w-[300px] h-[250px] lg:w-[526px] lg:h-[130px] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

    {/* benefits */}

<div className='mt-8 '>

  <div className='flex gap-4 leading-5 lg::leading-[42px]'>
  <TiTick  className='mt-3 w-20 h-3'/>
  <p className='w-[300px] h-20'>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
  </div>

  <div className='flex gap-4 leading-5 lg:leading-[42px]'>
  <TiTick className='mt-5 w-20 h-3'/>
  <p className='w-[300px] mt-5 h-20'>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
  </div>

  <div className='flex gap-4 leading-5 lg:leading-[42px]'>
  <TiTick className='mt-5 w-20 h-3'/>
  <p className='w-[300px] mt-5 h-20'>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
  </div>

  <button className='bg-[#FF9F0D] text-white mt-3 md:h-[60px] px-5 py-3 mx-10 w-[150px] md:w-[190px] rounded-lg lg:mt-10'>Read more</button>
     
     </div>           
 
 </div>

      {/* right side */}

      <div className='lg:w-[660px] mt-5 h-[562px]'>
        <Image src='/homeimg2.png' alt='' width={660} height={330} className='w-[320px] h-[300px] object-cover'/>
        <div className='flex-cols-1 lg:flex '>
          <Image src='/homeimg3.png' alt='' width={322} height={194} className='w-[320px] h-[300px] object-cover'/>
          <Image src='/homeimg4.png' alt='' width={322} height={194} className='w-[320px] object-cover'/>
        </div>
      </div>
      </div>
      </div>
      </>
    )
}
