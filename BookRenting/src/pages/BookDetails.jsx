import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state;

  if (!book) {
    return <div>Book details not available.</div>;
  }

  const { volumeInfo } = book;

  return (
    <div className='lg:mx-28 mx-6 my-6  lg:mb-0 mb-4 font-serif'>
      <h2 className='text-2xl font-bold mb-8 mt-12 text-orange-900'>{volumeInfo.title}</h2>
      {volumeInfo.imageLinks && (
        <img
          src={volumeInfo.imageLinks.thumbnail}
          alt={volumeInfo.title}
          className='object-cover w-[200px] h-[150px] m-2 mb-8'
        />
      )}
      <div className='text-orange-600 text-sm'>
        <p>By: {volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
      </div>
      <div className='text-orange-600 text-sm'>
        <p>{volumeInfo.description}</p>
      </div>
      <div className='text-orange-600 text-sm'>
        <p>Average Rating: {volumeInfo.averageRating || 'No rating available'}</p>
      </div>
      <div className='text-orange-600 text-sm'>
        <p>Published Date: {volumeInfo.publishedDate || 'No date available'}</p>
      </div>
      <div className='text-orange-600 text-sm'>
        <p>Page Count: {volumeInfo.pageCount || 'No page count available'}</p>
      </div>
    </div>
  );
};

export default BookDetails;
