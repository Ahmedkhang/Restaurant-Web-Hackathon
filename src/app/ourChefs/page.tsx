'use client';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import { client } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';
import { chefTypes } from '../../../types';
import { allChefs, four } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';





export default function HeroSection() {

  const [chefs, setChefs] = useState<chefTypes[]>([]);

  useEffect(() => {
    async function fetchChefs() {
      const fetchedChefs: chefTypes[] = await client.fetch(`*[_type == 'chef']`);
      setChefs(fetchedChefs);
    }
    fetchChefs();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-4 chef-container bg-zinc-50 grid md:grid-col-2 lg:grid-cols-3 justify-around ">
        {chefs.map((chef, index) => (
          <div key={index} className="pt-5 w-[270px] max-w-sm chef-card shadow-md hover:shadow-xl md:mx-2 lg:mx-2 xl:mx-3 transition duration-200">
           {chef.image && (
            <Image src={urlFor(chef.image).url()} alt={chef.name} width={319} height={330} className='w-[250px] mx-3 md:mx-2' onError = {(e) => console.error('Image load error', e)} />
           )}
            {/* <Image src={urlFor(chef.image).url()} alt={chef.name} width={319} height={330} /> */}
            <h1 className="text-center mt-1 text-xl font-bold text-[#5f3e3e]">{chef.name}</h1>
            <p className="text-center mt-2 text-[#333333]">{chef.description}</p>
           <Link href={`/chef/${chef.slug.current}`}> <button  className='w-full text-orange-500 text-center font-bold text-center'>Read More</button></Link>
          </div>
        ))}
      </div>
    </>
  );
}




// 'use client';
// import Image from 'next/image';
// import Navbar from '@/components/Navbar/Navbar';
// import { client } from '@/sanity/lib/client';
// import { useEffect, useState } from 'react';
// import { Types } from '../../../types';
// import { allChefs } from '@/sanity/lib/queries';
// export default function HeroSection() {

//     const [chef, setChef] = useState<Types[]>([]);
//     useEffect(() => {
//       async function  fetchedChefs(){
//         const fetchedChef : Types[] = await client.fetch(allChefs);
//         setChef(fetchedChef);
//       }
//       fetchedChefs();
//       console.log(fetchedChefs)
//     },[])
   

//     return (
//         <>
//         <Navbar />
        
//         {chef.map((chefs,index:number) => (
//             <div key={index}>
//             <Image src={chefs.image} alt='' width={319} height={330} />
//             <h1>{chefs.name}</h1>
//             <h1>{chefs.availabe}</h1>
//             <h1 key={index}>{chefs.description}</h1>
//             </div>
//         ))}
//         </>
//     )}
//             {/* Main div
//             <div className="relative w-full bg-white">
//                 {/* 2nd div bg-Image */}
//                 {/* <div className="w-full text-center">
//                     {/* <Image 
//                         src="/bg-image.png" 
//                         alt="" 
//                         width={1920} 
//                         height={410} 
//                         className="w-full h-auto"
//                     />
//                     <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-center text-white">
//                         <h1 className="text-4xl md:text-5xl font-bold">Our Chefs</h1>
//                         <h5 className="py-3 text-sm md:text-base">
//                             Home &gt;<span className="text-[#FF9F0D]">Our Chefs</span>
//                         </h5>
//                     </div>
//                 </div> */}
//             {/* </div>  */}

//             {/* Our Chefs Body Section */}
//             {/* // <div className="w-full bg-white">
//                 // <div className="w-full max-w-[1320px] mx-auto py-10 md:py-20 px-4"> */}
//                     {/* Row 1 */}
//                     {/* <div className="flex flex-wrap justify-center gap-6"> */}
//                         {/* Card */}
//                         {/* <div className="w-full sm:w-[48%] md:w-[23%]"> */}
//                             {/* {response.map((items:any,index:any) => (
//                                      <Image key={index} src={items.image} alt='' width={312} height={329} />
//                             ))} */}
// {/* 
//                         </div>

                        

//                     </div>

        
//                 </div>
//             </div> */}


        


//     // <Image src="/chef1.png" alt="" width={312} height={379} className="w-full h-auto" />
//     //                         <h1 className="text-center mt-1 font-bold text-[#333333]">Tahmina Rumi</h1>
//     //                         <p className="text-center mt-2 text-[#333333]">chef</p>
