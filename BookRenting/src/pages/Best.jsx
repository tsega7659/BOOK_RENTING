// Best.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Best = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const query = 'books';

  const fetchResults = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    try {
      const response = await axios.get(url);
      const filteredResults = response.data.items.filter(
        book => book.volumeInfo.averageRating && book.volumeInfo.averageRating > 4
      );
      setResults(filteredResults);
      setError(null);
    } catch (err) {
      setError(`Error fetching results: ${err.message}`);
      console.error('Error fetching results:', err);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className='lg:mx-16 mx-4 mt-8 lg:mb-0 mb-4 bg-orange-50 p-3 font-serif '>
      <h2 className='text-orange-800 font-bold text-xl'>Best Rated Books</h2>
      <div className='lg:grid grid-cols-4 gap-4 mt-3 lg:p-6 rounded-3xl '>
        {results.map(result => (
          <div key={result.id} className='rounded-2xl shadow-2xl bg-orange-200 mb-4 mx-2 p-4'>
            <div className='mb-4 p- w-44 h-44'>
              <div className='lg:ml-16 mt-3'>
                {result.volumeInfo.imageLinks && (
                  <img
                    src={result.volumeInfo.imageLinks.thumbnail}
                    alt={result.volumeInfo.title}
                    className='object-cover w-[200px] h-[150px] m-2'
                  />
                )}
                <div className='absolute font-sm bg-orange-100 w-32 text-left rounded-md p-1 text-orange-400'>
                <div className='flex justify-between px-1'><span>rate</span><span>{result.volumeInfo.averageRating || 'No rating available'}</span></div>
                </div>
              </div>
            </div>
            <div className='p-'>
              <div className='font-medium text-orange-800 font-serif'>
                <h3>{result.volumeInfo.title}</h3>
              </div>
              <div className='text-orange-600 text-sm'>
                <p>By: {result.volumeInfo.authors ? result.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
              </div>
              <Link
                to={`/book/${result.id}`}
                state={{ book: result }}
                className='text-orange-900 underline'
              >
                More details
              </Link>
            </div>
          </div>
        ))}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Best;
