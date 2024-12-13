import React from 'react';
import Image from 'next/image';

const TopCate: React.FC = () => {
  
  const categories = [
    {
      name: 'Wing Chair',
      quantity: '3,584',
      image: '/product-5.svg', 
    },
    {
      name: 'Wooden Chair',
      quantity: '157',
      image: '/product-6.svg',
    },
    {
      name: 'Desk Chair',
      quantity: '154',
      image: '/product-7.svg',
    },
  ];

  return (
    <div className="p-6">
      {/* Section Heading */}
      <h2 className="text-3xl text-center sm:text-left font-bold mb-8">Top Categories</h2>
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            {/* Image */}
            <Image
              src={category.image}
              alt={category.name}
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Hover Effect */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm">{category.quantity} Products</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCate;
