import React from 'react'

export const SearchBar = ({updateSearchQuery, searchQuery}) => {
  return (
    <div>
        <input type="text" value={searchQuery} onChange={(e) => updateSearchQuery(e.target.value)} />
    </div>
  )
}
