import React from "react";
import styles from "../scss/components/_searchBar.module.scss";

import { SearchedContext } from "../App";

const SearchBar = () => {
  const { searchedWord, setSearchedWord } = React.useContext(SearchedContext); // ~ <Context.Consumer>

  return (
    <div className={styles.searchBarWrapper}>
      <i className={`fa-solid fa-magnifying-glass ${styles.searchIMG}`}></i>
      <input
        value={searchedWord}
        onChange={(event) => setSearchedWord(event.target.value)}
        placeholder="Найти пиццу..."
        className={styles.searchInput}
      />

      {searchedWord && (
        <i
          className={`fa-solid fa-xmark ${styles.searchCross}`}
          onClick={() => setSearchedWord("")}
        ></i>
      )}
    </div>
  );
};

export default SearchBar;
