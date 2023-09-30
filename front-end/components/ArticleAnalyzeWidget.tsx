import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import SizeSmall from "./SizeSmall";
import ArticleModerationViewer from "./ArticleModerationViewer";
import styles from "./ArticleAnalyzeWidget.module.css";

type ArticleAnalyzeWidgetType = {
  searchBar?: string;

  /** Style props */
  articleAnalyzeWidgetPosition?: CSSProperties["position"];
  articleAnalyzeWidgetTop?: CSSProperties["top"];
  articleAnalyzeWidgetLeft?: CSSProperties["left"];
};

const ArticleAnalyzeWidget: NextPage<ArticleAnalyzeWidgetType> = ({
  searchBar,
  articleAnalyzeWidgetPosition,
  articleAnalyzeWidgetTop,
  articleAnalyzeWidgetLeft,
}) => {
  const articleAnalyzeWidgetStyle: CSSProperties = useMemo(() => {
    return {
      position: articleAnalyzeWidgetPosition,
      top: articleAnalyzeWidgetTop,
      left: articleAnalyzeWidgetLeft,
    };
  }, [
    articleAnalyzeWidgetPosition,
    articleAnalyzeWidgetTop,
    articleAnalyzeWidgetLeft,
  ]);

  return (
    <div
      className={styles.articleAnalyzeWidget}
      style={articleAnalyzeWidgetStyle}
    >
      <div className={styles.articlesToAnalyze}>Articles to Analyze</div>
      <SizeSmall
        sizeSmallSizeSmall="/searchbar1.svg"
        sizeSmallIconWidth="300px"
        sizeSmallIconHeight="30px"
        sizeSmallIconPosition="absolute"
        sizeSmallIconTop="55px"
        sizeSmallIconLeft="76px"
      />
      <ArticleModerationViewer
        articleModerationViewerPosition="absolute"
        articleModerationViewerTop="112px"
        articleModerationViewerLeft="0px"
      />
    </div>
  );
};

export default ArticleAnalyzeWidget;
