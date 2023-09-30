import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import FormContainer from "./FormContainer";
import ArticleRatingModal from "./ArticleRatingModal";
import styles from "./ArticleInfoModal.module.css";

type ArticleInfoModalType = {
  ratingFrame?: string;

  /** Style props */
  articleInfoModalPosition?: CSSProperties["position"];
  articleInfoModalTop?: CSSProperties["top"];
  articleInfoModalLeft?: CSSProperties["left"];
};

const ArticleInfoModal: NextPage<ArticleInfoModalType> = ({
  ratingFrame,
  articleInfoModalPosition,
  articleInfoModalTop,
  articleInfoModalLeft,
}) => {
  const articleInfoModalStyle: CSSProperties = useMemo(() => {
    return {
      position: articleInfoModalPosition,
      top: articleInfoModalTop,
      left: articleInfoModalLeft,
    };
  }, [articleInfoModalPosition, articleInfoModalTop, articleInfoModalLeft]);

  return (
    <div className={styles.articleInfoModal} style={articleInfoModalStyle}>
      <FormContainer />
      <ArticleRatingModal
        ratingFrame="/ratingframe.svg"
        articleRatingModalPosition="absolute"
        articleRatingModalTop="733px"
        articleRatingModalLeft="308px"
      />
    </div>
  );
};

export default ArticleInfoModal;
