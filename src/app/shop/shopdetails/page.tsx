import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';

export default function ShopDetails() {
  return (
    <>
    <Navbar />
      {/* Header Section */}
      <div className="w-full relative text-center">
        <Image src="/bg-image.png" alt="" width={1920} height={410} layout="responsive" />
        <div className="w-full text-white absolute top-1/2 transform -translate-y-1/2">
          <h1 className="text-4xl md:text-5xl font-bold">Shop Details</h1>
          <h5 className="py-3 text-base md:text-lg">
            Home &gt; <span className="text-[#FF9F0D]">Shop Details</span>
          </h5>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-white px-4 md:px-10 lg:px-24">
        {/* Product Details */}
        <div className="flex flex-col md:flex-row items-start gap-8 py-10">
          {/* Left Side - Images */}
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              <Image src='/shopdetails1.png' alt="Image1" width={132} height={129} />
              <Image src='/shopdetails2.png' alt="Image2" width={132} height={129} />
              <Image src='/shopdetails3.png' alt="Image3" width={132} height={129} />
              <Image src='/shopdetails4.png' alt="Image4" width={132} height={129} />
            </div>
            <div>
              <Image src='/shopdetails5.png' alt="Image5" width={491} height={596} layout="responsive" />
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="flex-1">
            <div className="flex justify-between">
              <button className="w-24 h-7 bg-orange-500 text-white text-xs">In Stock</button>
              <Image src='/shopdetailsslide.png' alt="" width={152} height={28} />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mt-4">Yummy Chicken Chup</h1>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum
              non dui volutpat fringilla bibendum.
            </p>
            <h1 className="text-2xl font-bold mt-6">$54.00</h1>
            <Image src='/shopdetails6.png' alt="" width={323} height={24} className="mt-4" />
            <p className="mt-5">Dictum/cursus/Risus</p>
            <div className="flex items-center gap-4 mt-4">
              <Image src='/shopdetailscount.png' alt="" width={181} height={50} />
              <button className="w-48 h-12 bg-orange-500 text-white text-sm">Add to cart</button>
            </div>
            <Image src='/shopdetailswishlist.png' alt="" width={278} height={26} className="mt-4" />
            <p className="mt-2">Category: Pizza</p>
            <p className="mt-2">Tag: Our Shop</p>
            <Image src='/shopdetailssocial.png' alt="" width={278} height={26} className="mt-4 cursor-pointer" />
          </div>
        </div>

        {/* Description Section */}
        <div className="py-10">
          <div className="flex gap-5">
            <button className="w-40 h-12 bg-orange-500 text-white">Description</button>
            <h3 className="mt-4">Reviews(24)</h3>
          </div>
          <p className="mt-7 text-sm md:text-base leading-relaxed">
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod
            tellus.
          </p>
          <h1 className="text-xl font-bold mt-7">Key Benefits</h1>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
            <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
            <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
            <li>Mauris eget diam magna, in blandit turpis.</li>
          </ul>
        </div>

        {/* Similar Products */}
        <div className="py-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Similar Products</h1>
            <div className="flex gap-2">
              <Image src='/shopdetailsprevious.png' alt="" width={40} height={39} />
              <Image src='/shopdetailsnext.png' alt="" width={40} height={39} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div>
              <Image src='/shopimg1.png' alt="lime" width={312} height={267} layout="responsive" />
              <h3 className="font-bold mt-2">Fresh Lime</h3>
              <p className="text-orange-500 font-bold">$38.00</p>
            </div>
            <div>
              <Image src='/shopimg2.png' alt="muffin" width={312} height={267} layout="responsive" />
              <h3 className="font-bold mt-2">Chocolate Muffin</h3>
              <p className="text-orange-500 font-bold">$28.00</p>
            </div>
            <div>
              <Image src='/shopimg3.png' alt="burger" width={312} height={267} layout="responsive" />
              <h3 className="font-bold mt-2">Burger</h3>
              <p className="text-orange-500 font-bold">$21.00</p>
            </div>
            <div>
              <Image src='/shopimg4.png' alt="muffin" width={312} height={267} layout="responsive" />
              <h3 className="font-bold mt-2">Chocolate Muffin</h3>
              <p className="text-orange-500 font-bold">$28.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
