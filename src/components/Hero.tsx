import Image from 'next/image';
export default function Hero(){
    return(
          <div className='w-full xl:w-[1920px]  text-center'>
                        <Image 
                        src='/bg-image.png'
                        alt=''
                        width={1920}
                        height={410}
        
                        />
                        <div className='w-full text-white absolute text-center top-40 left-0 items-center'>
                            <h1 className='text-5xl font-bold'>Error 404</h1>
                            <h5 className='py-3'>Home &gt;<span className='text-[#FF9F0D]'>Error 404</span></h5>
                        </div>
                    </div>
    )
}