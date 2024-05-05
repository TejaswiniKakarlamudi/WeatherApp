import React, { useState } from 'react';
import './searchbox.css';

const SearchBox = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(location);
    setLocation('');
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
