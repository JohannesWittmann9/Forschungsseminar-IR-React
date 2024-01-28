import { useState } from "react";
import searchBtn from "./assets/search.svg";
import useScript from "../../hook/useScript";

const SearchEngine = () => {
  const gcse_url = "https://cse.google.com/cse.js?cx=83888686aa3ed4586";
  useScript(gcse_url);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    let url = `http://localhost:3000/?q=${searchQuery}`;
    window.open(url, "_self");
    window.location.reload();
  };

  return (
    <div id="normal-se">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          name=""
          type="text"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter your search query..."
        />
        <button type="submit" className="search-btn">
          <img src={searchBtn} alt="" />
        </button>
      </form>
      <div class="gcse-searchresults-only"></div>
    </div>
  );
};

export default SearchEngine;
