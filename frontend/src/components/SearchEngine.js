import { useState } from "react";
import searchBtn from "./assets/search.svg";
import SERPs from "./SERPs";

// Functional component for the search engine
const SearchEngine = () => {
  // State variables to manage display, content, and search query
  const [display, setDisplay] = useState("none");
  const [content, setContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search and fetch search results
  const handleSearch = async (e, start) => {
    e.preventDefault();

    // Set display to show results and clear content
    setDisplay("block");
    setContent("");

    try {
      // Send a POST request to the server with the search query and start parameter
      const response = await fetch("http://localhost:7000/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: searchQuery, start: start }),
      });

      // Parse the response JSON data
      const data = await response.json();

      // Render the search engine result page (SERP) component with the data
      setContent(<SERPs response={data} />);
    } catch (error) {
      // Log any errors to the console
      console.error(error);
    }
  };

  // JSX structure for rendering the search engine component
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

// Export the SearchEngine component for use in other parts of the application
export default SearchEngine;
