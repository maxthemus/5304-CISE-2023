import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import DeclineButton from "./DeclineButton";
import AcceptButton from "./AcceptButton";
import ArticleInfo from "./ArticleInfo";
import styles from "./ArticleViewerModal.module.css";

type ArticleViewerModalType = {
  /** Style props */
  articleViewerModalPosition?: CSSProperties["position"];
  articleViewerModalTop?: CSSProperties["top"];
  articleViewerModalLeft?: CSSProperties["left"];
};

const ArticleViewerModal: NextPage<ArticleViewerModalType> = ({
  articleViewerModalPosition,
  articleViewerModalTop,
  articleViewerModalLeft,
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

  return (
    <div className={styles.articleViewerModal} style={articleViewerModalStyle}>
      <div className={styles.moderationButtons}>
        <DeclineButton
          declineButtonPosition="absolute"
          declineButtonTop="0px"
          declineButtonLeft="407px"
        />
        <AcceptButton
          acceptButtonPosition="absolute"
          acceptButtonTop="0px"
          acceptButtonLeft="0px"
        />
      </div>
      <ArticleInfo
        articleInfoPosition="absolute"
        articleInfoTop="65px"
        articleInfoLeft="15px"
        articleInfoBackgroundColor="rgba(134, 205, 130, 0)"
      />
      <div className={styles.articleInformation}>Article Information</div>
    </div>
  );
};

export default ArticleViewerModal;
