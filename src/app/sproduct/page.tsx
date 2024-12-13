'use client'

import Image from "next/image"
import { FiShoppingCart } from "react-icons/fi"

export default function SProduct() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      {/* Main Product Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <Image
            src="/product-2.svg"
            alt="Library Stool Chair"
            width={400}
            height={400}
            className="w-full rounded-lg"
            priority={true}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Library Stool Chair</h1>
          <div className="inline-block bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
            $299.00 USD
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit a est sit amet tempor. 
            Sed eleifend dui erat, quis tincidunt ex fermentum et. Duis pulvinar lectus vitae ex sollicitudin, 
            vitae sollicitudin nunc rutrum.
          </p>
          <button className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors">
            <FiShoppingCart className="text-xl" />
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold uppercase">Featured Products</h2>
          <button className="text-teal-600 hover:underline">View all</button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            {
              name: "Library Stool Chair",
              price: "$99",
              image: "/product-3.svg"
            },
            {
              name: "Library Stool Chair",
              price: "$89",
              image: "/product-4.svg"
            },
            {
              name: "Library Stool Chair",
              price: "$99",
              image: "/product-5.svg"
            },
            {
              name: "Library Stool Chair",
              price: "$89",
              image: "/product-6.svg"
            },
            {
              name: "Library Stool Chair",
              price: "$99",
              image: "/product-7.svg"
            }
          ].map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-square mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
              </div>
              <h3 className="font-medium text-sm">{product.name}</h3>
              <p className="text-gray-600 text-sm">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

