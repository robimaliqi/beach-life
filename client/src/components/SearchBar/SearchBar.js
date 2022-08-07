export const SearchBar = ({ placeholder, searchData }) => {
  return (
    <div className="search">
      <div className="search-inputs">
        <input type="text" placeholder={placeholder} />
        <div classname="search-icon"></div>
      </div>
      <div className="search-results"></div>
    </div>
  );
};
