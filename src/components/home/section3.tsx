import Link from 'next/link';
import Image from 'next/image';
const Section3 = () => {
    return(
        <>
        <div className='w-full  bg-[#0D0D0D] h-auto  2xl:w-[1920px]'>
        <div className='w-[1320px] flex-cols-1 text-white md:mx-10 2xl:mx-[300px] pt-[900px] xl:pt-[130px] h-auto lg:h-[803px]'>
                <h1 className='text-xl xl:text-5xl font-bold w-[1320px] h-[110px] text-center'><span className='text-[#FF9F0D]'>Ch</span>oose Food Items</h1>

                <Link href='/menu'> <div className=' lg:flex flex-cols-1'>
                    <Image src='/homeimg5.png' alt='' width={306} height={329} className='object-cover'/>
                    <Image src='/homeimg6.png' alt='' width={306} height={329} className='object-cover'/>
                    <Image src='/homeimg7.png' alt='' width={306} height={329} className='object-cover'/>
                    <Image src='/homeimg8.png' alt='' width={306} height={329} className='object-cover'/>
                  </div></Link> 
             
                  </div>    
                  </div>
        </>
    )
};
export default Section3;