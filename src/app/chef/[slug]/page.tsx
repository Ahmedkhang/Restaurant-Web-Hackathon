// import { client } from "@/sanity/lib/client";
// import { chefTypes } from "../../../../types";
// import { groq } from "next-sanity";
// import { urlFor } from "@/sanity/lib/image";
// import Image  from 'next/image'

//  interface chefPageProps {
//        params: Promise<{slug:string}>
//  }
//  async function getChefs(slug:string):Promise<chefTypes[]>{
//   return client.fetch(
//     groq`*[_type == "chef" && slug.current == $slug][0]{
//     image,name,description
//     }`, {slug}
    
//   )
//  };

//  export default async function DynamicChefPage({params}:chefPageProps){
//  const { slug  } = await params;
//  const chef = await getChefs(slug);

//  return(
//    <div >
//    <div>
//       <div>
//     {chef.image && (

//     <Image src = {urlFor(chef.image).url()} alt={chef.name} width={400} height={400} />
//     )}
    
//     </div> 
//     <div> 
//     <h1>{chef.name}</h1>
//     <p>{chef.description}</p>
//     </div>
//    </div>
//    </div>
//  )
//  }


import { client } from "@/sanity/lib/client";
import { chefTypes } from "../../../../types";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';
import Navbar from "@/components/Navbar/Navbar";

interface ChefPageProps {
  params: { slug: string }; // ❌ Removed Promise<> and corrected type
}

// Fetch a single chef based on the slug
async function getChef(slug: string): Promise<chefTypes | null> {
  return client.fetch(
    groq`*[_type == "chef" && slug.current == $slug][0]{
      image, name, description,available,position,specialty,experience
    }`, 
    { slug }
  );
};

export default async function DynamicChefPage({ params }: ChefPageProps) {
  const { slug } = params; // ✅ No need for await here
  const chef = await getChef(slug);

  if (!chef) {
    return <p>Chef not found</p>; // Handle missing chef gracefully
  }

  return (
    <>
     <Navbar />

    <div className="w-full items-center h-[600px] flex gap-20 bg-white">
      <div className="mx-20">
        {chef.image && (
          <Image
            src={urlFor(chef.image).url()}
            alt={chef.name}
            width={450}
            height={450}
          />
        )}
      </div>
      <div className='space-y-2'>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">{chef.name}</h1>
        <p className="text-lg">{chef.description}</p>
        <div className='flex gap-5'>
        {/* <p className="text-xl text-orange-400 font-bold">${food.originalPrice}</p>   */}
  
         </div>
         
         <p className='text-orange-400 text-xl font-bold'><span className='font-bold text-black text-xl'>Specialty : </span>{chef.specialty}</p>
         <p className='text-orange-400 text-xl font-bold'><span className='font-bold text-xl text-black'>Experience : </span>{chef.experience} Years</p>
         <p className='text-orange-400 text-xl font-bold'><span className='font-bold text-xl text-black'>Position : </span>{chef.position}</p>
      </div>
    </div>
    </>
  );
}
 