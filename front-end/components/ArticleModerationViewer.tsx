import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import StateActive from "./StateActive";
import styles from "./ArticleModerationViewer.module.css";

type ArticleModerationViewerType = {
  /** Style props */
  articleModerationViewerPosition?: CSSProperties["position"];
  articleModerationViewerTop?: CSSProperties["top"];
  articleModerationViewerLeft?: CSSProperties["left"];
};

const ArticleModerationViewer: NextPage<ArticleModerationViewerType> = ({
  articleModerationViewerPosition,
  articleModerationViewerTop,
  articleModerationViewerLeft,
}) => {
  const articleModerationViewerStyle: CSSProperties = useMemo(() => {
    return {
      position: articleModerationViewerPosition,
      top: articleModerationViewerTop,
      left: articleModerationViewerLeft,
    };
  }, [
    articleModerationViewerPosition,
    articleModerationViewerTop,
    articleModerationViewerLeft,
  ]);

  return (
    <div
      className={styles.articleModerationViewer}
      style={articleModerationViewerStyle}
    >
      <StateActive stateActivePosition="relative" stateActiveFlexShrink="0" />
    </div>
  );
};

export default ArticleModerationViewer;
