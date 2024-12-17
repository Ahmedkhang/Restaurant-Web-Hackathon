import Image from 'next/image';
import starter from '@/assets/menu/starter.png';
import desert from '@/assets/menu/desert.png';
import drink from '@/assets/menu/drink.png';
import burger from '@/assets/menu/burger.png';
import image1 from '@/assets/menu/image1.png';
import image2 from '@/assets/menu/image2.png';
import image3 from '@/assets/menu/image3.png';
import image4 from '@/assets/menu/image4.png';
import image5 from '@/assets/menu/image5.png';
import image6 from '@/assets/menu/image6.png';
import image7 from '@/assets/menu/image7.png';
import Link from 'next/link';

export default function Menu() {
    return (
        <>
            {/* Banner */}
            <div className="w-full text-center relative">
                <Image 
                    src="/bg-image.png"
                    alt=""
                    width={1920}
                    height={410}
                    className="w-full h-auto"
                />
                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-white text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold">Menu</h1>
                    <h5 className="py-3 text-sm sm:text-base">
                     <Link href='/home'>Home</Link> &gt;<span className="text-[#FF9F0D]">Menu</span>
                    </h5>
                </div>
            </div>

            {/* Menu Parent */}
            <div className="w-full bg-white">
                {/* Menu Body */}
                <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8 pt-10">
                    
                    {/* Starter Menu */}
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/3">
                            <Image src={starter} alt="" width={448} height={628} className="w-full h-auto" />
                        </div>
                        <div className="w-full lg:w-2/3">
                            <h1 className="text-3xl font-bold">Starter Menu</h1>

                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Alder Grilled Chinook Salmon</h1>
                                <span className="text-[orange]">$32.00</span>
                            </div>
                            <p className="mt-2 text-sm">Toasted French bread topped with romano, cheddar</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">560 Cal</span>
                            
                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Berries and creme tart</h1>
                                <span className="text-[orange]">$43.00</span>
                            </div>
                            <p className="mt-2 text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">700 Cal</span>

                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Tormentoso Bush Pizza Pintoage</h1>
                                <span className="text-[orange]">$14.00</span>
                            </div>
                            <p className="mt-2 text-sm">Ground cumin, avocados, peeled and cubed</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">1000 Cal</span>

                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Spicy Vegan Potato Curry</h1>
                                <span className="text-[orange]">$35.00</span>
                            </div>
                            <p className="mt-2 text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">560 Cal</span>
                        </div>
                    </div>

                    {/* Main Course */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mt-10">
                        <div className="w-full lg:w-1/3">
                            <Image src={burger} alt="" width={448} height={628} className="w-full h-auto" />
                        </div>
                        <div className="w-full lg:w-2/3">
                            <h1 className="text-3xl font-bold">Main Course</h1>

                            
                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Alder Grilled Chinook Salmon</h1>
                                <span className="text-[orange]">$32.00</span>
                            </div>
                            <p className="mt-2 text-sm">Toasted French bread topped with romano, cheddar</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">560 Cal</span>
                            
                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Berries and creme tart</h1>
                                <span className="text-[orange]">$43.00</span>
                            </div>
                            <p className="mt-2 text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">700 Cal</span>

                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Tormentoso Bush Pizza Pintoage</h1>
                                <span className="text-[orange]">$14.00</span>
                            </div>
                            <p className="mt-2 text-sm">Ground cumin, avocados, peeled and cubed</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">1000 Cal</span>

                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Spicy Vegan Potato Curry</h1>
                                <span className="text-[orange]">$35.00</span>
                            </div>
                            <p className="mt-2 text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">560 Cal</span>
            
        
                        </div>
                    </div>

                    <div className="mt-10">
                        <Image src={image7} alt="" width={1320} height={468} className="w-full h-auto" />
                    </div>

                    {/* Desert */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
                        <div className="w-full lg:w-1/3">
                            <Image src={desert} alt="" width={448} height={628} className="w-full h-auto" />
                        </div>
                        <div className="w-full lg:w-2/3">
                            <h1 className="text-3xl font-bold">Deserts</h1>

                            
                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Alder Grilled Chinook Salmon</h1>
                                <span className="text-[orange]">$32.00</span>
                            </div>
                            <p className="mt-2 text-sm">Toasted French bread topped with romano, cheddar</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">560 Cal</span>
                            
                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Berries and creme tart</h1>
                                <span className="text-[orange]">$43.00</span>
                            </div>
                            <p className="mt-2 text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">700 Cal</span>

                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Tormentoso Bush Pizza Pintoage</h1>
                                <span className="text-[orange]">$14.00</span>
                            </div>
                            <p className="mt-2 text-sm">Ground cumin, avocados, peeled and cubed</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">1000 Cal</span>

                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Spicy Vegan Potato Curry</h1>
                                <span className="text-[orange]">$35.00</span>
                            </div>
                            <p className="mt-2 text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">560 Cal</span>
                    
    
                        </div>
                    </div>

                    {/* Drinks */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mt-10">
                        <div className="w-full lg:w-1/3">
                            <Image src={drink} alt="" width={448} height={628} className="w-full h-auto" />
                        </div>
                        <div className="w-full lg:w-2/3">
                            <h1 className="text-3xl font-bold">Drinks</h1>

                            
                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Alder Grilled Chinook Salmon</h1>
                                <span className="text-[orange]">$32.00</span>
                            </div>
                            <p className="mt-2 text-sm">Toasted French bread topped with romano, cheddar</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">560 Cal</span>
                            
                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Berries and creme tart</h1>
                                <span className="text-[orange]">$43.00</span>
                            </div>
                            <p className="mt-2 text-sm">Gorgonzola, ricotta, mozzarella, taleggio</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">700 Cal</span>

                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Tormentoso Bush Pizza Pintoage</h1>
                                <span className="text-[orange]">$14.00</span>
                            </div>
                            <p className="mt-2 text-sm">Ground cumin, avocados, peeled and cubed</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">1000 Cal</span>

                            <div className="flex justify-between mt-5">
                                <h1 className="font-bold text-lg">Spicy Vegan Potato Curry</h1>
                                <span className="text-[orange]">$35.00</span>
                            </div>
                            <p className="mt-2 text-sm">Spreadable cream cheese, crumbled blue cheese</p>
                            <span className="border-b border-gray-200 block pb-2 text-sm">560 Cal</span>
                    
                    
                        </div>
                    </div>

                    {/* Partners */}
                    <div className="text-center mt-10">
                        <p className="text-sm text-gray-400">Partners & Clients</p>
                        <h1 className="text-2xl sm:text-3xl mt-2">We work with the best people</h1>
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            <Image src={image1} alt="" width={240} height={129} className="w-[100px] md:w-[160px] cursor-pointer" />
                            <Image src={image2} alt="" width={166} height={128} className="w-[100px] md:w-[160px] cursor-pointer" />
                            <Image src={image3} alt="" width={143} height={127} className="w-[100px] md:w-[160px] cursor-pointer" />
                            <Image src={image4} alt="" width={130} height={129} className="w-[100px] md:w-[160px] cursor-pointer" />
                            <Image src={image5} alt="" width={169} height={129} className="w-[100px] md:w-[160px] cursor-pointer" />
                            <Image src={image6} alt="" width={113} height={129} className="w-[100px] md:w-[160px] cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
