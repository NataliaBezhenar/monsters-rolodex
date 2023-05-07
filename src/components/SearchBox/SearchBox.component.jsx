import { Component } from "react";

import "./SearchBox.styles.css";
class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, classname } = this.props;

    return (
      <input
        className={`search-box ${classname}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
