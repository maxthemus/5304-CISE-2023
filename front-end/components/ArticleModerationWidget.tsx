import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ArticleModerationViewer from "./ArticleModerationViewer";
import styles from "./ArticleModerationWidget.module.css";

type ArticleModerationWidgetType = {
  /** Style props */
  articleModerationWidgetPosition?: CSSProperties["position"];
  articleModerationWidgetTop?: CSSProperties["top"];
  articleModerationWidgetLeft?: CSSProperties["left"];
};

const ArticleModerationWidget: NextPage<ArticleModerationWidgetType> = ({
  articleModerationWidgetPosition,
  articleModerationWidgetTop,
  articleModerationWidgetLeft,
}) => {
  const articleModerationWidgetStyle: CSSProperties = useMemo(() => {
    return {
      position: articleModerationWidgetPosition,
      top: articleModerationWidgetTop,
      left: articleModerationWidgetLeft,
    };
  }, [
    articleModerationWidgetPosition,
    articleModerationWidgetTop,
    articleModerationWidgetLeft,
  ]);

  return (
    <div
      className={styles.articleModerationWidget}
      style={articleModerationWidgetStyle}
    >
      <ArticleModerationViewer
        articleModerationViewerPosition="absolute"
        articleModerationViewerTop="81px"
        articleModerationViewerLeft="0px"
      />
      <div className={styles.articlesToModerate}>Articles to Moderate</div>
    </div>
  );
};

export default ArticleModerationWidget;
