import React, { useState } from "react";
interface ImageListProps {
  onSearch: (term: string) => void;
}
const SearchBar = ({ onSearch }: ImageListProps) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(term);
  };
  return (
    <form className="border-4 m-10 w-11/12 h-24 " onSubmit={handleFormSubmit}>
      <label className="m-4">Search Term</label>
      <div className="m-4">
        <input
          className="border-2 w-full pl-2"
          value={term}
          placeholder="Search a term..."
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default SearchBar;
