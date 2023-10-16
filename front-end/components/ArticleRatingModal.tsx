import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./ArticleRatingModal.module.css";
import { useRouter } from "next/router";

type ArticleRatingModalType = {
  ratingFrame?: string;
  /** Style props */
  articleRatingModalPosition?: CSSProperties["position"];
  articleRatingModalTop?: CSSProperties["top"];
  articleRatingModalLeft?: CSSProperties["left"];
};

const ArticleRatingModal: NextPage<ArticleRatingModalType> = ({
  ratingFrame,
  articleRatingModalPosition,
  articleRatingModalTop,
  articleRatingModalLeft,
}) => {
  const api_path = process.env.NEXT_PUBLIC_API_URL;  
  const router = useRouter();
  const {id} = router.query;  

  const articleRatingModalStyle: CSSProperties = useMemo(() => {
    return {
      position: articleRatingModalPosition,
      top: articleRatingModalTop,
      left: articleRatingModalLeft,
    };
  }, [
    articleRatingModalPosition,
    articleRatingModalTop,
    articleRatingModalLeft,
  ]);

  //Handler for rating article
  const handleArticleRating = (upVote: boolean) => {
    console.log(upVote);

    //Sends get requst to get all done articles  
    const apiUrl = api_path + "/article/rate";
    fetch(apiUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      },
      body: JSON.stringify({
        id: id, 
        upRating: upVote
      }) 
    }).then((response) => {
      if (!response) {
        throw new Error("Error collecting data");
      } else {
        return response.json();
      }
    }).then((data) => {
      console.log(data);
      alert("Article has been rated");
    }).catch((err) => {
      console.log(err);
      alert("Error collecting search data. Check logs");
    });
  };


  return (
    <div className={styles.articleRatingModal} style={articleRatingModalStyle}>
      <div className={styles.rateArticle}>Rate Article</div>
      <img className={styles.ratingFrameIcon} alt="" src={ratingFrame} useMap="#rating-button-map"/>

      <map name="rating-button-map">
        <area shape="rect" coords="0,0,249,80" onClick={() => handleArticleRating(true)} />
        <area shape="rect" coords="375,0,624, 80" onClick={() => handleArticleRating(false)} />
      </map>
    </div>
  );
};

export default ArticleRatingModal;
