import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./SearchButton.module.css";

type SearchButtonType = {
  /** Style props */
  searchButtonPosition?: CSSProperties["position"];
  searchButtonFlexShrink?: CSSProperties["flexShrink"];

  /** Action props */
  onSearchButtonContainerClick?: () => void;
};

const SearchButton: NextPage<SearchButtonType> = ({
  searchButtonPosition,
  searchButtonFlexShrink,
  onSearchButtonContainerClick,
}) => {
  const searchButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: searchButtonPosition,
      flexShrink: searchButtonFlexShrink,
    };
  }, [searchButtonPosition, searchButtonFlexShrink]);

  return (
    <div
      className={styles.searchButton}
      onClick={onSearchButtonContainerClick}
      style={searchButtonStyle}
    >
      <div className={styles.search}>Search</div>
    </div>
  );
};

export default SearchButton;
