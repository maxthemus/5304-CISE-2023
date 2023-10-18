import type { NextPage } from "next";
import { useMemo, type CSSProperties, useState } from "react";
import DeclineButton from "./DeclineButton";
import AcceptButton from "./AcceptButton";
import ArticleInfo from "./ArticleInfo";
import styles from "./ArticleViewerModal.module.css";
import { Article } from "../interfaces/article";
import { useRouter } from "next/router";

type ArticleViewerModalType = {
  /** Style props */
  articleViewerModalPosition?: CSSProperties["position"];
  articleViewerModalTop?: CSSProperties["top"];
  articleViewerModalLeft?: CSSProperties["left"];
  article: Article;
};

const ArticleViewerModal: NextPage<ArticleViewerModalType> = ({
  articleViewerModalPosition,
  articleViewerModalTop,
  articleViewerModalLeft,
  article={
    name: "...",
    author: "...",
    publishDate: "...",
    link: "...",
    stage: "...",
    _id: "...",
    practice: "..."
  }
}) => {
  const articleViewerModalStyle: CSSProperties = useMemo(() => {
    return {
      position: articleViewerModalPosition,
      top: articleViewerModalTop,
      left: articleViewerModalLeft,
    };
  }, [
    articleViewerModalPosition,
    articleViewerModalTop,
    articleViewerModalLeft,
  ]);
  const api_path = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  // Function to reload the page
  const reloadPage = () => {
    router.reload();
  };

  const handleArticle = (accepted: boolean) => {
    console.log("Sending moderation msg");
    const apiUrl = api_path + "/article/"+article.stage;

    if(article.stage === "analyze") {
      //Add pop up to add claims to the article 
      const claims = prompt("Please Add Claims for the article, as CSC. example = TDD,Design Patterns");

      //Then send the article 
      fetch(api_path + "/article/" + article._id, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          claim: claims
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("Data");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetch(apiUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      },
      body: JSON.stringify({
        id: article["_id"],
        accepted: accepted
      })
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data); 
      alert("Aritcle was " + (accepted ? "Accepted" : "Rejected"));
      reloadPage();
    }).catch((err) => {
      console.log(err);
    });
  };
  
  
  

  return (
    <div className={styles.articleViewerModal} style={articleViewerModalStyle}>
      <div className={styles.moderationButtons}>
        <div onClick={() => handleArticle(false)}>
          <DeclineButton
            declineButtonPosition="absolute"
            declineButtonTop="0px"
            declineButtonLeft="407px"
          />
        </div>
        <div onClick={() => handleArticle(true)}>
          <AcceptButton
            acceptButtonPosition="absolute"
            acceptButtonTop="0px"
            acceptButtonLeft="0px"
          />
        </div>
     </div>
      <ArticleInfo
        articleInfoPosition="absolute"
        articleInfoTop="65px"
        articleInfoLeft="15px"
        articleInfoBackgroundColor="rgba(134, 205, 130, 0)"
        article={article}
      />
      <div className={styles.articleInformation}>Article Information</div>
    </div>
  );
};

export default ArticleViewerModal;
