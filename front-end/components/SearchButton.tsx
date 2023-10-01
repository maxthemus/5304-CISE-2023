import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./SearchButton.module.css";

type SearchButtonType = {
  search?: string;

  /** Style props */
  searchButtonPosition?: CSSProperties["position"];
  searchButtonFlexShrink?: CSSProperties["flexShrink"];
  searchButtonBackgroundColor?: CSSProperties["backgroundColor"];
  searchButtonWidth?: CSSProperties["width"];
  searchButtonHeight?: CSSProperties["height"];
  searchButtonCursor?: CSSProperties["cursor"];
  searchButtonTop?: CSSProperties["top"];
  searchButtonLeft?: CSSProperties["left"];
  searchTop?: CSSProperties["top"];
  searchLeft?: CSSProperties["left"];
  searchFontSize?: CSSProperties["fontSize"];
  searchColor?: CSSProperties["color"];
  searchTextAlign?: CSSProperties["textAlign"];

  /** Action props */
  onSearchButtonContainerClick?: () => void;
};

const SearchButton: NextPage<SearchButtonType> = ({
  searchButtonPosition,
  searchButtonFlexShrink,
  onSearchButtonContainerClick,
  searchButtonBackgroundColor,
  searchButtonWidth,
  searchButtonHeight,
  searchButtonCursor,
  searchButtonTop,
  searchButtonLeft,
  search="Search",
  searchTop,
  searchLeft,
  searchFontSize,
  searchColor,
  searchTextAlign,
}) => {
  const searchButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: searchButtonPosition,
      flexShrink: searchButtonFlexShrink,
      backgroundColor: searchButtonBackgroundColor,
      width: searchButtonWidth,
      height: searchButtonHeight,
      cursor: searchButtonCursor,
      top: searchButtonTop,
      left: searchButtonLeft,
    };
  }, [
    searchButtonPosition,
    searchButtonFlexShrink,
    searchButtonBackgroundColor,
    searchButtonWidth,
    searchButtonHeight,
    searchButtonCursor,
    searchButtonTop,
    searchButtonLeft,
  ]);

  const searchStyle: CSSProperties = useMemo(() => {
    return {
      top: searchTop,
      left: searchLeft,
      fontSize: searchFontSize,
      color: searchColor,
      textAlign: searchTextAlign,
    };
  }, [searchTop, searchLeft, searchFontSize, searchColor, searchTextAlign]);

  return (
    <div
      className={styles.searchButton}
      onClick={onSearchButtonContainerClick}
      style={searchButtonStyle}
    >
      <div className={styles.search} style={searchStyle}>
        {search}
      </div>
    </div>
  );
};

export default SearchButton;
