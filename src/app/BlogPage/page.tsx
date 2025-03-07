'use client';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import { urlFor } from '@/sanity/lib/image';
import { Post } from '../../../types';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Footer from '@/components/Footer/Footer';

export default function BlogPage() {
    const [posts, setPosts] = useState<Post[] | null>(null); // State to store the blog posts

    useEffect(() => {
        async function fetchBlog() {
            try {
                const fetchedPosts: Post[] = await client.fetch(`*[_type == 'post']`);
                setPosts(fetchedPosts);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        }

        fetchBlog();
    }, []);

    if (!posts) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <>
            <Navbar />

            {/* Main div */}
            <div className='relative w-full bg-white'>
                {/* Background Image */}
                <div className='w-full text-center'>
                    <Image
                        src='/bg-image.png'
                        alt=''
                        width={1920}
                        height={410}
                        layout='responsive'
                    />
                    <div className='w-full text-white absolute text-center top-40 left-0 items-center'>
                        <h1 className='text-5xl font-bold'>Blog List</h1>
                        <h5 className='py-3'>Home &gt; <span className='text-[#FF9F0D]'>Blog</span></h5>
                    </div>
                </div>

                {/* Blog Posts */}
                <div className='w-full h-auto bg-white flex flex-col items-center'>
                    {posts.map((post) => (
                        <div key={post.slug.current} className='w-full max-w-4xl py-10'>
                            <Link href={`/blog/${post.slug.current}`}>
                                
                                    {post.image && (
                                        <Image
                                            src={urlFor(post.image).url()}
                                            alt={post.title}
                                            width={872}
                                            height={530}
                                            className='mt-10'
                                        />
                                    )}
                                    <h2 className='text-2xl font-bold mt-5'>{post.title}</h2>
                                    <p className='text-lg mt-3'>{post.summary}</p>
                                
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}