import React from 'react';

function CategoPagination({ totalPages, currentPage, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <li key={i} style={{ display: 'inline-block', textAlign: 'center', margin: '1rem 1rem' }}>
        <button onClick={() => paginate(i)} className={currentPage === i ? 'active' : 'active'}>
          {i}
        </button>
      </li>
    );
  }

  return <ul className="pagination">{pageNumbers}</ul>;
}

export default CategoPagination;
