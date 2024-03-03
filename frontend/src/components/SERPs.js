import React, { useEffect, useState } from "react";

// Author: Mrunank Pawar
// Date: Aug 10, 2022
// Title of source code: Build a Custom Search Engine
// Type: source code
// Web address: https://dev.to/techbrewers/custom-search-engine-3o1f

const SERPs = ({ response, interaction_id }) => {
  const [content, setContent] = useState([]);
  
  // Effect to update content when the response data changes
  useEffect(() => {
    // const handleItemClick = (item, index) => {
    //   const data = {
    //     interaction_id: interaction_id, // Assuming you have interaction_id available
    //     doc_title: item.title,
    //     doc_position: index,
    //     doc_page_viewed: item.cacheId,
    //   };

    //   // Sending message to background script
    //   chrome.runtime.sendMessage({ type: "itemClicked", data: data });
    // };

    try {
      // Map through the items in the response to create result components
      let newContent = response.items.map((item, i) => (
        <div key={i} className="result">
          <br />
          {/* Link to the result's title with target="_blank" for opening in a new tab */}
          <a
            className="result-title"
            target="_blank"
            href={item.link}
            rel="noopener noreferrer"
            // onClick={() => handleItemClick(item, i)}
          >
            <p>{item.title}</p>
          </a>
          {/* Link to the result's URL with target="_blank" for opening in a new tab */}
          <a
            className="result-link"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.link}
          </a>
          {/* Render the HTML snippet of the result */}
          <div
            className="result-snippet"
            dangerouslySetInnerHTML={{ __html: item.htmlSnippet }}
          />
        </div>
      ));

      // Update the content state with the new result components
      setContent(newContent);
    } catch (error) {
      // Handle errors by setting content to an error message
      setContent("error!");
    }
  }, [response]);

  // JSX structure for rendering the Search Engine Results Pages
  return (
    <div>
      {/* Display the number of results and search time */}
      <div className="num-results">
        About {response.searchInformation.formattedTotalResults} results in{" "}
        {response.searchInformation.formattedSearchTime} seconds!
      </div>
      {/* Display the search results */}
      <div className="results">{content}</div>
    </div>
  );
};

// Export the SERPs component for use in other parts of the application
export default SERPs;
