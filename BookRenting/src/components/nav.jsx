import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa'; 
const Nav = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const fetchResults = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    try {
      const response = await axios.get(url);
      setResults(response.data.items || []);
      setError(null);
    } catch (err) {
      setError(`Error fetching results: ${err.message}`);
      console.error('Error fetching results:', err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchResults();
  };
  return (
    <div>
        <div className='flex justify-evenly bg-orange-100 p-4 '>
          <div className='p-4'>jhg</div>
          <div className='flex items-center justify-between p-3 mx-2'>
           <div className="relative group shadow-xl px-4 bg-orange-200 text-orange-600  rounded-2xl w-44 mx-4 ml-64 text-center">
                <div className="p-2"> Search by Genres</div>
                <div className="absolute hidden group-hover:block">
                  <ul className='absolute bg-orange-200 mt-4  p-2 rounded-xl'>
                    <li className='py-1 hover:text-orange-50 hover:underline'> Fantasy</li>
                    <li className='py-1 hover:text-orange-50 hover:underline'>Mystery</li>
                    <li className='py-1 hover:text-orange-50 hover:underline'>Thriller</li>
                    <li className='py-1 hover:text-orange-50 hover:underline'>Romance</li>
                    <li className='py-1 hover:text-orange-50 hover:underline'>Biography/Autobiography</li>
                    <li className='py-1 hover:text-orange-50 hover:underline'>Self-Help</li>
                    <li className='py-1 hover:text-orange-50 hover:underline'>History</li>
                    <li className='py-1 hover:text-orange-50 hover:underline'>Science</li>

                  </ul>
                </div>
            </div>
       <div className='ml-32 '>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for books"
                  className='text-orange-600 p-2 py-3 mx-2 rounded-xl  focus:outline-none '
                />
                <button type="submit" className='text-orange-300 py-2 px-3 hover:text-orange-200 ' ><FaSearch size={24} /></button>
              </form>
              {error && <p>{error}</p>}
              <div>
                {results.map(result => (
                  <div key={result.id}>
                    <h3>{result.volumeInfo.title}</h3>
                    <p>{result.volumeInfo.authors && result.volumeInfo.authors.join(', ')}</p>
                    {result.volumeInfo.imageLinks && (
                      <img src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Nav