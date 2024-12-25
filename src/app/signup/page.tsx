import Link from "next/link";
import Navbar from '@/components/Navbar/Navbar'
import Image from "next/image"
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";


export default function SignUpPage() {
  return (
    <>
    <Navbar />
          {/* Header Section */}
          <div className="w-full relative text-center">
            <Image src="/bg-image.png" alt="" width={1920} height={410} layout="responsive" />
            <div className="w-full text-white absolute top-1/2 transform -translate-y-1/2">
              <h1 className="text-xl md:text-5xl font-bold">Shop Details</h1>
              <h5 className="py-3 text-base md:text-lg">
                Home &gt; <span className="text-[#FF9F0D]">Sign up</span>
              </h5>
            </div>
          </div>
       
      

      <div className="min-h-screen bg-white">  
      {/* Signup Form */}
      <section className="py-16">
        <div className="container md:mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign Up
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            
            <FcGoogle className="h-6 mr-2" />
            
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
            <ImAppleinc className="h-6 mr-2" />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
 </>
  );
}