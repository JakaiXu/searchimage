import React, { useState } from "react";
import SearchBar from "./SearchBar";
import searchImages from "../api";
import ImageList from "./ImageList";

interface Results {
  id: string;
  urls: {
    regular: string;
  };
}

const App = () => {
  const [results, setResults] = useState<Results[]>([]);
  const handleSearch = async (term: string) => {
    setResults(await searchImages(term));
    
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ImageList results={results} />
    </div>
  );
};

export default App;
