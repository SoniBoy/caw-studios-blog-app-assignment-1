import React, { useState } from "react";

import "./SearchBar.css";

const SearchBar = ({ onClick = (searchString) => {} }) => {
  const [searchString, setSearchString] = useState("");
  const onSearchStringChanged = (event) => {
    setSearchString(event.target.value);
  };
  const onSearchButtonClicked = () => {
    onClick(searchString);
  };
  return (
    <div className="search-bar">
      <input
        placeholder="Enter Title"
        value={searchString}
        onChange={onSearchStringChanged}
      ></input>
      <button onClick={onSearchButtonClicked}>Search By Title</button>
    </div>
  );
};

export default SearchBar;
