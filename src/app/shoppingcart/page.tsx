import Image from 'next/image'
import Navbar from '@/components/Navbar/Navbar';
export default function ShoppingCart() {
    return(
      <>

        <Navbar />

        
                  {/* Header Section */}
                  <div className="w-full relative text-center">
                    <Image src="/bg-image.png" alt="" width={1920} height={410} layout="responsive" />
                    <div className="w-full text-white absolute top-1/2 transform -translate-y-1/2">
                      <h1 className="text-4xl md:text-5xl font-bold">Shopping Cart</h1>
                      <h5 className="py-3 text-base md:text-lg">
                        Home &gt; <span className="text-[#FF9F0D]">Shopping Cart</span>
                      </h5>
                    </div>
                  </div>

                  <div className='w-full lg:w-[1920px] lg:mx-[300px] bg-white lg:pt-[130px'>
                    <Image 
                    src='/shoppingcart2.png'
                    alt=''
                    width={1320}
                    height={720}
                    layout='responsive'
                    />

                    <div className='lg:flex'>
                      
                  
                     <Image
                     src='/shoppingcart3.png'
                     alt=''
                     width={648}
                     height={252}
                     layout='responsive'
                     
                     />
                     <Image  src='/shoppingcart4.png' alt='' width={648} height={337} layout='responsive' />
                    
                    </div>

                  </div>

 </>       
    )
}


