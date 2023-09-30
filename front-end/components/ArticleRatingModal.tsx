import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./ArticleRatingModal.module.css";

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

  return (
    <div className={styles.articleRatingModal} style={articleRatingModalStyle}>
      <div className={styles.rateArticle}>Rate Article</div>
      <img className={styles.ratingFrameIcon} alt="" src={ratingFrame} />
    </div>
  );
};

export default ArticleRatingModal;
