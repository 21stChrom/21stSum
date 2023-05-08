import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Document from './Document';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.searchQuery.value;
    // perform search and update searchResults state
    setSearchResults(searchResults);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      {documents.map((document) => (
        <Document key={document.id} document={document} searchResults={searchResults} />
      ))}
    </div>
  );
};

export default App;