import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiDictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiDictionaryUrl).then(handleDictionaryResponse);

    let apiUrlPexels = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let apiKeyPexels =
      "563492ad6f91700001000001aca43bb59e024affb54249dd505ba27c";

    axios
      .get(apiUrlPexels, {
        headers: { Authorization: `Bearer ${apiKeyPexels}` },
      })
      .then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>Which word would you like to look up?</h1>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />{" "}
    </div>
  );
}
