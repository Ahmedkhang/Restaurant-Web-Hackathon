export default function NewsletterSection() {
    return (
<div className="w-full lg:w-[1169px] mx-auto text-center mb-12 lg:flex gap-[10px] lg:gap-[271px]">
<div className="flex flex-col">
<h2 className="text-lg lg:text-3xl font-bold mb-4">
          <span className="text-[#FF9F0D]">Still</span> You Need Our Support ?
        </h2>
        <p className="text-sm mb-6">Don&apos;t wait make a smart & logical quote here. Its pretty easy.</p>
</div>

        <form className="w-[100px] lg:w-[459px] h-[55.86px] flex max-w-2xl mx-auto">
          <input 
            type="email"
            placeholder="Enter Your Email"
            className="flex-grow hidden lg:block bg-white text-white  placeholder-opacity-60 px-4 py-2 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-[#FF9F0D] px-2 lg:px-6 py-2 rounded-r-md font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    )
  }
  
  