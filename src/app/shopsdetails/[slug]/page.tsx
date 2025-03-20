'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { useParams } from 'next/navigation';

import Navbar from '@/components/Navbar/Navbar';
import { foodTypes } from '../../../../types';


export default function ShopDetails() {
  const params  = useParams();
  const slug = params.slug;
  console.log("Slug :", slug) // Get the slug from the URL
  const [food, setFood] = useState<foodTypes | null>(null); // State to store the food details

  useEffect(() => {
    async function fetchFood() {
      console.log('Slug :', slug);
      const query = `*[_type == 'food' && slug.current == $slug][0]{
        name,
        description,
        price,
        image,
        category,
        available,
        originalPrice,
      }`;
      const fetchedFood: foodTypes = await client.fetch(query, { slug });
      setFood(fetchedFood);
    }

    fetchFood();
  }, [slug]);

  if (!food) {
    return (
      <div>
        <h1>Product Not Found</h1>
      </div>
    );
  }

  return (
    <>
     <Navbar />

    <div className="w-full items-center h-[600px] flex gap-20 bg-white">
      <div className="mx-20">
        {food.image && (
          <Image
            src={urlFor(food.image).url()}
            alt={food.name}
            width={550}
            height={550}
          />
        )}
      </div>
      <div className='space-y-2'>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">{food.name}</h1>
        <p className='font-bold'>{food.category}</p>
        <p className="text-lg">{food.description}</p>
        <div className='flex gap-5'>
        {/* <p className="text-xl text-orange-400 font-bold">${food.originalPrice}</p>   */}
        <p className="text-xl text-orange-400 font-bold mt-1"> ${food.price}</p>
        <button className='bg-orange-400  hover:bg-white text-white hover:text-black font-bold transition ease-in-out duration-600 rounded-lg px-3 py-2 hover:shadow-lg'>Add to cart</button>
         </div>
         <p>{food.available}</p>
      </div>
    </div>
    </>
  );
}
// 'use client'
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import { client } from '@/sanity/lib/client';
// import { foodTypes } from '../../../../types';
// import { urlFor } from '@/sanity/lib/image';

// export default function ProductPage() {
//     const { slug } = useParams();
//     const [food, setFood] = useState<foodTypes | null>(null);

//     useEffect(() => {
//         async function fetchFood() {
//             const query = `*[_type == "food" && slug.current == $slug][0]`;
//             const fetchedFood = await client.fetch(query, { slug });
//             setFood(fetchedFood);
//         }
//         fetchFood();
//     }, [slug]);

//     if (!food) return <h1 className='text-2xl md:text-3xl text-center'>Loading...</h1>;

//     return (
//         <div className="w-full flex flex-col items-center p-10">
//             {food.image && (
//                 <Image src={urlFor(food.image).url()} alt={food.name} width={500} height={400} />
//             )}
//             <h1 className="text-3xl font-bold mt-4">{food.name}</h1>
//             <p className="text-lg">{food.description}</p>
//             <p className="text-xl text-orange-500 font-bold">${food.price}</p>
//         </div>
//     );
// }

// 'use client'
// import Image from 'next/image';
// import Navbar from '@/components/Navbar/Navbar';
// import { foodTypes } from '../../../../types';
// import { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import allFoods from '@/sanity/schemaTypes/foods';
// import { threeFoods } from '@/sanity/lib/queries';
// import { urlFor } from '@/sanity/lib/image';
// import Link from 'next/link';
// import { useParams } from 'next/navigation';
// import foods from '@/sanity/schemaTypes/foods';
// export default function ShopDetails() {
//   const page = async({params:{slug}}:{params:{slug:string}}) => {
//     const query = `*[_type == 'food' && slug.current == ${slug}]{

//     name,description,price,image
//     }`
//     const foods:foodTypes[] | null = await client.fetch(query, {slug})

//     if(!foods){
//       return(
//         <div>
//           <h1>Products Not Found</h1>
//         </div>
//       )
//     }
//   }
//   // const { slug } = useParams();
//     // const [foods, setFoods] = useState<foodTypes[]>([]);
  
//     // useEffect(() => {
//     //   async function fetchFoods() {
//     //     const query = `*[_type == 'food' && slug.current == $slug][0]`
//     //     const fetchedFoods = await client.fetch(query, { slug });
//     //     setFoods(fetchedFoods);
//     //   }
//     //   fetchFoods();
//     // }, [ slug ]);

//     return(
//        <div className='w-full items-center h-[600px] flex gap-20  bg-white'>
// <div className='mx-20'>
//   {foods.image && (
//     <Image src={urlFor(foods.image).url()} alt={foods.name} width={400} height={450} />
//   )}
// </div>
//   <div className=''>
//         <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>{foods.name}</h1>
//         <p className='text-lg'>{foods.description}</p>
//         <p className='text-xl text-orange-500 font-bold'>${foods.price}</p>
        
//         </div> 
//         </div>
//     )}