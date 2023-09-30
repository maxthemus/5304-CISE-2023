import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import InformationDisplayer from "./InformationDisplayer";
import styles from "./ArticleInfo.module.css";

type ArticleInfoType = {
  /** Style props */
  articleInfoPosition?: CSSProperties["position"];
  articleInfoTop?: CSSProperties["top"];
  articleInfoLeft?: CSSProperties["left"];
  articleInfoBackgroundColor?: CSSProperties["backgroundColor"];
};

const ArticleInfo: NextPage<ArticleInfoType> = ({
  articleInfoPosition,
  articleInfoTop,
  articleInfoLeft,
  articleInfoBackgroundColor,
}) => {
  const articleInfoStyle: CSSProperties = useMemo(() => {
    return {
      position: articleInfoPosition,
      top: articleInfoTop,
      left: articleInfoLeft,
      backgroundColor: articleInfoBackgroundColor,
    };
  }, [
    articleInfoPosition,
    articleInfoTop,
    articleInfoLeft,
    articleInfoBackgroundColor,
  ]);

  return (
    <div className={styles.articleInfo} style={articleInfoStyle}>
      <div className={styles.articleInfoFrame}>
        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article Name:</div>
          <InformationDisplayer
            text="Operating system Concepts"
            informationDisplayerPosition="absolute"
            informationDisplayerTop="24px"
            informationDisplayerLeft="0px"
          />
        </div>
        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article Author:</div>
          <InformationDisplayer
            text="author"
            informationDisplayerPosition="absolute"
            informationDisplayerTop="24px"
            informationDisplayerLeft="0px"
          />
        </div>
        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article Publish Date:</div>
          <InformationDisplayer
            text="10-04-2002"
            informationDisplayerPosition="absolute"
            informationDisplayerTop="24px"
            informationDisplayerLeft="0px"
          />
        </div>
        <div className={styles.articleName}>
          <div className={styles.articlePublishDate}>Article Link:</div>
          <InformationDisplayer
            text="N/A"
            informationDisplayerPosition="absolute"
            informationDisplayerTop="24px"
            informationDisplayerLeft="0px"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleInfo;
