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
};

const ArticleInfo: NextPage<ArticleInfoType> = ({
  articleInfoPosition,
  articleInfoTop,
  articleInfoLeft,
  articleInfoBackgroundColor,
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

  const api_path = process.env.NEXT_PUBLIC_API_URL;
  const [article, setArtcile] = useState<Article>({
    name: "...",
    author: "...",
    publishDate: "...",
    link: "...",
    stage: "...",
    _id: "..."
  });

  const router = useRouter();
  const {id} = router.query;
  console.log(id);
  useEffect(() => {
    console.log(id);
    if(id) {
      const apiUrl = api_path + "/article/" + id;
      console.log(apiUrl);

      fetch(apiUrl, {
        method: "GET",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': "*"
        }
      }).then((response) => {
        if (!response) {
          throw new Error("Error collecting data");
        } else {
          return response.json();
        }
      }).then((data) => {
        setArtcile(data.existingArticle);
        console.log(data);
      }).catch((err) => {
        console.log(err);
        alert("Error collecting search data. Check logs");
      }); 
    }
  }, []);
  

  return (
    <div className={styles.articleInfo} style={articleInfoStyle}>
      <div className={styles.articleInfoFrame}>
        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article Name:</div>
          <InformationDisplayer
            text={article.name}
            informationDisplayerPosition="absolute"
            informationDisplayerTop="24px"
            informationDisplayerLeft="0px"
          />
        </div>
        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article Author:</div>
          <InformationDisplayer
            text={article.author}
            informationDisplayerPosition="absolute"
            informationDisplayerTop="24px"
            informationDisplayerLeft="0px"
          />
        </div>
        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article Publish Date:</div>
          <InformationDisplayer
            text={article.publishDate}
            informationDisplayerPosition="absolute"
            informationDisplayerTop="24px"
            informationDisplayerLeft="0px"
          />
        </div>
        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article Link:</div>
          <InformationDisplayer
            text={article.link}
            informationDisplayerPosition="absolute"
            informationDisplayerTop="24px"
            informationDisplayerLeft="0px"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleInfo;
