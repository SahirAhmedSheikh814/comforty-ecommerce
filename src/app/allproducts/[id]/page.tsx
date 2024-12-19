'use client';

import React from 'react';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';

const getProductDetails = (id: string) => {
    const products = [
        { id: '1', image: '/product-1.svg', title: 'Library Stool Chair', price: '$20', isNew: true },
        { id: '2', image: '/product-2.svg', title: 'Pink Armchair', price: '$30', isOnSale: true, salePrice: '$20' },
        { id: '3', image: '/product-3.svg', title: 'Orange Modern Chair', price: '$20' },
        { id: '4', image: '/product-4.svg', title: 'Luxury White Chair', price: '$20' },
        { id: '5', image: '/product-6.svg', title: 'Modern Wooden Chair', price: '$25', isNew: true },
        { id: '6', image: '/product-10.svg', title: 'Classic Leather Chair', price: '$50', isOnSale: true, salePrice: '$40' },
        { id: '7', image: '/product-13.svg', title: 'Adjustable Desk Chair', price: '$45' },
        { id: '8', image: '/product-8.svg', title: 'Comfy Lounge Chair', price: '$30' },
        { id: '9', image: '/product-9.svg', title: 'Ergonomic Office Chair', price: '$80', isNew: true },
        { id: '10', image: '/product-5.svg', title: 'Luxury Recliner Chair', price: '$120', isOnSale: true, salePrice: '$100' },
        { id: '11', image: '/product-3.svg', title: 'Wooden Rocking Chair', price: '$60' },
        { id: '12', image: '/product-7.svg', title: 'Sleek Desk Chair', price: '$35' },
    ];
  return products.find(product => product.id === id);
};

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = getProductDetails(id);

  if (!product) {
    return <div className="text-center py-16">Product not found</div>;
  }

  const { title, price, image, isNew, isOnSale, salePrice } = product;

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 bg-white">
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="w-full rounded-lg"
            priority={true}
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold flex items-center gap-4">
            {title}
            {isNew && <span className="text-sm bg-green-600 text-white px-2 py-1 rounded-full">New</span>}
          </h1>
          <div className="flex items-center gap-2">
            {isOnSale ? (
              <>
                <span className="text-xl font-bold text-red-600">{salePrice}</span>
                <span className="line-through text-gray-500">{price}</span>
              </>
            ) : (
              <span className="text-xl font-bold text-teal-600">{price}</span>
            )}
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

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold uppercase">Featured Products</h2>
          <button className="text-teal-600 hover:underline">View all</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: 'Library Stool Chair', price: '$99', image: '/product-3.svg' },
            { name: 'Library Stool Chair', price: '$89', image: '/product-4.svg' },
            { name: 'Library Stool Chair', price: '$99', image: '/product-5.svg' },
            { name: 'Library Stool Chair', price: '$89', image: '/product-6.svg' },
            { name: 'Library Stool Chair', price: '$99', image: '/product-7.svg' },
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
  );
};

export default ProductDetails;
