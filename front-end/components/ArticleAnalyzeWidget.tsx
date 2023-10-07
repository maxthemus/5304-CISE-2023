import type { NextPage } from "next";
import { useMemo, type CSSProperties, useState } from "react";
import SizeSmall from "./SizeSmall";
import ArticleModerationViewer from "./ArticleModerationViewer";
import styles from "./ArticleAnalyzeWidget.module.css";
import { Article } from "../interfaces/article";

type ArticleAnalyzeWidgetType = {
  searchBar?: string;


  /** Style props */
  articleAnalyzeWidgetPosition?: CSSProperties["position"];
  articleAnalyzeWidgetTop?: CSSProperties["top"];
  articleAnalyzeWidgetLeft?: CSSProperties["left"];

  articles?: Article[];
  active: number;
  setActive: Function;
};

const ArticleAnalyzeWidget: NextPage<ArticleAnalyzeWidgetType> = ({
  searchBar,
  articleAnalyzeWidgetPosition,
  articleAnalyzeWidgetTop,
  articleAnalyzeWidgetLeft,
  articles,
  active,
  setActive
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
  const [filter, setFilter] = useState("");

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
        updateFilter={(value:string) => {setFilter(value)}}
      />
      <ArticleModerationViewer
        articleModerationViewerPosition="absolute"
        articleModerationViewerTop="112px"
        articleModerationViewerLeft="0px"
        articles={articles}
        active={active}
        setActive={setActive}
        filter={filter}
      />
    </div>
  );
};

export default ArticleAnalyzeWidget;
