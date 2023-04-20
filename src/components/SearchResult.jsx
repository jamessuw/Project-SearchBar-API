import React from 'react'
import "./SearchResult.css"
import SearchResult2 from './SearchResult2';



const SearchResult = ({results}) => {
  return (
    <div className='results-list'>
  {
    results.map((result, id) =>{
return <SearchResult2 result={result} key ={id}/>;
    })}
    </div>
  );
};

export default SearchResult
