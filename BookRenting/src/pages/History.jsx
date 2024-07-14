import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const History = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const genre = 'history';

  const fetchBooks = async () => {
    const query = `${genre} books`;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    try {
      const response = await axios.get(url);
      setBooks(response.data.items || []);
      setError(null);
    } catch (err) {
      setError(`Error fetching results: ${err.message}`);
      console.error('Error fetching results:', err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  
  const handleDownload = (link) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = link;
    downloadLink.setAttribute('download', 'book'); // You might need to modify the filename
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  };

  return (
    <div className='lg:mx-28  my-6 lg:mb-0 mb-4 font-serif'>
      <h2 className='mx-6 text-2xl font-bold mb-8 mt-12 text-orange-900'>Historical Books</h2>
      <div className='lg:grid grid-cols-4 gap-4 mt-3 p-6 rounded-3xl'>
        {books.map(book => (
          <div key={book.id} className='rounded-2xl shadow-2xl bg-orange-200 mb-4 mx-2 p-4'>
            <div className='mb-4 p- w-44 h-44'>
              <div className='lg:ml-16 ml-6 mt-3'>
                {book.volumeInfo.imageLinks && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className='object-cover w-[200px] h-[150px] m-2'
                  />
                )}
                <div className='absolute font-sm ml-2 bg-orange-50 lg:w-32 text-left rounded-md px-1 text-orange-400  '>
                    <div className='flex justify-between px-1  '><span className='mr-3'>rate</span><span >{book.volumeInfo.averageRating || 'No rating '}</span></div>
                </div>
              </div>
            </div>
            <div className='p-'>
              <div className='font-medium text-orange-800 font-serif'>
                <h3>{book.volumeInfo.title}</h3>
              </div>
              <div className='text-orange-600 text-sm'>
                <p>By: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
              </div>
              <div className='flex justify-between items-center mt-2'>
              <Link
                to={`/book/${result.id}`}
                state={{ book: result }}
                className='text-orange-900 underline'
              >
                More details
              </Link>
              <button
                onClick={() => alert('Download functionality not available')}
                className='text-orange-900'
              >
                <FaDownload />
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default History;
