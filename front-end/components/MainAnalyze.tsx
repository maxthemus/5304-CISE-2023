import type { NextPage } from "next";
import { useMemo, type CSSProperties, useState, useEffect } from "react";
import ArticleAnalyzeWidget from "./ArticleAnalyzeWidget";
import ArticleViewerModal from "./ArticleViewerModal";
import styles from "./MainAnalyze.module.css";
import { Article } from "../interfaces/article";

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

  const api_path = process.env.NEXT_PUBLIC_API_URL;
   const [articles, setArticles] = useState<Article[]>([]);
  const [active, setActive] = useState<number>(-1);

 //Functions 
  useEffect(() => {
    //Sends get requst to get all done articles  
    const apiUrl = api_path + "/article/stage/analyze";
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
    <div className={styles.mainAnalyze} style={mainAnalyzeStyle}>
      <ArticleAnalyzeWidget
        searchBar="/searchbar1.svg"
        articleAnalyzeWidgetPosition="absolute"
        articleAnalyzeWidgetTop="27px"
        articleAnalyzeWidgetLeft="57px"
        active={active}
        setActive={setActive}
        articles={articles}
      />
      <ArticleViewerModal
        articleViewerModalPosition="absolute"
        articleViewerModalTop="27px"
        articleViewerModalLeft="528px"
        article={active != -1 ? articles[active] : {
          name: "...",
          author: "...",
          publishDate: "...",
          link: "...",
          stage: "...",
          _id: "..."
        }}
      />
    </div>
  );
};

export default MainAnalyze;
