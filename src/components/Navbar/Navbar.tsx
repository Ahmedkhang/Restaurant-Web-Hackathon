
'use client';
// // resopnsive
import { useState } from 'react'
// import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react';
import { FaCartShopping } from "react-icons/fa6";

import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", url: "/", active: true },
    { name: "Menu", url: "/menu"},
    { name: "Blog", url: "/BlogPage" },
    { name: "Blog Details", url: "/BlogPage/BlogDetails" },
    { name: "About", url: "/about" },
    { name: "Shop", url: "/shop" },
    { name: "Chefs", url: "/ourChefs" },
  ]

  return (
    <header className="w-full 2xl:w-[1920px] bg-[#0D0D0D] top-0 px-4 sm:px-6 lg:px-[6.62%] py-4 lg:py-7">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica z-10"
        >
          Food<span className="text-[#FF9F0D]">tuck</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`
          fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
          lg:static lg:flex-row lg:bg-transparent lg:gap-4
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}
        `}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.url}
                className={`text-[16px] leading-6 ${
                  item.active ? "text-[#FF9F0D] font-bold" : "text-white"
                } font-inter hover:text-[#FF9F0D] transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/search.png" alt="search" width={24} height={24} />
          </Link>
          <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/user.png" alt="user" width={24} height={24} />
          </Link>
          <Link href="/cart" className="text-white hover:text-[#FF9F0D] transition-colors">
          <FaCartShopping />
          </Link>
          <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/crown.png" alt="cart" width={24} height={24} />
          </Link>
        </div>
      </nav>
    </header>
  )
}

// export default function Navbar() {
//   const menuItems = [
//     { name: "Home", url: "/", active: true },
//     { name: "Menu", url: "/menu"},
//     { name: "Blog", url: "/BlogPage" },
//     { name: "Blog Details", url: "/BlogPage/BlogDetails" },
//     { name: "About", url: "/about" },
//     { name: "Shop", url: "/shop" },
//     { name: "Chefs", url: "/ourChefs" },
//   ]

// return(
// <header className="w-full lg:w-[1200px] xl:w-[1920px] bg-[#0D0D0D] top-0 px-4 sm:px-6 lg:px-[6.62%] py-4 lg:py-7">
//   <nav className="flex items-center gap-x-6"> {/* Reduced gap */}
    
//     {/* Logo */}
//     <Link href="/" className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica z-10">
//       Food<span className="text-[#FF9F0D]">tuck</span>
//     </Link>

//     {/* Flex container for Menu and Icons */}
//     <div className="flex items-center justify-between w-full">
      
//       {/* Navigation Links */}
//       <ul className="flex items-center gap-x-4 lg:gap-x-6">
//         {menuItems.map((item) => (
//           <li key={item.name}>
//             <Link href={item.url}
//               className={`text-[16px] leading-6 ${
//                 item.active ? "text-[#FF9F0D] font-bold" : "text-white"
//               } font-inter hover:text-[#FF9F0D] transition-colors`}
//             >
//               {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Icons */}
//       <div className="flex items-center gap-x-4">
//         <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
//           <Image src="/search.png" alt="search" width={24} height={24} />
//         </Link>
//         <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
//           <Image src="/user.png" alt="user" width={24} height={24} />
//         </Link>
//         <Link href="/cart" className="text-white hover:text-[#FF9F0D] transition-colors">
//           <FaCartShopping />
//         </Link>
//         <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
//           <Image src="/crown.png" alt="cart" width={24} height={24} />
//         </Link>
//       </div>

//     </div>
//   </nav>
// </header>
// )}