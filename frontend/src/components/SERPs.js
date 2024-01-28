import React, { useEffect, useState } from "react";

// Author: Mrunank Pawar
// Date: Aug 10, 2022
// Title of source code: Build a Custom Search Engine
// Type: source code
// Web address: https://dev.to/techbrewers/custom-search-engine-3o1f

const SERPs = ({ response }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    try {
      let newContent = response.items.map((item, i) => (
        <div key={i} className="result">
          <br />
          <a
            className="result-title"
            target="_blank"
            href={item.link}
            rel="noopener noreferrer"
          >
            <p>{item.title}</p>
          </a>
          <a
            className="result-link"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.link}
          </a>

          <div
            className="result-snippet"
            dangerouslySetInnerHTML={{ __html: item.htmlSnippet }}
          />
        </div>
      ));

      setContent(newContent);
    } catch (error) {
      setContent("error!");
    }
  }, [response]);

  return (
    <div>
      <div className="num-results">
        About {response.searchInformation.formattedTotalResults} results in{" "}
        {response.searchInformation.formattedSearchTime} seconds!
      </div>
      <div className="results">{content}</div>
    </div>
  );
};

export default SERPs;
