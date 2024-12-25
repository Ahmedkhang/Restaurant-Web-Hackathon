import Navbar from '@/components/Navbar/Navbar';
import Link from "next/link";
import Image from "next/image";


export default function ErrorPage() {
  return (
    <>
    <Navbar />
    <div className='w-[1920px]  text-center'>
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
    <div className="min-h-screen bg-white">
      
      {/* Signup Form Section */}
      <section className="p-10 relative bg-white pt-36 flex flex-col items-center">
        <div className="w-[630px] text-center">
          <h3 className="text-[40px] md:text-[50px] lg:text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
          <p className="font-bold text-[14px] lg:text-[32px] mb-4">
            Oops! Looks like something went wrong
          </p>
          <p className="text-[11px] lg:text-[18px] mb-4">
            Page cannot be found! We’ll have it figured out in no time.
          </p>
          <p className="text-[11px] lg:text-[18px] mb-6">
            Meanwhile, check out these fresh ideas:
          </p>
          {/* Button */}
          <Link href="/home">
            <button className="bg-[#FF9F0D] text-white text-[14px] lg:text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
              Go Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
 </>
  );
}