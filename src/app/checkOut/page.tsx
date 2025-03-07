
// import Link from 'next/link';
// import Image from 'next/image'
// import Navbar from '@/components/Navbar/Navbar';
// import { FaCheck } from 'react-icons/fa6'




// function Hero() {
//   return (
    
//     <>
//     <Navbar />
//       {/* // Main div  */}
//       <div className='relative w-[1920px] text bg-white' >

// {/* 2nd div bg-Image */}
// <div className='w-[1920px]  text-center'>
//     <Image 
//     src='/bg-image.png'
//     alt=''
//     width={1920}
//     height={410}

//     />
//     <div className='w-full text-white absolute text-center top-40 left-0 items-center'>
//         <h1 className='text-5xl font-bold'>Check Out</h1>
//         <h5 className='py-3'>Home &gt; <span className='text-[#FF9F0D]'>Check Out</span></h5>
//     </div>
// </div>



// </div>


// <div className='w-[1920px] h-[1000px] bg-white'>
 
//   <div className='w-[1320px] mx-[300px] pt-[130px] '> 
//   <h1 className='font-bold'>Shipping Address</h1>

// <div className='flex'>
// <form>
//       <legend className='mt-10'>First Name</legend>
//     <input type='text' className='border-[1px] border-gray-200 mt-5 w-[424px] h-[40px]'/>

//     <legend>Email Address</legend>
//     <input type='text' className='border-[1px] border-gray-200 mt-5 w-[424px] h-[40px]'/>


//     <legend>Company</legend>
//     <input type='email' className='border-[1px] border-gray-200 mt-5 w-[424px] h-[40px]'/>


//     <legend>City</legend>
//     <input type='text' className='border-[1px] border-gray-200 mt-5 w-[424px] h-[40px]'/>

//     <legend>Address 1</legend>
//     <input type='text' className='border-[1px] border-gray-200 mt-5 w-[424px] h-[40px]'/>
   
//     </form>

//     <form className='ml-10'>
//     <legend className='mt-10'>Last Name</legend>
//     <input type='text' className='border-[1px] border-gray-200 mt-5 w-[424px] h-[40px]'/>
   
//     <legend>Phone Number</legend>
//     <input type='phone' className='border-[1px] border-gray-200 mt-5 w-[424px] h-[40px]'/>
   
//     <legend>Country</legend>
//     <input type='country' className='border-[1px] border-gray-200 mt-5 w-[424px] h-[40px]'/>
   
//     <legend>ZIP Code</legend>
//     <input type='number' className='border-[1px] border-gray-200 mt-5 w-[424px] h-[40px]'/>
   
//     <legend>Address 2</legend>
//     <input type='text' className='border-[1px] border-gray-200 mt-5 w-[424px] h-[40px]'/>
   
//     </form>

//     </div>

//     <h1 className='mt-20 text-3xl font-bold'>Billing Address</h1>
//     <div className='flex mt-7'>
//       <input type='checkbox' className='w-10 h-5 mt-1'/>
//       <p>Same as shipping address</p>
//     </div>
//     <div className='flex mt-7 gap-5'>
//      <Link href='/shoppingcart'> <button className='w-[424px] h-[56px] bg-zinc-50'>back to cart</button></Link>
//       <button className='w-[424px] h-[56px] text-white bg-[#FF9F0D]'>Proceed to shipping</button>
//     </div>
//   </div>

// </div>
// </>
//   )
// } => {


// export default Hero

import CheckOut from '@/components/CheckOut';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const checkOutPage = () => {
  return(
    <>
    <Navbar />
     <CheckOut />
     <Footer />
    </>
  )
}
export default checkOutPage;