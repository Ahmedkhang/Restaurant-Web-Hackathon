import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

export default async function DynamicPage({params:{slug}}:{params:{slug:string}}){
    const query = `*[_type=='post' && slug.current=="${slug}"]{
    title,summary,image,content,
    author->{bio,image,name}
    }[0]
    `
    const post = await client.fetch(query);
    return(

        <article className='w-full h-auto bg-zinc-100'>
           <h1 className='text-2xl md:text-3xl lg:leading-[70px] lg:text-5xl px-3 py-5   font-bold '>{post.title}</h1>

           {post.image && (
            <Image src={urlFor(post.image).url()} alt={post.name} width={900} height={550} />
             )}
          <section className='flex '>
          {post.author.image && (
           <Image src={urlFor(post.author.image).url()} alt='' width={200} height={200} className='py-5 px-5 rounded-full' />
          )}
           <h3 className='text-2xl md:text-3xl lg:text-4xl pt-20 px-3 font-bold'>{post.author.name}</h3>
  
            </section>
        
           <p className='text-lg md:text-xl pt-5 px-3 font-bold'>{post.summary}</p>
          <div className='text-xl py-5 px-5'>
           <PortableText value={post.content}  />
          </div>
           </article>
    )
}


      // {//  <div> 
        // //    <p className='text-lg md:text-xl pt-5 px-3 font-bold'>{post.author.bio}</p>
        // //  </div>