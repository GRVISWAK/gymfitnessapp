import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Chicken,Mutton,Panner etc.."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
        <button>Search</button>
    </div>
  );
};

export default SearchBar;