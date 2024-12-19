 'use client';

import React from 'react';
import { BiCart } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Slider settings
const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const AllProducts = () => {
  const products = [
    { id: 1, image: '/product-1.svg', title: 'Library Stool Chair', price: '$20', isNew: true },
    { id: 2, image: '/product-2.svg', title: 'Pink Armchair', price: '$30', isOnSale: true, salePrice: '$20' },
    { id: 3, image: '/product-3.svg', title: 'Orange Modern Chair', price: '$20' },
    { id: 4, image: '/product-4.svg', title: 'Luxury White Chair', price: '$20' },
  ];

  const moreProducts = [
    { id: 5, image: '/product-6.svg', title: 'Modern Wooden Chair', price: '$25', isNew: true },
    { id: 6, image: '/product-10.svg', title: 'Classic Leather Chair', price: '$50', isOnSale: true, salePrice: '$40' },
    { id: 7, image: '/product-13.svg', title: 'Adjustable Desk Chair', price: '$45' },
    { id: 8, image: '/product-8.svg', title: 'Comfy Lounge Chair', price: '$30' },
  ];

  const additionalProducts = [
    { id: 9, image: '/product-9.svg', title: 'Ergonomic Office Chair', price: '$80', isNew: true },
    { id: 10, image: '/product-5.svg', title: 'Luxury Recliner Chair', price: '$120', isOnSale: true, salePrice: '$100' },
    { id: 11, image: '/product-3.svg', title: 'Wooden Rocking Chair', price: '$60' },
    { id: 12, image: '/product-7.svg', title: 'Sleek Desk Chair', price: '$35' },
  ];
  const instagramPosts = [
         "/product-1.svg",
         "/product-2.svg",
         "/product-3.svg",
         "/product-4.svg",
         "/product-5.svg",
         "/product-6.svg",
       ];
  interface ProductCardProps {
    id: number; // or string, based on your data type
    image: string;
    title: string;
    price: string;
    isNew?: boolean;
    isOnSale?: boolean;
    salePrice?: string;
  }
  const ProductCard: React.FC<ProductCardProps> = ({ id, image, title, price, isNew, isOnSale, salePrice }) => (
    <Link href={`/allproducts/${id}`}>
      <div className="relative group w-72 h-96 p-4 cursor-pointer bg-white shadow-md rounded-md hover:shadow-lg transition">
        {isNew && <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>}
        {isOnSale && <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span>}
        <Image src={image} alt={title} className="w-full h-3/5 object-cover rounded-md" width={300} height={300} priority />
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-black group-hover:text-[#007580] transition">{title}</h3>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-2">
              {isOnSale ? (
                <>
                  <span className="text-sm text-gray-500 line-through">{price}</span>
                  <span className="text-lg font-bold text-black group-hover:text-[#007580] transition">{salePrice}</span>
                </>
              ) : (
                <span className="text-lg font-bold text-black group-hover:text-[#007580] transition">{price}</span>
              )}
            </div>
            <button className="hidden group-hover:flex items-center justify-center w-10 h-10 bg-[#007580] text-white rounded-full shadow hover:bg-[#005f60] transition">
              <BiCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="p-8 gap-4 bg-white min-h-full">
      <h2 className="text-3xl font-bold my-8 mb-12">All Products</h2>
      {[products, moreProducts, additionalProducts].map((productList, index) => (
        <div key={index}>
          <Slider {...sliderSettings}>
            {productList.map(product => <ProductCard key={product.id} {...product} />)}
          </Slider>
          <br />
        </div>
      ))}
  
      {/* Newsletter Section */}
      <div className='bg-gray-100 p-20 rounded-2xl'>
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-6">Or Subscribe To The Newsletter</h2>
          <div className="flex max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Email Address..."
              className="mr-2 border-b border-black rounded-none focus:ring-0 bg-transparent"
            />
            <Button variant="outline" className="border-b border-black rounded-none bg-transparent">
              SUBMIT
            </Button>
          </div>
        </div>
  
        {/* Instagram Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-6">Follow Products And Discounts On Instagram</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => (
              <div key={index} className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={post}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
