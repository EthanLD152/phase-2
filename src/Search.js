import React from 'react';

function Search({search, onSearch}) {

  return (
    <div className="search">
      <label>Search</label>
      <input type="text" id="search" palceholder="Product" value={search} onChange={(e) => onSearch(e.target.value)}/>
    </div>
 )
}

export default Search;