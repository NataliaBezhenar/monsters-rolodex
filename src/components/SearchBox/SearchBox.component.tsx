import { ChangeEvent } from "react";
import "./SearchBox.styles.css";

type SearchBoxProps = {
  classname: string;
  placeholder?: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  onChangeHandler,
  placeholder,
  classname,
}: SearchBoxProps) => (
  <input
    className={`search-box ${classname}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
