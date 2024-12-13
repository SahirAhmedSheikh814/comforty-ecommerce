import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div>
        <div className=" mx-auto w-full max-w-[1100px] h-[600px] bg-[#F0F2F3] rounded-b-xl flex flex-col md:flex-row items-center md:items-stretch md:h-[600px] p-12">
  {/* Left Side - Text Content */}
  <div className="flex-1 flex flex-col justify-center gap-4 text-black text-center md:text-left md:pl-12">
    {/* Category Tag */}
    <p className="text-sm text-[#272343] font-semibold uppercase">
    Welcome to chairy
    </p>

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
    Best Furniture
Collection for your
interior.  
{/* /* <br /> Music Experience */ }
    </h2>

    {/* Button */}
    <button className="mt-6 bg-[#029FAe] hover:bg-green-600 text-white font-medium w-36 h-12 text-sm rounded mx-auto md:mx-0 flex items-center justify-center">
  Shop Now! 
  <FaArrowRight className="ml-2" size={20} />
</button>
  </div>

  {/* Right Side - Image with White Effect */}
  <div className="flex-1 flex justify-center items-center mt-6 md:mt-0 relative">

    {/* Image */}
    <Image
      src="/Hero.svg"
      alt="banner"
      width={300}
      height={200}
      className="relative z-10 w-[300px] h-[200px] md:w-[568px] md:h-[330px]"
      priority={true}
    />
  </div>
</div>

<div className="flex flex-wrap justify-center items-center gap-36 mt-14 sm:flex-col md:flex-row">
  <img src="/CLogo (1).svg" alt="Company 1" className="w-20 h-20" />
  <img src="/CLogo (2).svg" alt="Company 2" className="w-20 h-20" />
  <img src="/CLogo (3).svg" alt="Company 3" className="w-20 h-20" />
  <img src="/CLogo (4).svg" alt="Company 4" className="w-20 h-20" />
  <img src="/CLogo (5).svg" alt="Company 5" className="w-20 h-20" />
  <img src="/CLogo (6).svg" alt="Company 6" className="w-20 h-20" />
  <img src="/CLogo (7).svg" alt="Company 7" className="w-20 h-20" />
</div>
    </div>
  )
}

export default Hero