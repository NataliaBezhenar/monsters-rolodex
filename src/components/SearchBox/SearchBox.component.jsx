import "./SearchBox.styles.css";

const SearchBox = ({ onChangeHandler, placeholder, classname }) => (
  <input
    className={`search-box ${classname}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
