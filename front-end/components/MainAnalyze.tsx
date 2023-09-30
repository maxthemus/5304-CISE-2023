import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ArticleAnalyzeWidget from "./ArticleAnalyzeWidget";
import ArticleViewerModal from "./ArticleViewerModal";
import styles from "./MainAnalyze.module.css";

type MainAnalyzeType = {
  searchBar?: string;

  /** Style props */
  mainAnalyzePosition?: CSSProperties["position"];
  mainAnalyzeTop?: CSSProperties["top"];
  mainAnalyzeLeft?: CSSProperties["left"];
};

const MainAnalyze: NextPage<MainAnalyzeType> = ({
  searchBar,
  mainAnalyzePosition,
  mainAnalyzeTop,
  mainAnalyzeLeft,
}) => {
  const mainAnalyzeStyle: CSSProperties = useMemo(() => {
    return {
      position: mainAnalyzePosition,
      top: mainAnalyzeTop,
      left: mainAnalyzeLeft,
    };
  }, [mainAnalyzePosition, mainAnalyzeTop, mainAnalyzeLeft]);

  return (
    <div className={styles.mainAnalyze} style={mainAnalyzeStyle}>
      <ArticleAnalyzeWidget
        searchBar="/searchbar1.svg"
        articleAnalyzeWidgetPosition="absolute"
        articleAnalyzeWidgetTop="27px"
        articleAnalyzeWidgetLeft="57px"
      />
      <ArticleViewerModal
        articleViewerModalPosition="absolute"
        articleViewerModalTop="27px"
        articleViewerModalLeft="528px"
      />
    </div>
  );
};

export default MainAnalyze;
