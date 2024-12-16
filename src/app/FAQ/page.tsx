
"use client"
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import React, { useState } from 'react';

const faqData = [
  {
    question: "How do we serve food?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How is our food quality?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How do we give home delivery?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "What will be delivered? And When?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
];

const FAQPage: React.FC = () => {
  

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
                    <h1 className='text-5xl font-bold'>FAQ</h1>
                    <h5 className='py-3'>Home > <span className='text-[#FF9F0D]'>FAQ</span></h5>
                </div>
            </div>




    <div className="min-h-screen bg-gray-100">

      <main className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Questions Looks Here</h2>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200"
            >
              <div
                
                className="cursor-pointer flex justify-between items-center"
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-2xl">
      
                </span>
              </div>
            
                <p className="text-sm text-gray-600 mt-4">{faq.answer}</p>
              
            </div>
          ))}
        </div>
      </main>
    </div>
    </>
  );
};

export default FAQPage;