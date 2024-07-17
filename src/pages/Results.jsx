import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const Results = () => {
  const location = useLocation();
  const { results, query } = location.state || { results: [], query: '' };

  return (
    <div className='lg:mx-16 mx-4 mt-8 lg:mb-0 mb-4 bg-orange-50 p-3 font-serif '>
      <h2 className='text-orange-800 font-bold text-xl'>Results for: {query}</h2>
      <div className='lg:grid grid-cols-4 gap-4 mt-3 lg:p-6 rounded-3xl '>
        {results.map(result => (
          <div key={result.id} className='rounded-2xl shadow-2xl bg-orange-200 mb-6 mx-2 p-4'>
            <div className='mb-4  w-44 h-44'>
              <div className='lg:ml-10 ml-6 mt-3 '>
                {result.volumeInfo.imageLinks && (
                  <img
                    src={result.volumeInfo.imageLinks.thumbnail}
                    alt={result.volumeInfo.title}
                    className=' object-cover w-[200px] h-[150px] m-2'
                  />
                )}
                <div className='absolute font-sm bg-orange-50 lg:w-32 text-left rounded-md px-1 text-orange-400  '>
                    <div className='flex justify-between px-1  '><span className='mr-3'>rate</span><span >{result.volumeInfo.averageRating || 'No rating '}</span></div>
                </div>
              </div>
            </div>
            <div className='p-'>
              <div className='font-medium text-orange-800 font-serif'>
                <h3>{result.volumeInfo.title}</h3>
              </div>
              <div className='text-orange-600 text-sm'>
                <p>By: {result.volumeInfo.authors && result.volumeInfo.authors.join(', ')}</p>
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
    </div>
  );
};

export default Results;
