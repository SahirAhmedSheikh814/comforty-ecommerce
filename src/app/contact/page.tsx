'use client'

import { IoLocationOutline } from "react-icons/io5"
import { BsTelephone, BsClock } from "react-icons/bs"
import { FaTrophy, FaShieldAlt, FaHeadset } from "react-icons/fa"

export default function ContactPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-2">Get in Touch With Us</h1>
      <p className="text-center text-gray-600 mb-12 max-w-[600px] mx-auto">
        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <IoLocationOutline className="text-teal-600 text-2xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <BsTelephone className="text-teal-600 text-2xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">
                Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <BsClock className="text-teal-600 text-2xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Working Time</h3>
              <p className="text-gray-600">
                Monday-Friday: 9:00 - 22:00
                <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 px-4 rounded-md hover:bg-teal-700 transition-colors text-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16 bg-gray-100 p-8 rounded-lg">
        <div className="flex items-center gap-4">
          <FaTrophy className="text-4xl text-teal-600" />
          <div>
            <h3 className="font-semibold">High Quality</h3>
            <p className="text-sm text-gray-600">Crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaShieldAlt className="text-4xl text-teal-600" />
          <div>
            <h3 className="font-semibold">Warranty Protection</h3>
            <p className="text-sm text-gray-600">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaHeadset className="text-4xl text-teal-600" />
          <div>
            <h3 className="font-semibold">24 / 7 Support</h3>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

