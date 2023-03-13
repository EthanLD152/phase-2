import React from 'react';

function Search({search, onSearchChange }) {

  return (
    <div className="search">
      <label>Search</label>
      <input type="text" id="search" placeholder="Product" value={search} onChange={(e) => onSearchChange(e.target.value)}/>
    </div>
 )
}

export default Search;