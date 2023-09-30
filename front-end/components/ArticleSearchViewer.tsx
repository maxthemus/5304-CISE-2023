import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import SearchTableHeader from "./SearchTableHeader";
import styles from "./ArticleSearchViewer.module.css";

type ArticleSearchViewerType = {
  /** Style props */
  articleSearchViewerPosition?: CSSProperties["position"];
  articleSearchViewerTop?: CSSProperties["top"];
  articleSearchViewerLeft?: CSSProperties["left"];
};

const ArticleSearchViewer: NextPage<ArticleSearchViewerType> = ({
  articleSearchViewerPosition,
  articleSearchViewerTop,
  articleSearchViewerLeft,
}) => {
  const articleSearchViewerStyle: CSSProperties = useMemo(() => {
    return {
      position: articleSearchViewerPosition,
      top: articleSearchViewerTop,
      left: articleSearchViewerLeft,
    };
  }, [
    articleSearchViewerPosition,
    articleSearchViewerTop,
    articleSearchViewerLeft,
  ]);

  return (
    <div
      className={styles.articleSearchViewer}
      style={articleSearchViewerStyle}
    >
      <SearchTableHeader
        searchTableHeaderPosition="absolute"
        searchTableHeaderTop="0px"
        searchTableHeaderLeft="0px"
      />
    </div>
  );
};

export default ArticleSearchViewer;
