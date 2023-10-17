import type { NextPage } from "next";
import ArticleInfo from "./ArticleInfo";
import styles from "./FormContainer.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Article } from "../interfaces/article";

const FormContainer: NextPage = () => {
  
   const api_path = process.env.NEXT_PUBLIC_API_URL;
  const [article, setArtcile] = useState<Article>({
    name: "...",
    author: "...",
    publishDate: "...",
    link: "...",
    stage: "...",
    _id: "...",
    practice: "..."
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
    <div className={styles.infoFrame}>
      <ArticleInfo
        articleInfoPosition="absolute"
        articleInfoTop="0px"
        articleInfoLeft="55px"
        articleInfoBackgroundColor="rgba(134, 205, 130, 0.5)"
        article={article}      
        />

    </div>
  );
};

export default FormContainer;
