'use client'

import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import Image from 'next/image'

interface CartItem {
  id: number
  image: string  
  name: string
  price: number
  size: string
  quantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      image: '/product-3.svg', 
      name: 'Library Stool Chair',
      price: 99,
      size: 'L',
      quantity: 1,
    },
    {
      id: 2,
      image: '/product-5.svg', 
      name: 'Library Stool Chair',
      price: 99,
      size: 'L',
      quantity: 1,
    },
  ])

  const [likedItems, setLikedItems] = useState<number[]>([])

  const toggleLike = (itemId: number) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const handleSizeChange = (id: number, size: string) => {
    setCartItems(prevItems =>
      prevItems.map(item => 
        item.id === id ? { ...item, size } : item
      )
    )
  }

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-semibold mb-6">Bag</h2>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-white rounded-lg shadow-sm flex-wrap"
              >
                <div className="w-24 h-24 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain rounded-md"
                    priority={true}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-lg">{item.name}</h3>
                      <p className="text-gray-600 mt-1">
                        MRP: ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => toggleLike(item.id)}
                        className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100"
                      >
                        {likedItems.includes(item.id) ? (
                          <AiFillHeart className="text-red-500 text-xl" />
                        ) : (
                          <AiOutlineHeart className="text-gray-600 text-xl" />
                        )}
                      </button>
                      <button className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100">
                        <BsTrash className="text-gray-600 text-lg" />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <div className="relative">
                      <select
                        className="appearance-none bg-gray-50 border cursor-pointer border-gray-200 rounded px-4 py-2 pr-8 focus:outline-none focus:border-teal-500"
                        value={item.size}
                        onChange={(e) => handleSizeChange(item.id, e.target.value)}
                      >
                        <option value="S">Size: S</option>
                        <option value="M">Size: M</option>
                        <option value="L">Size: L</option>
                      </select>
                    </div>
                    <div className="relative">
                      <select
                        className="appearance-none bg-gray-50 border cursor-pointer border-gray-200 rounded px-4 py-2 pr-8 focus:outline-none focus:border-teal-500"
                        value={item.quantity.toString()}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                      >
                        <option value="1">Quantity: 1</option>
                        <option value="2">Quantity: 2</option>
                        <option value="3">Quantity: 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-6">Summary</h2>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Delivery & Handling</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition-colors">
                Monitor Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
