import React from "react";
import { SearchContext } from "../../App";

import styles from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.search}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.root}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <p onClick={() => setSearchValue("")} className={styles.close}>
          X
        </p>
      )}
    </div>
  );
};

export default Search;
