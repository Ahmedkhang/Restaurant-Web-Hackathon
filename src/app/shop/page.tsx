import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
export default function Shop() {
  return (
    <>
    <Navbar />
      {/* Hero Section */}
      <div className="w-full relative text-center">
        <Image
          src="/bg-image.png"
          alt="Background"
          layout="responsive"
          width={1920}
          height={410}
        />
        <div className="absolute w-full text-white top-1/2 -translate-y-1/2">
          <h1 className="text-3xl md:text-5xl font-bold">Our Shop</h1>
          <h5 className="py-2 text-sm md:text-base">
            Home &gt; <span className="text-[#FF9F0D]">Shop</span>
          </h5>
        </div>
      </div>

      {/* Shop Parent */}
      <div className="w-full bg-white py-10">
        <div className="max-w-[1350px] px-4 mx-auto">
          {/* Input Div */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <h1 className="text-lg md:text-xl">Sort By :</h1>
              <input
                placeholder="Newest"
                type="text"
                className="h-[37px] w-[150px] bg-zinc-50 border border-[#E0E0E0] rounded-sm px-3"
              />
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-lg md:text-xl">Show :</h1>
              <input
                placeholder="Default"
                type="text"
                className="h-[37px] w-[150px] bg-zinc-50 border border-[#E0E0E0] rounded-sm px-3"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-6 mt-8">
            {/* Left - Product Grid */}
            <div className="w-full lg:w-3/4">
              <div className="flex flex-wrap justify-center gap-6">
                {/* Product Cards */}
                {[
                  { src: "/shopimg1.png", title: "Fresh Lime", price: "$38.00" },
                  { src: "/shopimg2.png", title: "Chocolate Muffin", price: "$28.00" },
                  { src: "/shopimg3.png", title: "Burger", price: "$21.00" },
                  { src: "/shopimg4.png", title: "Country Burger", price: "$45.00" },
                  { src: "/shopimg5.png", title: "Pizza", price: "$43.00" },
                  { src: "/shopimg6.png", title: "Cheese Butter", price: "$10.00" },
                  { src: "/shopimg7.png", title: "Sandwiches", price: "$25.00" },
                  { src: "/shopimg8.png", title: "Chicken Chup", price: "$12.00" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-[calc(100%-1rem)] md:w-[48%] lg:w-[30%] bg-white shadow rounded-md p-3"
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={312}
                      height={267}
                      className="w-full h-auto rounded"
                    />
                    <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                    <p className="text-[orange] font-bold text-lg mt-1">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <Image
                  src="/shopimg9.png"
                  alt="Pagination"
                  width={200}
                  height={6}
                  className="w-auto h-auto"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/4 border border-gray-200 p-4">
              <div className="flex">
                <input
                  placeholder="Search Your Keyword"
                  type="text"
                  className="w-[85%] h-[46px] px-3 bg-zinc-100 border border-gray-300 rounded-l"
                />
                <button className="w-[15%] bg-[#FF9F0D] flex justify-center items-center rounded-r">
                  <Image
                    src="/searchicon.png"
                    alt="Search"
                    width={20}
                    height={20}
                  />
                </button>
              </div>

              {/* Category */}
              <div className="mt-6">
                <h1 className="font-bold text-xl mb-4">Category</h1>
                {[
                  "Sandwiches",
                  "Burger",
                  "Chicken",
                  "Drink",
                  "Pizza",
                  "Thi",
                  "Non veg",
                  "Uncategorized",
                ].map((cat, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <Image
                      src="/shopimg12.png"
                      alt="Category Icon"
                      width={14}
                      height={14}
                      className="h-[14px]"
                    />
                    <p className="ml-2 text-lg">{cat}</p>
                  </div>
                ))}
              </div>

              <Image
                src="/shopimg13.png"
                alt="Banner"
                width={248}
                height={286}
                className="mt-6 w-full"
              />
              <Image
                src="/shopimg10.png"
                alt="Products"
                width={252}
                height={368}
                className="mt-6 w-full"
              />
              <Image
                src="/shopimg11.png"
                alt="Products2"
                width={252}
                height={368}
                className="mt-6 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
