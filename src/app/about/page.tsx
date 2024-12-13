'use client'

import Image from "next/image"
import { BsTruck } from "react-icons/bs"
import { GiArtificialHive } from "react-icons/gi"
import { TbPigMoney } from "react-icons/tb"
import { FaRecycle } from "react-icons/fa"

export default function About() {
  return (
    <main className="container mx-auto p-16">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-teal-600 p-8 text-white">
          <h1 className="text-2xl font-semibold mb-4">About Us - Comforty</h1>
          <p className="mb-6">
            At Comforty, we believe that the type that you deserve should be more than just comfort. Something to be proud of, something that makes you feel INSPIRED, SO THAT EVERY TIME YOU WALK IN, there is this feeling of awe.
          </p>
          <button className="border border-white px-6 py-2 mt-14  hover:bg-white hover:text-teal-600 transition-colors">
            View collection
          </button>
        </div>
        <div className="bg-gray-100">
          <Image
            src="/product-1.svg"
            alt="White chair"
            width={500}
            height={400}
            style={{ width: '100%', height: 'auto' }}
            className="object-cover"
            priority={true}
          />
        </div>
      </section>

      {/* Brand Features Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          What Makes Our Brand Different
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <BsTruck className="w-8 h-8 mx-auto mb-4 text-teal-600" />
            <h3 className="font-medium mb-2">Next day delivery</h3>
            <p className="text-sm text-gray-600">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="text-center">
            <GiArtificialHive className="w-8 h-8 mx-auto mb-4 text-teal-600" />
            <h3 className="font-medium mb-2">Made by true artisans</h3>
            <p className="text-sm text-gray-600">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="text-center">
            <TbPigMoney className="w-8 h-8 mx-auto mb-4 text-teal-600" />
            <h3 className="font-medium mb-2">Unbeatable prices</h3>
            <p className="text-sm text-gray-600">
              For our materials and quality you won't find better prices anywhere
            </p>
          </div>
          <div className="text-center">
            <FaRecycle className="w-8 h-8 mx-auto mb-4 text-teal-600" />
            <h3 className="font-medium mb-2">Recycled packaging</h3>
            <p className="text-sm text-gray-600">
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Popular Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/product-17(1).jpg"
              alt="The hopeful sofa"
              width={400}
              height={300}
              style={{ width: '100%', height: 'auto' }}
              className="object-cover mb-4"
            />
            <h3 className="font-medium">The hopeful sofa</h3>
            <p className="text-gray-600">$939.00</p>
          </div>
          <div>
            <Image
              src="/product-15.svg"
              alt="The Dandy chair"
              width={400}
              height={300}
              style={{ width: '100%', height: 'auto' }}
              className="object-cover mb-4"
            />
            <h3 className="font-medium">The Dandy chair</h3>
            <p className="text-gray-600">$199.00</p>
          </div>
          <div>
            <Image
              src="/product-16.svg"
              alt="The Dandy chair"
              width={400}
              height={300}
              style={{ width: '100%', height: 'auto' }}
              className="object-cover mb-4 grayscale"
            />
            <h3 className="font-medium">The Dandy chair</h3>
            <p className="text-gray-600">$199.00</p>
          </div>
        </div>
      </section>
    </main>
  )
}
