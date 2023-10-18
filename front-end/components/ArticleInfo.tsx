import type { NextPage } from "next";
import { useMemo, type CSSProperties, useEffect, useState } from "react";
import InformationDisplayer from "./InformationDisplayer";
import styles from "./ArticleInfo.module.css";

import { Article } from "../interfaces/article";
import { useRouter } from 'next/router';

type ArticleInfoType = {
  /** Style props */
  articleInfoPosition?: CSSProperties["position"];
  articleInfoTop?: CSSProperties["top"];
  articleInfoLeft?: CSSProperties["left"];
  articleInfoBackgroundColor?: CSSProperties["backgroundColor"];
  article: Article;
};

const ArticleInfo: NextPage<ArticleInfoType> = ({
  articleInfoPosition,
  articleInfoTop,
  articleInfoLeft,
  articleInfoBackgroundColor,
  article={
    name: "...",
    author: "...",
    publishDate: "...",
    link: "...",
    stage: "...",
    _id: "...",
    practice: "...",
    claim: "..."
  }
}) => {
  const articleInfoStyle: CSSProperties = useMemo(() => {
    return {
      position: articleInfoPosition,
      top: articleInfoTop,
      left: articleInfoLeft,
      backgroundColor: articleInfoBackgroundColor,
    };
  }, [
    articleInfoPosition,
    articleInfoTop,
    articleInfoLeft,
    articleInfoBackgroundColor,
  ]);

  const mapClaims = (claims: string) => {
    const claimArray = claims.split(",");
    return (
      claimArray.map((value, index) => {
        return(
          <InformationDisplayer
            text={value}
            key={index}
            informationDisplayerPosition="relative"
            informationDisplayerTop="0px"
            informationDisplayerLeft="0px"
          /> 
        );
      })
    );
  }

 

  return (
    <div className={styles.articleInfo} style={articleInfoStyle}>
      <div className={styles.articleInfoFrame}>
        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article Name:</div>
          <InformationDisplayer
            text={article.name}
            informationDisplayerPosition="relative"
            informationDisplayerTop="0px"
            informationDisplayerLeft="0px"
          />
        </div>
        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article Author:</div>
          <InformationDisplayer
            text={article.author}
            informationDisplayerPosition="relative"
            informationDisplayerTop="0px"
            informationDisplayerLeft="0px"
          />
        </div>
        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article Publish Date:</div>
          <InformationDisplayer
            text={article.publishDate}
            informationDisplayerPosition="relative"
            informationDisplayerTop="0px"
            informationDisplayerLeft="0px"
          />
        </div>
        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article Link:</div>
          <InformationDisplayer
            text={article.link}
            informationDisplayerPosition="relative"
            informationDisplayerTop="0px"
            informationDisplayerLeft="0px"
          />
        </div>

        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>
            Software Engineering Practices:
          </div>
          <InformationDisplayer
            text={article.practice}
            informationDisplayerPosition="relative"
            informationDisplayerTop="0px"
            informationDisplayerLeft="0px"
          />
        </div>

        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article claims:</div>
          {
            mapClaims(article.claim || "")
          } 
        </div>
      </div>
    </div>
  );
};

export default ArticleInfo;
