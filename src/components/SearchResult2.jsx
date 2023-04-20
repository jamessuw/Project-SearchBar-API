import React from 'react'
import "./SearchResult.css"

const SearchResult2 = ({result}) => {
  return (
    <div className="result-container" onClick={(e)=> alert (`You clicked on ${result.name}`)}>
      {result.name}
    </div>
  )
}

export default SearchResult2
