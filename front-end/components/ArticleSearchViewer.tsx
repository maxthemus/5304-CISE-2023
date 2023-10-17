import type { NextPage } from "next";
import { useMemo, type CSSProperties, useEffect, useState } from "react";
import SearchTableHeader from "./SearchTableHeader";
import styles from "./ArticleSearchViewer.module.css";
import ArticleSearchElement from "./ArticleSearchElement";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { Article } from "../interfaces/article";


type ArticleSearchViewerType = {
  /** Style props */
  articleSearchViewerPosition?: CSSProperties["position"];
  articleSearchViewerTop?: CSSProperties["top"];
  articleSearchViewerLeft?: CSSProperties["left"];
  filterValue: string;
  SEFilter: string;
  updateSETypes: Function;
};



const ArticleSearchViewer: NextPage<ArticleSearchViewerType> = ({
  articleSearchViewerPosition,
  articleSearchViewerTop,
  articleSearchViewerLeft,
  filterValue,
  SEFilter,
  updateSETypes
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

      //Now we need to update the SE filters
      updateSEFilters(data.outputArticles); 

    }).catch((err) => {
      console.log(err);
      alert("Error collecting search data. Check logs");
    });
  }, []);

  //Updating the SE filters
  
  const updateSEFilters = (articles: Article[]) => {
    const uniquePractices: string[] = ["ALL"];

    for(const article of articles) {
      const addPractice = uniquePractices.filter((value) => value === article.practice);
      if(addPractice.length === 0) {
        uniquePractices.push(article.practice);
      }
    }
    console.log(uniquePractices);
    updateSETypes(uniquePractices);
   };


  const router = useRouter();

  const handleViewArticle = (article: Article) => {
    console.log("HELLO WORLD");
    router.push({
      pathname: "/ArticleScreen",
      query: {
        id: article._id,
      }
    });
  };

  const mapDisplayArticles = () => {
    return (
      articles.map((value:Article, index) => {
        if (value.name.startsWith(filterValue)) {
          if (SEFilter === "ALL" || SEFilter === value.practice) {
            return (
              <div key={index} onClick={() => handleViewArticle(value)}>
                <ArticleSearchElement name={value.name} author={value.author} publishDate={value.publishDate} upRating={value.upRating} downRating={value.downRating} claim={value.claim} practice={value.practice} />
              </div>);
          }
        } 
        return null;
      })
    );
  }


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
      <div style={{ display: "flex", flexDirection: "column", height: "500px", gap: "10px", marginTop: "75px", overflow:"scroll"}}>
        {mapDisplayArticles()}
      </div>
    </div>
  );
};

export default ArticleSearchViewer;
