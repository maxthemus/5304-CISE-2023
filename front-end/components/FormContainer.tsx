import type { NextPage } from "next";
import ArticleInfo from "./ArticleInfo";
import styles from "./FormContainer.module.css";

const FormContainer: NextPage = () => {
  return (
    <div className={styles.infoFrame}>
      <ArticleInfo
        articleInfoPosition="absolute"
        articleInfoTop="0px"
        articleInfoLeft="55px"
        articleInfoBackgroundColor="rgba(134, 205, 130, 0.5)"
        article={{
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

export default FormContainer;
