import { useState } from "react";
import searchBtn from "./assets/search.svg";
import SERPs from "./SERPs";

const SearchEngine = () => {
  const [display, setDisplay] = useState("none");
  const [content, setContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e, start) => {
    e.preventDefault();

    setDisplay("block");
    setContent("");
    try {
      const response = await fetch("http://localhost:7000/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: searchQuery, start: start }),
      });

      const data = await response.json();
      setContent(<SERPs response={data} />);
    } catch (error) {
      console.error(error);
    }
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
      <div className="results" style={{ display: display }}>
        {content}
      </div>
      <div className="next-result-pages" style={{ display: display }}>
        <span onClick={(e) => handleSearch(e, 1)}>1</span>
        <span onClick={(e) => handleSearch(e, 11)}>2</span>
        <span onClick={(e) => handleSearch(e, 21)}>3</span>
      </div>
    </div>
  );
};

export default SearchEngine;
