import type { NextPage } from "next";
import { useMemo, type CSSProperties, useEffect, useState } from "react";
import ArticleModerationWidget from "./ArticleModerationWidget";
import ArticleViewerModal from "./ArticleViewerModal";
import styles from "./MainModerate.module.css";
import { Article } from "../interfaces/article";

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

  const api_path = process.env.NEXT_PUBLIC_API_URL;
   const [articles, setArticles] = useState<Article[]>([]);
  const [active, setActive] = useState<number>(-1);

 //Functions 
  useEffect(() => {
    //Sends get requst to get all done articles  
    const apiUrl = api_path + "/article/stage/moderation";
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
      console.log(data);
      setArticles(data.outputArticles);
      console.log(data);
    }).catch((err) => {
      console.log(err);
      alert("Error collecting search data. Check logs");
    });
  }, []);

  return (
    <div className={styles.mainModerate} style={mainModerateStyle}>
      <ArticleModerationWidget
        articleModerationWidgetPosition="absolute"
        articleModerationWidgetTop="27px"
        articleModerationWidgetLeft="57px"
        articles={articles}
        active={active}
        setActive={setActive}
      />
      <ArticleViewerModal
        articleViewerModalPosition="absolute"
        articleViewerModalTop="27px"
        articleViewerModalLeft="527px"
        article={active != -1 ? articles[active] : {
          name: "...",
          author: "...",
          publishDate: "...",
          link: "...",
          stage: "...",
          _id: "...",
          practice: "..."
        }}
      />
    </div>
  );
};

export default MainModerate;
