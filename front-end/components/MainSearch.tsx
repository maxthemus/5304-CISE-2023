import type { NextPage } from "next";
import { useMemo, type CSSProperties, useState } from "react";
import SearchHeaderContainer from "./SearchHeaderContainer";
import ArticleSearchViewer from "./ArticleSearchViewer";
import styles from "./MainSearch.module.css";

type MainSearchType = {
  searchBar?: string;

  /** Style props */
  mainSearchPosition?: CSSProperties["position"];
  mainSearchTop?: CSSProperties["top"];
  mainSearchLeft?: CSSProperties["left"];
};

const MainSearch: NextPage<MainSearchType> = ({
  searchBar,
  mainSearchPosition,
  mainSearchTop,
  mainSearchLeft,
}) => {
  const mainSearchStyle: CSSProperties = useMemo(() => {
    return {
      position: mainSearchPosition,
      top: mainSearchTop,
      left: mainSearchLeft,
    };
  }, [mainSearchPosition, mainSearchTop, mainSearchLeft]);

  const [searchFilter, setSearchFilter] = useState<string>("");

  const updateFilter = (value: string) => {
    setSearchFilter(value);
  };

  return (
    <div className={styles.mainSearch} style={mainSearchStyle}>
      <SearchHeaderContainer imageDimensions="/searchbar2.svg" updateFilter={updateFilter} />
      <ArticleSearchViewer
        articleSearchViewerPosition="absolute"
        articleSearchViewerTop="233px"
        articleSearchViewerLeft="100px"
        filterValue={searchFilter}
      />
    </div>
  );
};

export default MainSearch;
