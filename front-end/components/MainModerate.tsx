import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ArticleModerationWidget from "./ArticleModerationWidget";
import ArticleViewerModal from "./ArticleViewerModal";
import styles from "./MainModerate.module.css";

type MainModerateType = {
  /** Style props */
  mainModeratePosition?: CSSProperties["position"];
  mainModerateTop?: CSSProperties["top"];
  mainModerateLeft?: CSSProperties["left"];
};

const MainModerate: NextPage<MainModerateType> = ({
  mainModeratePosition,
  mainModerateTop,
  mainModerateLeft,
}) => {
  const mainModerateStyle: CSSProperties = useMemo(() => {
    return {
      position: mainModeratePosition,
      top: mainModerateTop,
      left: mainModerateLeft,
    };
  }, [mainModeratePosition, mainModerateTop, mainModerateLeft]);

  return (
    <div className={styles.mainModerate} style={mainModerateStyle}>
      <ArticleModerationWidget
        articleModerationWidgetPosition="absolute"
        articleModerationWidgetTop="27px"
        articleModerationWidgetLeft="57px"
      />
      <ArticleViewerModal
        articleViewerModalPosition="absolute"
        articleViewerModalTop="27px"
        articleViewerModalLeft="527px"
      />
    </div>
  );
};

export default MainModerate;
