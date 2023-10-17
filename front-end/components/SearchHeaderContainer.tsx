import type { NextPage } from "next";
import SizeSmall from "./SizeSmall";
import SortByButton from "./SortByButton";
import styles from "./SearchHeaderContainer.module.css";

type SearchHeaderContainerType = {
  imageDimensions?: string;
  updateFilter: Function;

  updateSEFilter: Function;
  currentSEFIlter?: string;
  SEFilters ?: Array<string>;
};

const SearchHeaderContainer: NextPage<SearchHeaderContainerType> = ({
  imageDimensions,
  updateFilter,
  updateSEFilter,
  currentSEFIlter,
  SEFilters,

}) => {
  return (
    <div className={styles.searchHeader}>
      <div className={styles.searchForArticle}>Search For Article</div>
      <SizeSmall
        sizeSmallSizeSmall="/searchbar.svg"
        sizeSmallIconWidth="665px"
        sizeSmallIconHeight="74px"
        sizeSmallIconPosition="absolute"
        sizeSmallIconTop="61px"
        sizeSmallIconLeft="0px"
        updateFilter={updateFilter}
      />
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "70px"}}>
        <p style={{ fontSize: "20px"}}>Sort by SE practice</p>
        <SortByButton
          sortByButtonPosition="relative"
          sortByButtonTop="10px"
          sortByButtonLeft="10px"
          currentSEFIlter={currentSEFIlter}
          updateSEFilter={updateSEFilter}
          SEFilters={SEFilters}
        />
      </div>
   </div>
  );
};

export default SearchHeaderContainer;
