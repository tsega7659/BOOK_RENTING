import React from 'react';
import {  FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className=' bg-orange-950 bottom-0    '>
      <div className='flex flex-col text-center items-center   '>
      <div className='flex mt-4'>
          <a href="https://facebook.com"  className='text-white hover:text-orange-200 p-2 lg:p-4'>
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com"  className='text-white hover:text-orange-200 p-2 lg:p-4'>
            <FaInstagram size={24} />
          </a>
          <a href="https://telegram.org"  className='text-white hover:text-orange-200 p-2 lg:p-4'>
            <FaTelegram size={24} />
          </a>
          <a href="https://youtube.com"  className='text-white hover:text-orange-200 p-2 lg:p-4 '>
            <FaYoutube size={24} />
          </a>
          </div>
          <div className='flex flex-col text-orange-300  mx-1  p-4'>
            <div className='m-2 p-2'>
              <span className='px-4 hover:underline '><Link to="/contactus">contact us</Link></span>
              <span className='px-4 hover:underline '> <Link to="/FAQ" >FAQ</Link></span>
            </div>
            <div className='text-sm  flex flex-col '>
              <span className='py-2'>&copy;all rights reserved</span>
              <span className='  text-center'>@2024<span className='text-orange-700 px-2 '>Yeabsira Zelalem</span></span>
            </div>
          </div>
          
          
        </div>
      </div>
    
  );
}

export default Footer;
