import type { NextPage } from "next";
import styles from "./ArticleSearchElement.module.css";

type ArticleSearchElementType = {
  publishDate?: string;
  author?: string;
  articleName?: string;
  upRating?: string;
  downRating?: string;
  claim?: string;
};

const ArticleSearchElement: NextPage<ArticleSearchElementType> = ({
  publishDate = "...",
  author = "...",
  articleName = "...",
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
        <div className={styles.operatingSystemConcepts}>{articleName}</div>
      </div>
    </button>
  );
};

export default ArticleSearchElement;
