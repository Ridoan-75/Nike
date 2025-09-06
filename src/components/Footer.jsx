import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-gray-300'>
            <div className='max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8'>
                {/* company info */}
                <div>
                    <h2 className='text-xl font-bold text-white mb-4'>Nike Shoes</h2>
                    <p>Discover the latest collection of Nike shoes, blending style and performance to keep you ahead in the game.</p>
                </div>
                {/* quick links */}
                <div>
                    <h2 className='text-xl font-bold text-white mb-4'>Quick Links</h2>
                    <ul className='space-y-2'>
                        <li className='hover:text-white'>Home</li>
                        <li className='hover:text-white'>Shop</li>
                        <li className='hover:text-white'>About Us</li>
                        <li className='hover:text-white'>Contact</li>
                    </ul>
                </div>
                {/* customer service */}
                <div>
                    <h2 className='text-xl font-bold text-white mb-4'>Customer Service</h2>
                    <ul className='space-y-2'>
                        <li className='hover:text-white'>FAQ</li>
                        <li className='hover:text-white'>Shipping & Returns</li>
                        <li className='hover:text-white'>Size Guide</li>
                        <li className='hover:text-white'>Track Order</li>
                    </ul>
                </div>
                {/* Follow us */}
                <div>
                    <h2 className='text-xl font-bold text-white mb-4'>Follow Us</h2>
                    <div className='flex gap-5'>
                        <a className='hover:text-white'><FaFacebook/></a>
                        <a className='hover:text-white'><FaSquareXTwitter/></a>
                        <a className='hover:text-white'><FaInstagram/></a>
                        <a className='hover:text-white'><FaYoutube/></a>
                    </div>
                </div>
            </div>
            {/* copyright section */}
            <div className='bg-gray-800 text-center py-4'>
              <p>&copy; {new Date().getFullYear()} Nike Shoes. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer