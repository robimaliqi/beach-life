import { useState } from "react";

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

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="search-icon"></div>
      </div>
      {filteredData.length !== 0 && (
        <div className="data-result">
          {filteredData.slice(0, 6).map((value, key) => {
            return (
              <a
                className="data-item"
                href={"/results"}
                target="_blank"
                rel="noreferrer"
              >
                <p>{value.name} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
