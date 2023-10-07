import type { NextPage } from "next";
import { useMemo, type CSSProperties, useEffect, useState } from "react";
import StateActive from "./StateActive";
import styles from "./ArticleModerationViewer.module.css";
import { Article } from "../interfaces/article";

type ArticleModerationViewerType = {
  /** Style props */
  articleModerationViewerPosition?: CSSProperties["position"];
  articleModerationViewerTop?: CSSProperties["top"];
  articleModerationViewerLeft?: CSSProperties["left"];
  articles?: Article[];
  active?: number;
  setActive?: Function;
  filter?: string;
};

const ArticleModerationViewer: NextPage<ArticleModerationViewerType> = ({
  articleModerationViewerPosition,
  articleModerationViewerTop,
  articleModerationViewerLeft,
  articles=[],
  active=-1,
  setActive=(()=>console.log("No function given")),
  filter=""
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
 

  const moderationMap = () => {
    return(
      articles.filter((item:Article) => {
        if(filter == "") {
          return true;
        }
        return item.name.startsWith(filter);
      }).map((value, index) => {
        return (<div onClick={() => handleClickArticle(index)} key={index} style={{opacity: (index === active ? 0.5 : 1)}}>
          <StateActive stateActivePosition="relative" stateActiveFlexShrink="0" text={value.name} />
        </div>);
      })
    );
  };

  const handleClickArticle = (index:number) => {
    setActive(index);
  };

  return (
    <div
      className={styles.articleModerationViewer}
      style={articleModerationViewerStyle}
    >
      {moderationMap()}
    </div>
  );
};

export default ArticleModerationViewer;
