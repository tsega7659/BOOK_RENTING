import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpeg";
import Main from '../pages/Main';

const Nav = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchResults = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

    try {
      const response = await axios.get(url);
      navigate('/results', { state: { results: response.data.items || [], query } });
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
    <div className='font-serif'>
      <div className='flex justify-between bg-orange-100 p-1 '>
        <div className='rounded-full lg:mx-12 mx-2  hidden lg:block'>
          <img src={logo} className='rounded-full w-24' alt="Logo" />
          <span className='text-sm text-orange-500 text-idalist '>Tsimona Books</span>
        </div>
        <div className='lg:flex items-center justify-between px-2 lg:mr-12 mr-2 mt-2 lg:mt'>
          <div> <Link to={Main} className='text-orange-800 hover:underline  ml-8 '>Home</Link> </div>
          <div className="relative group shadow-xl px-4 bg-orange-200 text-orange-600 rounded-2xl w-44 mx-2 lg:ml-16 text-center z-50 mb-2">
            <div className="p-1">Search by Genres</div>
            <div className="absolute hidden group-hover:block z-50">
              <ul className="absolute bg-orange-200 mt-4 p-2 rounded-xl shadow-lg">
                <li className="py-1 hover:text-orange-50 hover:underline">Fantasy</li>
                <li className="py-1 hover:text-orange-50 hover:underline">Mystery</li>
                <li className="py-1 hover:text-orange-50 hover:underline">Thriller</li>
                <li className="py-1 hover:text-orange-50 hover:underline">Romance</li>
                <li className="py-1 hover:text-orange-50 hover:underline">Biography/Autobiography</li>
                <li className="py-1 hover:text-orange-50 hover:underline">Self-Help</li>
                <li className="py-1 hover:text-orange-50 hover:underline">History</li>
                <li className="py-1 hover:text-orange-50 hover:underline">Science</li>
              </ul>
            </div>
          </div>
          <div className='ml-2 lg:mb-0 mb-4'>
            <form onSubmit={handleSubmit} className='flex mt-'>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for books"
                className='text-orange-600 p-1 lg:mx-2 rounded-xl focus:outline-none'
              />
              <button type="submit" className='text-orange-300 px-3 hover:text-orange-200'>
                <FaSearch size={24} />
              </button>
            </form>
            {error && <p>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
