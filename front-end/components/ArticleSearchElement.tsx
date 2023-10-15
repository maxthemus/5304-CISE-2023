import type { NextPage } from "next";
import styles from "./ArticleSearchElement.module.css";
import { Article } from "../interfaces/article";

const ArticleSearchElement: NextPage<Article> = ({
  publishDate = "...",
  author = "...",
  name = "...",
  upRating = "...",
  downRating = "...",
  claim = "..."
}) => {
  return (
    <button className={styles.articleSearchElement}>
      <div className={styles.dateBox}>
        <div className={styles.div}>{publishDate}</div>
      </div>
      <div className={styles.authorBox}>
        <div className={styles.peterBaerGalvin}>{author}</div>
      </div>
      <div className={styles.claimBox}>
        <div className={styles.div1}>{claim}</div>
      </div>
      <div className={styles.ratingBox}>
        <div className={styles.upvoteBox}>
          <div className={styles.upvotetext}>{upRating}</div>
          <img className={styles.thumbUpIcon} alt="" src="/thumb-up.svg" />
        </div>
        <div className={styles.downvoteBox}>
          <div className={styles.upvotetext}>{downRating}</div>
          <img className={styles.thumbDownIcon} alt="" src="/thumb-down.svg" />
        </div>
      </div>
      <div className={styles.nameBox}>
        <div className={styles.operatingSystemConcepts}>{name}</div>
      </div>
    </button>
  );
};

export default ArticleSearchElement;
