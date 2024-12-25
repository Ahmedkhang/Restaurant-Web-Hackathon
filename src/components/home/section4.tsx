import Image from 'next/image';
const Section4 = () => {
 return(
                <div className='w-full xl:w-[1920px] lg:h-[900px] bg-[#0D0D0D] h-auto '>
                      <div className='w-[1320px] bg lg:mx-[300px] gap-20 flex-cols-1 lg:pt-[130px] lg:flex flex-cols-1 h-auto lg:h-[716px]'>
                            
                            {/* left div */}
    
                       <div className='w-[650px] flex-cols-1 h-auto lg:h-[716px]'>
                         <div className='flex-cols-1 lg:flex'>
   
                           
                       <Image src='/homeimg9.png' alt='' width={362} height={356}/>
                       <Image src='/homeimg10.png' alt='' width={281} height={231} className='mt-[125px]'/>
   
                         </div>
                       <div className='lg:flex h-auto'> 
                         <div className='lg:flex'>
                           
                       <Image src='/homeimg11.png' alt='' width={244} height={306}/>
                       <Image src='/homeimg12.png' alt='' width={221} height={226} className='mb-[80px]'/>
   
                       <div>
                       <Image src='/homeimg13.png' alt='' width={161} height={168}/>
                       <Image src='/homeimg14.png' alt='' width={161} height={166} className=''/>
                       </div>
                           </div>
                         </div>
                       </div>
                               {/* Right side */}
   
                        <div className='w-[660px] text-white pt-20'>
                        <h1 className='text-5xl font-bold w-[460px] h-[112px]'><span className='text-[#FF9F0D]'>Ex</span>tra ordinary taste
                        And Experienced </h1>
   
                        <p className='w-[520px] mt-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
   
                           <div className='flex gap-10 mt-20'>
                              <div className='bg-[#FF9F0D] items-center justify-center w-[102px] h-[100px]'>
                               <Image src='/homeimg15.png' alt='' width={56} height={56} className='ml-5 mt-5'/>
                              </div>
                              <div className='bg-[#FF9F0D] items-center justify-center  w-[102px] h-[100px]'>
                              <Image src='/homeimg16.png' alt='' width={56} height={56} className='ml-5 mt-5'/>
                              </div>
                              <div className='bg-[#FF9F0D] items-center justify-center w-[102px] h-[100px]'>
                              <Image src='/homeimg17.png' alt='' width={56} height={56} className='ml-5 mt-5'/>
                              </div>
                           </div>
   
                           <div className='flex w-[374px] h-[93px] bg-white mt-20'>
                              <h1 className='text-[#FF9F0D] text-3xl font-bold px-10 py-7'>30+</h1>
                             
                               <p className='text-center text-black text-xl py-2 px-5'>Years of <br/> <span className='font-bold  text-2xl text-black'>Experienced</span></p>
                               
                              
                           </div>
                       
                         </div>     
   
                   
   
                       </div>   
                       </div> 
 )
}
export default Section4;