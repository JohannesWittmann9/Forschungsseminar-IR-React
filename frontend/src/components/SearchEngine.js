import { useState } from "react";
import searchBtn from "./assets/search.svg";
import SERPs from "./SERPs";
import { postDataToServer } from "utils/utils";

const SearchEngine = () => {
  const [display, setDisplay] = useState("none");
  const [content, setContent] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchSearchResults = async (query, start) => {
    const response = await fetch("http://localhost:7000/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, start }),
    });
    return response.json();
  };

  const sendSearchInteraction = async (data, interaction_id) => {
    const user_id = localStorage.getItem("userId");
    const session_id = localStorage.getItem("sessionId");
    const interaction_type = "google";
    const number_of_retrieved_docs =
      data.searchInformation.formattedTotalResults;

    const searchUrl = "http://localhost:7000/api/searchinteractions";
    await postDataToServer(searchUrl, {
      interaction_id,
      user_id,
      session_id,
      interaction_type,
      query: searchQuery,
      number_of_retrieved_docs,
    });
  };

  const renderSearchResults = (data, interaction_id) => {
    setContent(<SERPs response={data} interaction_id={interaction_id} />);
  };

  const handleSearch = async (e, start) => {
    e.preventDefault();

    setDisplay("block");
    setContent("");

    try {
      const data = await fetchSearchResults(searchQuery, start);
      const interaction_id = crypto.randomUUID();
      sendSearchInteraction(data, interaction_id);
      renderSearchResults(data, interaction_id);
    } catch (error) {
      console.error("An error occurred:", error);
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
