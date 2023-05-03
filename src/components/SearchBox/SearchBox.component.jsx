import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, classname } = this.props;

    return (
      <input
        className={classname}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
