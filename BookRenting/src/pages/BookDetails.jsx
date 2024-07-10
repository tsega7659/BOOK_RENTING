import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { book } = location.state || { book: null };

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className='p-8 bg-orange-50 mt-12 mx-16 rounded-xl shadow-lg font-serif'>
      <h2 className='text-2xl font-bold mb-8 text-orange-900'>{book.volumeInfo.title}</h2>
      <div className='flex '>
        <div className='m-4  '>
          {book.volumeInfo.imageLinks && (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              className=' object-cover w-[1500px] h-[250px]  '
            />
            
          )}
        </div>
        <div className='ml-8 text-orange-800'>
          <p className='text-lg mb-2'><strong>Authors:</strong> {book.volumeInfo.authors.join(', ')}</p>
          <p className='text-lg mb-2'><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
          <p className='text-lg mb-2'><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
          <p className='text-lg mb-2'><strong>Page Count:</strong> {book.volumeInfo.pageCount}</p>
          <p className='text-lg mb-2'><strong>Description:</strong> {book.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
