import "./SearchBar.css";
import { useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.district.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div>
      <div className="search-container">
        <h2 className="home-h2">Find the best beaches in the U.K</h2>
        <div className="search-inputs">
          <div className="search-icon">
            <SearchRoundedIcon id="search-icon-only" />
          </div>

          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
            className="search-field"
          />

          <div className="search-icon">
            {wordEntered.length !== 0 ? (
              <CloseRoundedIcon id="clear-text-btn" onClick={clearInput} />
            ) : (
              ""
            )}
          </div>
        </div>

        {filteredData.length !== 0 && (
          <div className="data-result">
            {filteredData.slice(0, 6).map((value, key) => {
              return (
                <a className="data-item" href={`/beaches/${value._id}`}>
                  <p className="beach-name">{value.name} </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
