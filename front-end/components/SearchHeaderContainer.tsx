import type { NextPage } from "next";
import SizeSmall from "./SizeSmall";
import SortByButton from "./SortByButton";
import styles from "./SearchHeaderContainer.module.css";

type SearchHeaderContainerType = {
  imageDimensions?: string;
  updateFilter: Function;
};

const SearchHeaderContainer: NextPage<SearchHeaderContainerType> = ({
  imageDimensions,
  updateFilter=(() => {})
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
      <SortByButton
        sortByButtonPosition="absolute"
        sortByButtonTop="154px"
        sortByButtonLeft="224px"
      />
    </div>
  );
};

export default SearchHeaderContainer;
