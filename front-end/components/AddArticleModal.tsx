import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./AddArticleModal.module.css";

type AddArticleModalType = {
  /** Style props */
  addArticleModalPosition?: CSSProperties["position"];
  addArticleModalTop?: CSSProperties["top"];
  addArticleModalLeft?: CSSProperties["left"];
};

const AddArticleModal: NextPage<AddArticleModalType> = ({
  addArticleModalPosition,
  addArticleModalTop,
  addArticleModalLeft,
}) => {
  const addArticleModalStyle: CSSProperties = useMemo(() => {
    return {
      position: addArticleModalPosition,
      top: addArticleModalTop,
      left: addArticleModalLeft,
    };
  }, [addArticleModalPosition, addArticleModalTop, addArticleModalLeft]);

  return (
    <div className={styles.addArticleModal} style={addArticleModalStyle}>
      <div className={styles.addArticleForm} />
      <div className={styles.addArticle}>Add Article</div>
      <div className={styles.submitButton}>
        <div className={styles.add}>Add</div>
      </div>
    </div>
  );
};

export default AddArticleModal;
