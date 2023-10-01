import React from 'react';

function CategoSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        placeholder="Search CatName | BrandName"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default CategoSearch;
