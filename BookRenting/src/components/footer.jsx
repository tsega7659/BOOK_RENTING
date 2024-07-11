import React from 'react';
import footer from '../assets/footer.jpeg';
import { FaTwitter, FaFacebook, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div className='relative mt-10'>
      <img className="w-full h-[200px] object-cover object-left " src={footer} alt="Footer Background"/>
      <div className='absolute top-0 right-0   p-4 justify-end '>
      <div className='flex justify-between'>
          <div className='flex flex-col text-white mx-96 p-4'>
            <div className='m-2 p-2'>
              <span className='px-6 hover:underline '>contact us</span>
              <span className='px-6 hover:underline '>FAQ</span>
            </div>
            <div className='text-sm mt-4 flex flex-col'>
              <span className='px-6'>copy right all rights reserved</span>
              <span className='px-6 py-2 text-center'>@2024</span>
            </div>
          </div>
          <a href="https://facebook.com"  className='text-white hover:text-orange-200 p-4'>
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com"  className='text-white hover:text-orange-200 p-4'>
            <FaInstagram size={24} />
          </a>
          <a href="https://telegram.org"  className='text-white hover:text-orange-200 p-4'>
            <FaTelegram size={24} />
          </a>
          <a href="https://youtube.com"  className='text-white hover:text-orange-200 p-4 '>
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
