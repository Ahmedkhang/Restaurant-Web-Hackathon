import Image from 'next/image';
import Section2 from '@/components/home/section2';
import Section3 from '@/components/home/section3';
import Section4 from '@/components/home/section4';

import Section5 from '@/components/home/Section5';
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';



export default function HomePage() {

    
    return(
        <>
        
        <div className='w-full lg:w-[1920px] bg-[#0D0D0D] text-white'>
          <div className='gap-[170px] flex md:hidden'>
             <h1 className='p-5 font-bold md:hidden text-xl lg:text-3xl text-white'><span className='text-[#FF9F0D]'>Food</span>tuck</h1>
             <GiHamburgerMenu className='mt-7'/>
          </div>
       
       
            {/* // Navbar */}
            <div className='w-[1320px] lg:mx-[300px] h-[87px] justify-center items-center flex p-5'>
                 
                      <div className='text-xl md:text-xl font-bold'>
                     
                                      <ul className='hidden  lg:flex gap-5'>
                          <Link href='/'> <li>Home</li></Link> 
                           <Link href='/menu'> <li>Menu</li></Link>
                           <Link href='/shop'><li>Shop</li></Link> 
                          <Link href='/about'> <li>About</li></Link> 

                           <Link href='/FAQ'><li>FAQ</li></Link>
                        </ul>
                      </div>
                      <h1 className='w-[400px] hidden md:block px-[200px] font-bold t lg:text-3xl text-white'><span className='text-[#FF9F0D]'>Food</span>tuck</h1>
                      <div className='items-center px-[300px] py-[40px] flex'>
                        <input 
                        placeholder='Search'
                        type='text'
                        className='border-[1px] rounded-xl lg:rounded-2xl border-[#FF9F0D] px-3 w-[150px] md:w-[250px] lg:w-[310px] h-[54px]'
                        
                        />
                        <Image 
                        src='/search.png'
                        alt=''
                        width={24}
                        height={24}
                        className='ml-2 w-[40px] h-[30px]'

                        />

                      </div>
            </div>

              {/* Hero Section */}
              
              

              <div className='w-full lg:w-[1920px]  flex lg:flex'>
                {/* style */}
                <div className='w-[25.92px] h-[492px] mt-10 mx-10 md:mt-[60px] xl:mt-[126px] md:mx-[120px] xl:mx-[200px] '>
                    <p className='h-[158px] w-1 bg-white'></p>
                    <p className='h-[158px] w-1 bg-white'></p>
                      

            </div>

                {/* right div */}
                <div className='w-[150px] md:w-[320px] xl:w-[472px] mt-[40px] xl:mt-[146px] h-[356px]'>

                    <h1 className='text-2xl h-[100px] md:text-3xl xl:text-5xl text-white font-bold leading-[25px] md:leading-[35px] xl:leading-[50px]'><span className='text-[#FF9F0D]'>Th</span>e Art Of Speed Food Quality </h1>
                    <p className='mt-10 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque massa congue</p>
                     
                   <Link href='/menu'><button className='bg-[#FF9F0D] text-white h-[60px] w-[190px] rounded-lg mt-10'>See Menu</button></Link> 
                </div>
                {/* left div */}

                <div className='hidden lg:flex w-[877px] h-[300px] xl:h-[670px] ml-10'>
                  <Image src='/homeimg1.png' alt='' width={877} height={670} className='w-[250px] md:w-[320px] lg:w-[777px] lg:h-[620px] md:mx-[70px] h-[250px]'/>

                </div>

              </div>
              
                <div className='lg:hidden w-[877px] h-[300px] xl:h-[670px] ml-20'>
                  <Image src='/homeimg1.png' alt='' width={877} height={670} className='w-[250px] md:w-[320px] lg:w-[777px] lg:h-[620px] md:mx-[70px] h-[250px]'/>

                </div>

        </div>
               {/* Section 2 */}

                   <Section2 />




                                  {/* section 3 */}

                                  <Section3 />


                                  {/* Section 4 */}
           
                                 <Section4 />
                    {/* section menu */}
                                <Section5 />

                    <div className=' lg:w-[1920px] text-white pt-10 h-auto lg:h-[850px] bg-[#0D0D0D] lg:px-[300px] lg:pt-[130px]'>

                      <h1 className='w-full lg:w-[1320px] font-bold text-center text-5xl'><span className='text-[#FF9F0D]'>Me</span>et Our Chefs</h1>

                      <div className='flex-cols-1 lg:flex mt-20'>
                        <Image src='/homeimg20.png' alt='' width={312} height={391}/>
                        <Image src='/homeimg21.png' alt='' width={312} height={391}/>
                        <Image src='/homeimg20.png' alt='' width={312} height={391}/>
                        <Image src='/homeimg21.png' alt='' width={312} height={391}/>
                      </div>
                      <Link href='/ourChefs'><button className='w-[155px] h-[50px] border-[1px] rounded-3xl mt-20 ml-[600px] border-[#FF9F0D] text-center'>Read more</button></Link>
                    </div>


                    {/* Client Section */}

                    <div className='w-full lg:w-[1920px] lg:px-[300px] bg-[#0D0D0D] h-auto  lg:h-[700px]'> 
                      <h1 className='text-2xl text-white lg:text-4xl font-bold'>What Our Client Are Saying</h1>
                  <Image src='/homeimg22.png' alt='' width={132} height={133} className='rounded-6xl ml-[550px] mt-10 justify-center'/>
                  <div className='text-black items-center w-[868px] h-[450px] mb-10  ml-[200px] bg-white'>
                    <p className='w-[696px] h-[103px] text-lg text-center ml-20 py-[150px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    <Image src='/homeimg23.png' alt='' width={151} height={23} className='ml-[350px]'/>
                    <p className='text-2xl font-bold text-center py-5'>Alamin Hasan</p>
                    <p className='text-center'>Food Specialist</p>
                  </div>

                    </div>

        
        
        <div className='w-full xl:w-[1920px] object-fit'>
                    <Image src='/homeimg24.png' alt='footer' width={1920} height={450}/>
                  </div>
        </>
    )
}