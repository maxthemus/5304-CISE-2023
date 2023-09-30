import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./SearchTableHeader.module.css";

type SearchTableHeaderType = {
  /** Style props */
  searchTableHeaderPosition?: CSSProperties["position"];
  searchTableHeaderTop?: CSSProperties["top"];
  searchTableHeaderLeft?: CSSProperties["left"];
};

const SearchTableHeader: NextPage<SearchTableHeaderType> = ({
  searchTableHeaderPosition,
  searchTableHeaderTop,
  searchTableHeaderLeft,
}) => {
  const searchTableHeaderStyle: CSSProperties = useMemo(() => {
    return {
      position: searchTableHeaderPosition,
      top: searchTableHeaderTop,
      left: searchTableHeaderLeft,
    };
  }, [searchTableHeaderPosition, searchTableHeaderTop, searchTableHeaderLeft]);

  return (
    <div className={styles.searchTableHeader} style={searchTableHeaderStyle}>
      <div className={styles.viewColumnName}>
        <div className={styles.frame} />
        <div className={styles.articleName}>Article Name</div>
      </div>
      <div className={styles.viewColumnAuthor}>
        <div className={styles.frame1} />
        <div className={styles.author}>Author</div>
      </div>
      <div className={styles.viewColumnPublisheddate}>
        <div className={styles.frame} />
        <div className={styles.publishedDate}>Published Date</div>
      </div>
    </div>
  );
};

export default SearchTableHeader;
