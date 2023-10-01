import type { NextPage } from "next";
import styles from "./ArticleSearchElement.module.css";

type ArticleSearchElementType = {
  publishDate?: string;
  author?: string;
  articleName?: string;
};

const ArticleSearchElement: NextPage<ArticleSearchElementType> = ({
  publishDate = "...",
  author = "...",
  articleName = "...",
}) => {
  return (
    <button className={styles.articleSearchElement}>
      <div className={styles.dateBox}>
        <div className={styles.div}>{publishDate}</div>
      </div>
      <div className={styles.authorBox}>
        <div className={styles.peterBaerGalvin}>{author}</div>
      </div>
      <div className={styles.nameBox}>
        <div className={styles.operatingSystemConcepts}>{articleName}</div>
      </div>
    </button>
  );
};

export default ArticleSearchElement;
