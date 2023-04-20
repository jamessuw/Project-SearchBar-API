import React, {useState} from "react";
import './App.css';
import { SearchBar } from "./components/SearchBar";
import SearchResult from "./components/SearchResult";



function App() {
  const [results, setResults] = useState ([]);
  return (
  <div className="container-app">
    <div className="App">
      <h1>SEARCH BAR API</h1>
      <div className='search-bar-container'>

<SearchBar setResults={setResults} id="test" />
<SearchResult results={results}/>
</div>

      </div>
      
    </div>
  );
}

export default App;
