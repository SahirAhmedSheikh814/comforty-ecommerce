'use client';

import React from 'react';
import { BiCart } from 'react-icons/bi'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Slider settings
const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Default to 4 cards for large screens
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280, // Devices with screen width >= 1280px 
      settings: {
        slidesToShow: 3, // Show 3 cards
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // Devices with screen width >= 1024px (e.g., iPad Mini)
      settings: {
        slidesToShow: 3, // Show 3 cards
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600, // Small devices (e.g., mobile phones)
      settings: {
        slidesToShow: 2, // Show 2 cards
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Extra small devices (e.g., very small phones)
      settings: {
        slidesToShow: 1, // Show 1 card
        slidesToScroll: 1,
      },
    },
  ],
};

const Products = () => {
  const products = [
    {
      image: '/product-1.svg',
      title: 'Library Stool Chair',
      price: '$20',
      isNew: true,
    },
    {
      image: '/product-2.svg',
      title: 'Pink Armchair',
      price: '$30',
      isOnSale: true,
      salePrice: '$20',
    },
    {
      image: '/product-3.svg',
      title: 'Orange Modern Chair',
      price: '$20',
    },
    {
      image: '/product-4.svg',
      title: 'Luxury White Chair',
      price: '$20',
    },
  ];

  const ProductCard = ({
    image,
    title,
    price,
    isNew,
    isOnSale,
    salePrice,
  }: {
    image: string;
    title: string;
    price: string;
    isNew?: boolean;
    isOnSale?: boolean;
    salePrice?: string;
  }) => {
    return (
      <div className="relative group w-72 h-96 p-4 cursor-pointer bg-white shadow-md rounded-md hover:shadow-lg transition">
        {/* Tags */}
        {isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            New
          </span>
        )}
        {isOnSale && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Sale
          </span>
        )}

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-3/5 object-cover rounded-md"
        />

        {/* Info */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-black group-hover:text-[#007580] transition">
            {title}
          </h3>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center space-x-2">
              {isOnSale ? (
                <>
                  <span className="text-sm text-gray-500 line-through">
                    {price}
                  </span>
                  <span className="text-lg font-bold text-black group-hover:text-[#007580] transition">
                    {salePrice}
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-black group-hover:text-[#007580] transition">
                  {price}
                </span>
              )}
            </div>

            {/* Cart Icon */}
            <button className="hidden group-hover:flex items-center justify-center w-10 h-10 bg-[#007580] text-white rounded-full shadow hover:bg-[#005f60] transition">
              <BiCart size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 gap-4 bg-white min-h-full">
      <h2 className="text-3xl text-center sm:text-left font-bold my-6">Featured Products</h2>
      {/* Slider */}
      <Slider {...sliderSettings}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Slider>
    </div>
  );
};

export default Products;
