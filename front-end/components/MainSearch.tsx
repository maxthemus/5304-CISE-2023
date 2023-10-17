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
  const [SEfilters, setSEfilters] = useState(["ALL", "TEST"]);
  const [currentSEfilter, setCurrentSEFilter] = useState("ALL");

  const updateFilter = (value: string) => {
    setSearchFilter(value);
  };

  return (
    <div className={styles.mainSearch} style={mainSearchStyle}>
      <SearchHeaderContainer imageDimensions="/searchbar2.svg" updateFilter={updateFilter} updateSEFilter={setCurrentSEFilter} currentSEFIlter={currentSEfilter} SEFilters={SEfilters} />
      <ArticleSearchViewer
        articleSearchViewerPosition="absolute"
        articleSearchViewerTop="233px"
        articleSearchViewerLeft="0px"
        filterValue={searchFilter}
        SEFilter={currentSEfilter}
        updateSETypes={setSEfilters}
      />
    </div>
  );
};

export default MainSearch;
