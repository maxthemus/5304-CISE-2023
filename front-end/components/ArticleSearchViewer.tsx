import type { NextPage } from "next";
import { useMemo, type CSSProperties, useEffect, useState } from "react";
import SearchTableHeader from "./SearchTableHeader";
import styles from "./ArticleSearchViewer.module.css";
import ArticleSearchElement from "./ArticleSearchElement";

type ArticleSearchViewerType = {
  /** Style props */
  articleSearchViewerPosition?: CSSProperties["position"];
  articleSearchViewerTop?: CSSProperties["top"];
  articleSearchViewerLeft?: CSSProperties["left"];
  filterValue: string;
};

interface Article {
  name: string;
  author: string;
  publishDate: string;
  link: string;
  stage: string;
};

const ArticleSearchViewer: NextPage<ArticleSearchViewerType> = ({
  articleSearchViewerPosition,
  articleSearchViewerTop,
  articleSearchViewerLeft,
  filterValue
}) => {
  const api_path = process.env.NEXT_PUBLIC_API_URL;
  const [articles, setArticles] = useState<Article[]>([]);

  const articleSearchViewerStyle: CSSProperties = useMemo(() => {
    return {
      position: articleSearchViewerPosition,
      top: articleSearchViewerTop,
      left: articleSearchViewerLeft,
    };
  }, [
    articleSearchViewerPosition,
    articleSearchViewerTop,
    articleSearchViewerLeft,
  ]);

  //Functions 
  useEffect(() => {
    //Sends get requst to get all done articles  
    const apiUrl = api_path + "/article/stage/done";
    fetch(apiUrl).then((response) => {
      if(!response) { 
        throw new Error("Error collecting data");
      } else {
        return response.json();
      }
    }).then((data) => {
      setArticles(data.outputArticles);
      console.log(data);
    }).catch((err) => {
      console.log(err);
      alert("Error collecting search data. Check logs");
    });
  }, []);

  const mapDisplayArticles = () => {
    return(
      articles.map((value, index) => {
          if(value.name.startsWith(filterValue)) {
            return (<ArticleSearchElement articleName={value.name} author={value.author} publishDate={value.publishDate} key={index} />);
          } else {
            return null;
          }
      })
    );
  };


  return (
    <div
      className={styles.articleSearchViewer}
      style={articleSearchViewerStyle}
    >
      <SearchTableHeader
        searchTableHeaderPosition="absolute"
        searchTableHeaderTop="0px"
        searchTableHeaderLeft="0px"
      />
      <div style={{display: "flex", flexDirection: "column", height: "500px", gap: "10px", paddingTop: "75px"}}>
        {mapDisplayArticles()}
      </div>
    </div>
  );
};

export default ArticleSearchViewer;
