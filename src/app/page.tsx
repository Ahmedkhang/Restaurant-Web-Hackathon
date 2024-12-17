// import HeroSection from "@/components/Hero";

import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
 
     <div className='w-[1920px] h-[600px] bg-white'>
       <div className='bg-[#333333]  font-bold text-white w-[700px] h-[700px] px-[100px] pt-[50px]'>
        
        <h1 className='text-5xl w-[550px] text-center font-bold mt-10'>Honest Review</h1>
           <button className='text-xl  text-center w-[550px] text-white'><Link href='/home'>Home (not responsive)</Link></button><br/>
           <button className='text-xl w-[550px] text-white'><Link href='/menu'>Menu</Link></button><br/>
          <button className='text-xl w-[550px] text-white'><Link href='/shop'>Shop</Link></button><br/>
          <button className='text-xl w-[2550px] text-white'><Link href='/shopdetails'>Shop Details</Link></button><br/> 
         <button className='text-xl w-[550px] text-white'> <Link href='/shoppingcart'>Shopping Cart (not responsive)</Link></button> <br/>
          <button className='text-xl w-[550px] text-white'><Link href='/checkOut'>CheckOut (not responsive)</Link></button> <br/>
           <button className='text-xl w-[550px] text-white'><Link href='/BlogPage'>Blog (not responsive)</Link></button>
          <button className='text-xl w-[550px] text-white'><Link href='/BlogPage/BlogDetails'>Blog Details (not responsive)</Link></button>
          <button className='text-xl w-[550px] text-white'><Link href='/about'>About</Link></button> 
           <button className='text-xl w-[550px] text-white'><Link href='/ourChefs'>Chefs</Link></button>
           <button className='text-xl w-[550px] text-white'><Link href='/404Error'>Error</Link></button>
           <button className='text-xl w-[550px] text-white'><Link href='/FAQ'>FAQ</Link></button>
           <button className='text-xl w-[550px] text-white'><Link href='/signup'>Signup</Link></button>
           <button className='text-xl w-[550px] text-white'><Link href='/login'>login</Link></button>
           
  




       </div>
     </div>

        
  );
}
