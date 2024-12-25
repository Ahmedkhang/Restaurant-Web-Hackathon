import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
export default function HeroSection() {
    return (
        <>
        <Navbar />
            {/* Main div */}
            <div className="relative w-full bg-white">
                {/* 2nd div bg-Image */}
                <div className="w-full text-center">
                    <Image 
                        src="/bg-image.png" 
                        alt="" 
                        width={1920} 
                        height={410} 
                        className="w-full h-auto"
                    />
                    <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold">Our Chefs</h1>
                        <h5 className="py-3 text-sm md:text-base">
                            Home &gt;<span className="text-[#FF9F0D]">Our Chefs</span>
                        </h5>
                    </div>
                </div>
            </div>

            {/* Our Chefs Body Section */}
            <div className="w-full bg-white">
                <div className="w-full max-w-[1320px] mx-auto py-10 md:py-20 px-4">
                    {/* Row 1 */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Card */}
                        <div className="w-full sm:w-[48%] md:w-[23%]">
                            <Image src="/chef1.png" alt="" width={312} height={379} className="w-full h-auto" />
                            <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
                            <p className="text-center mt-2 text-[#333333]">chef</p>
                        </div>

                        {/* Card */}
                        <div className="w-full sm:w-[48%] md:w-[23%]">
                            <Image src="/chef7.png" alt="" width={312} height={379} className="w-full h-auto" />
                            <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
                            <p className="text-center mt-2 text-[#333333]">chef</p>
                        </div>

                        {/* Card */}
                        <div className="w-full sm:w-[48%] md:w-[23%]">
                            <Image src="/chef12.png" alt="" width={312} height={379} className="w-full h-auto" />
                            <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
                            <p className="text-center mt-2 text-[#333333]">chef</p>
                        </div>

                        {/* Card */}
                        <div className="w-full sm:w-[48%] md:w-[23%]">
                            <Image src="/chef4.png" alt="" width={312} height={379} className="w-full h-auto" />
                            <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
                            <p className="text-center mt-2 text-[#333333]">chef</p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                        {/* Card */}
                        <div className="w-full sm:w-[48%] md:w-[23%]">
                            <Image src="/chef5.png" alt="" width={312} height={379} className="w-full h-auto" />
                            <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
                            <p className="text-center mt-2 text-[#333333]">chef</p>
                        </div>

                        {/* Card */}
                        <div className="w-full sm:w-[48%] md:w-[23%]">
                            <Image src="/chef6.png" alt="" width={312} height={379} className="w-full h-auto" />
                            <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
                            <p className="text-center mt-2 text-[#333333]">chef</p>
                        </div>

                        {/* Card */}
                        <div className="w-full sm:w-[48%] md:w-[23%]">
                            <Image src="/chef7.png" alt="" width={312} height={379} className="w-full h-auto" />
                            <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
                            <p className="text-center mt-2 text-[#333333]">chef</p>
                        </div>

                        {/* Card */}
                        <div className="w-full sm:w-[48%] md:w-[23%]">
                            <Image src="/chef8.png" alt="" width={312} height={379} className="w-full h-auto" />
                            <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
                            <p className="text-center mt-2 text-[#333333]">chef</p>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                        {/* Card */}
                        <div className="w-full sm:w-[48%] md:w-[23%]">
                            <Image src="/chef9.png" alt="" width={312} height={379} className="w-full h-auto" />
                            <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
                            <p className="text-center mt-2 text-[#333333]">chef</p>
                        </div>

                        {/* Card */}
                        <div className="w-full sm:w-[48%] md:w-[23%]">
                            <Image src="/chef10.png" alt="" width={312} height={379} className="w-full h-auto" />
                            <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
                            <p className="text-center mt-2 text-[#333333]">chef</p>
                        </div>

                        {/* Card */}
                        <div className="w-full sm:w-[48%] md:w-[23%]">
                            <Image src="/chef11.png" alt="" width={312} height={379} className="w-full h-auto" />
                            <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
                            <p className="text-center mt-2 text-[#333333]">chef</p>
                        </div>

                        {/* Card */}
                        <div className="w-full sm:w-[48%] md:w-[23%]">
                            <Image src="/chef12.png" alt="" width={312} height={379} className="w-full h-auto" />
                            <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
                            <p className="text-center mt-2 text-[#333333]">chef</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
