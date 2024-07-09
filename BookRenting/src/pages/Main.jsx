import React, { useState } from 'react';
import axios from 'axios';

const Main = () => {
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books"
        />
        <button type="submit">Search</button>
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
  );
};

export default Main;
