'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { foodTypes } from '../../../types';
import { addToCart } from '../actions/actions';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Swal from 'sweetalert2';

export default function Shop() {
  const [foods, setFoods] = useState<foodTypes[]>([]);

  useEffect(() => {
    async function fetchFoods() {
      const fetchedFoods: foodTypes[] = await client.fetch(`*[_type == 'food']`);
      console.log('Fetched Foods:', fetchedFoods); // Debug: Check fetched data
      setFoods(fetchedFoods);
    }
    fetchFoods();
  }, []);

  const handleCart = (e:React.MouseEvent, product:foodTypes) => {
            e.preventDefault();
      
            addToCart(product)
          Swal.fire({
            position:'top-right',
            showConfirmButton: false,
            title:`${product.name} added`,
            icon:'success',
            timer:1000,
          })
          }
  
  return (
    <>
    <Navbar />
      <div className="p-4 chef-container bg-zinc-50 grid md:grid-cols-2 lg:grid-cols-3 justify-around">
        {foods.map((food, index) => {
          
          
          return (
            <div key={index} className="pt-5 max-w-lg food-card shadow-md hover:shadow-xl md:mx-10 lg:mx-[30px] xl:mx-30 transition duration-200">
              {food.image && (
                <Image
                  src={urlFor(food.image).url()}
                  alt={food.name}
                  width={319}
                  height={330}
                  className="m-2 lg:m-8"
                  onError={(e) => console.error('Image load error', e)}
                />
              )}
              <h1 className="text-center mt-1 font-bold text-[#5f3e3e]">{food.name}</h1>
              <p className="text-center mt-2 text-[#333333]">{food.description}</p>
              <div className="flex gap-3 justify-center">
                <del><h1 className='pt-2 text-red-500 font-bold text-center'>${food.originalPrice}</h1></del>
                <Link href={`/shopsdetails/${food.slug.current}`}>
                  <h1 className="pt-2 text-red-500 font-bold text-center">${food.price}</h1>
                </Link>
                <button className="bg-gradient-to-r from-orange-500 to-orange-100 px-2 hover:shadow-xl py-2 rounded-xl transition duration-500 text-white font-bold hover:bg-white hover:text-black"
                onClick={(e) => handleCart(e, food)} 
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );}